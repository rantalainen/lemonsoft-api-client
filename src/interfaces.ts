import { ApiConfig } from './api';
import CacheableLookup from 'cacheable-lookup';
import https from 'https';

export interface ILemonsoftApiClientOptions {
  /** Your Lemonsoft username */
  userName: string;
  /** Your Lemonsoft password */
  password: string;
  /** Company database */
  database: string;
  /** Your Lemonsoft API key */
  apiKey: string;
}

export interface ILemonsoftApiClientConfig extends ApiConfig<any> {
  /**
   * API base url,
   * by default: `https://rest-s01-prod02.lemonsoft.eu/Lemonsoft30`.
   */
  baseURL?: string;
  /** Request timeout in milliseconds, defaults to 120000 (120 secs) */
  timeout?: number;
  /** Instance of `https.Agent` or `true` to enable internal Keep Alive Agent, defaults to `true` */
  keepAliveAgent?: boolean | https.Agent;
  /** Instance of `cacheable-lookup` or `true` to enable internal DNS cache, defaults to `true` */
  dnsCache?: boolean | CacheableLookup;
}
