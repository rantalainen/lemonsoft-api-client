import { Api, ApiConfig } from './api';
import { AxiosRequestConfig } from 'axios';
import { HttpsAgent } from 'agentkeepalive';
import { ILemonsoftApiClientConfig, ILemonsoftApiClientOptions } from './interfaces';
import { FileBuffer } from './file-buffer';
import https from 'https';
import CacheableLookup from 'cacheable-lookup';
import FormData from 'form-data';

// DNS cache to prevent ENOTFOUND and other such issues
const dnsCache = new CacheableLookup();
let dnsCacheInstalled = false;

// https://learn.microsoft.com/en-us/azure/app-service/app-service-web-nodejs-best-practices-and-troubleshoot-guide#my-node-application-is-making-excessive-outbound-calls
// https://github.com/MicrosoftDocs/azure-docs/issues/29600#issuecomment-607990556
const httpsAgent = new HttpsAgent({
  maxSockets: 32,
  maxFreeSockets: 10,
  timeout: 30000,
  freeSocketTimeout: 4500,
  socketActiveTTL: 60000
});

export class LemonsoftApiClient {
  options: ILemonsoftApiClientOptions;
  config: Omit<ILemonsoftApiClientConfig, 'keepAliveAgent' | 'dnsCache'>;
  readonly api: LemonsoftApiClientInstance;
  private sessionId?: string;

  constructor(options: ILemonsoftApiClientOptions, config: ILemonsoftApiClientConfig = {}) {
    // Set default config
    config.baseURL = config.baseURL || 'https://rest-s01-prod02.lemonsoft.eu/Lemonsoft30';
    config.timeout = config.timeout || 120000;

    if (!options.userName) {
      throw new Error('Lemonsoft error: Missing options.userName');
    }
    if (!options.password) {
      throw new Error('Lemonsoft error: Missing options.password');
    }
    if (!options.database) {
      throw new Error('Lemonsoft error: Missing options.database');
    }
    if (!options.apiKey) {
      throw new Error('Lemonsoft error: Missing options.apiKey');
    }

    // If axios config httpsAgent is not set
    if (!config.httpsAgent) {
      // Use internal keepAliveAgent by default
      if (config.keepAliveAgent === true || config.keepAliveAgent === undefined) {
        config.httpsAgent = httpsAgent;
      } else {
        if (config.keepAliveAgent === false) {
          config.httpsAgent = new https.Agent({ keepAlive: false });
        } else {
          config.httpsAgent = config.keepAliveAgent;
        }
      }
    }

    // Use internal dnsCache by default
    if (config.dnsCache === true || config.dnsCache === undefined) {
      if (!dnsCacheInstalled) {
        dnsCache.install(config.httpsAgent);
        dnsCacheInstalled = true;
      }
    }

    // Delete custom properties before config is assigned
    delete config.keepAliveAgent;
    delete config.dnsCache;

    this.options = options;
    this.config = config;

    // Initialize Lemonsoft Api Client Instance
    this.api = new LemonsoftApiClientInstance({
      ...this.config,
      securityWorker: this.config.securityWorker || this.securityWorker
    });
    this.api.setSecurityData(this);

    // Install axios interceptor to add Session-Id header to requests
    this.installSessionIdHandler();

    // Install axios error handler
    this.installErrorHandler();
  }

  // Add interceptor to add Session-Id header to requests
  private installSessionIdHandler() {
    this.api.instance.interceptors.request.use(
      async (config) => {
        // If the request is not an authentication request and the Session-Id header is not set
        if (!config.url?.includes('auth') && !config.headers['Session-Id']) {
          // Get the Session-Id from the securityWorker
          await this.securityWorker(this);

          // Add the Session-Id header to the request
          config.headers['Session-Id'] = this.sessionId;
        }

        return config;
      },
      (error) => {
        throw error;
      }
    );
  }

  private installErrorHandler() {
    this.api.instance.interceptors.response.use(
      (response) => response,
      (error) => {
        error.message =
          `Lemonsoft HTTP error ${error.response.status} (${error.response.statusText}): ` + JSON.stringify(error.response.data);
        throw error;
      }
    );
  }

  private async securityWorker(lemonsoft: LemonsoftApiClient) {
    const axiosRequestConfig: AxiosRequestConfig = {};

    if (!this.sessionId) {
      const response = await lemonsoft.api.auth.authenticationLogInUser({
        UserName: lemonsoft.options.userName,
        Password: lemonsoft.options.password,
        Database: lemonsoft.options.database,
        ApiKey: lemonsoft.options.apiKey
      });

      this.sessionId = (response.data as { session_id: string }).session_id;

      // Reset the session id after 1 hour (session id is valid for 30 minutes)
      setTimeout(() => {
        this.sessionId = undefined;
      }, 20 * 60 * 1000);
    }

    axiosRequestConfig.headers = {
      'Session-Id': this.sessionId
    };

    return axiosRequestConfig;
  }
}

class LemonsoftApiClientInstance extends Api<any> {
  constructor(config?: ApiConfig<any>) {
    super(config);
  }

  // Override createFormData because FormData needs to be imported manually
  protected createFormData(input: Record<string, unknown>): any {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof FileBuffer;

        if (isFileType) {
          formData.append(key, formItem.buffer, {
            filename: formItem.name,
            contentType: formItem.type
          });
        } else {
          formData.append(key, this.stringifyFormItem(formItem));
        }
      }

      return formData;
    }, new FormData());
  }

  // helpers = {};
}
