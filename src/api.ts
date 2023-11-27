/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface LemonRestModelsQueryFiltersVoucherFilter {
  /** @format date-time */
  voucher_date_before?: string;
  /** @format date-time */
  voucher_date_after?: string;
  /** @format date-time */
  updated_before?: string;
  /** @format date-time */
  updated_after?: string;
  /**
   * 1 = Normaali
   * 2 = Alkusaldot
   * 3 = Alv-kirjaus
   * 4 = Tilinpäätös
   * @format int32
   */
  type?: number;
  /**
   * 0 = kirjattu
   * 1 = kierrossa
   * 2 = hylätty
   * 3 = hyväksytty
   * @format int32
   */
  state?: number;
  /**
   * Tilikauden tunniste
   * @format int32
   */
  period_id?: number;
  /**
   * Tilikauden tositelaji
   * @format int32
   */
  voucher_class?: number;
  object_ids?: number[];
  /**
   * Page number. If not provided, using default value of 1
   * @format int32
   */
  page?: number;
  /**
   * Page size. If not provided, using default value of 10
   * @format int32
   */
  page_size?: number;
  search?: string;
}

export interface LemonRestModelsQueryFiltersVoucherUpComingFilter {
  /**
   * Date to
   * @format date-time
   */
  voucher_date_before?: string;
  /**
   * Date from
   * @format date-time
   */
  voucher_date_after?: string;
}

export interface LemonRestModelsQueryFiltersAccountingPeriodFilter {
  description?: string;
  /**
   * If not defined, using default value of 1
   * @format int32
   */
  page?: number;
  /**
   * If not defined, using default value of 10
   * @format int32
   */
  page_size?: number;
}

export interface LemonRestModelsLogInInfo {
  UserName: string;
  Password: string;
  Database: string;
  ApiKey: string;
}

export interface LemonRestModelsLogInToken {
  Token: string;
  Database: string;
  ApiKey: string;
}

export interface LemonRestModelsQueryFiltersCampaignFilter {
  /** @format int32 */
  campaign_type?: number;
  /** @format int32 */
  campaign_state?: number;
  /** @format int32 */
  responsible_person?: number;
  /** @format date-time */
  campaign_created_before?: string;
  /** @format date-time */
  campaign_created_after?: string;
  campaign_description?: string;
  /** @format date-time */
  updated_before?: string;
  /** @format date-time */
  updated_after?: string;
  object_ids?: number[];
  /**
   * Page number. If not provided, using default value of 1
   * @format int32
   */
  page?: number;
  /**
   * Page size. If not provided, using default value of 10
   * @format int32
   */
  page_size?: number;
  search?: string;
}

export interface LemonRestModelsProxyCampaign {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  campaign_number?: number;
  /** @format int32 */
  campaign_type?: number;
  campaign_type_text?: string;
  /** @format date-time */
  campaign_date?: string;
  /** @format date-time */
  campaign_startdate?: string;
  /** @format date-time */
  campaign_enddate?: string;
  campaign_description?: string;
  /** @format int32 */
  responsible_person?: number;
  campaign_project_number_list?: number[];
  campaign_note?: string;
  /** @format int32 */
  campaign_maxamount?: number;
  campaign_location?: string;
  campaign_time?: string;
  campaign_registration?: string;
  campaign_instructor?: string;
  /** @format int32 */
  campaign_invoicing_customer?: number;
  campaign_contacts?: LemonRestModelsProxyCampaignContact[];
  campaign_products?: LemonRestModelsProxyCampaignProduct[];
  campaign_attributes?: LemonRestModelsProxyCampaignAttribute[];
}

export interface LemonRestModelsProxyCampaignContact {
  /** @format int32 */
  campaign_contact_id?: number;
  /** @format int32 */
  campaign_id?: number;
  /** @format int32 */
  customer_number?: number;
  campaign_customer_name?: string;
  /** @format int32 */
  customer_contact_id?: number;
  campaign_contact_name?: string;
  campaign_contacted_bit?: boolean;
  campaign_deal_bit?: boolean;
  campaign_invoice_bit?: boolean;
  campaign_contact_group?: string;
  campaign_contact_called?: boolean;
  /** @format date-time */
  campaign_contact_date?: string;
  campaign_contact_time?: string;
  campaign_contacted_info?: string;
  campaign_contact_product_code?: string;
  /** @format double */
  campaign_contact_discount?: number;
  cost_centre?: string;
}

export interface LemonRestModelsProxyCampaignProduct {
  /** @format int32 */
  campaign_product_id?: number;
  /** @format int32 */
  campaign_id?: number;
  product_code?: string;
  /** @format double */
  campaign_product_price?: number;
  /** @format double */
  campaign_product_amount?: number;
  campaign_product_default?: boolean;
}

export interface LemonRestModelsProxyCampaignAttribute {
  /** @format int32 */
  attribute_code?: number;
  is_checked?: boolean;
  attribute_description?: string;
}

/** Contact filter used to filter contacts when listing them */
export interface LemonRestModelsQueryFiltersContactFilter {
  /** Contact name [CONTAINS] */
  name?: string;
  email?: string;
  /** @format date-time */
  modified_before?: string;
  /** @format date-time */
  modified_after?: string;
  object_ids?: number[];
  /**
   * Page number. If not provided, using default value of 1
   * @format int32
   */
  page?: number;
  /**
   * Page size. If not provided, using default value of 10
   * @format int32
   */
  page_size?: number;
  search?: string;
}

export interface LemonRestModelsProxyCustomerContact {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  customer_id: number;
  name?: string;
  attributes?: LemonRestModelsProxyCustomerContactAttribute[];
  street?: string;
  street2?: string;
  department?: string;
  email?: string;
  fax?: string;
  gsm?: string;
  note?: string;
  phone?: string;
  postal_city?: string;
  postal_code?: string;
  city?: string;
  title?: string;
}

export interface LemonRestModelsProxyCustomerContactAttribute {
  /** @format int32 */
  id: number;
  name?: string;
  selected: boolean;
  /** @format int32 */
  contact_id?: number;
}

export interface LemonRestModelsQueryFiltersCustomerFilter {
  name?: string;
  search_name?: string;
  email?: string;
  vat?: string;
  /** @format date-time */
  modified_before?: string;
  /** @format date-time */
  modified_after?: string;
  /** @format int32 */
  has_email?: number;
  /** @format int32 */
  is_customer?: number;
  /** @format int32 */
  is_supplier?: number;
  customer_number?: number[];
  /** @format int32 */
  group?: number;
  object_ids?: number[];
  /**
   * Page number. If not provided, using default value of 1
   * @format int32
   */
  page?: number;
  /**
   * Page size. If not provided, using default value of 10
   * @format int32
   */
  page_size?: number;
  search?: string;
}

export interface LemonRestModelsProxyCustomer {
  searchname?: string;
  email: string;
  currency_code?: string;
  attributes?: LemonRestModelsProxyCustomerAttribute[];
  contacts?: LemonRestModelsProxyCustomerContact[];
  texts?: LemonRestModelsProxyCustomerText[];
  costcenter?: string;
  delivery_code?: string;
  /** @format int32 */
  invoicing_customer_number?: number;
  /** @format int32 */
  orderer_customer_number?: number;
  is_customer?: boolean;
  is_nonactive?: boolean;
  is_prospect?: boolean;
  is_supplier?: boolean;
  /** @format date-time */
  created?: string;
  /** @format date-time */
  modified?: string;
  /** @format int32 */
  delivery_method_number?: number;
  /** @format int32 */
  delivery_term?: number;
  /** @format int32 */
  payment_term_number?: number;
  /** @format double */
  interest?: number;
  sales_account?: string;
  purchase_account?: string;
  receivables_account?: string;
  accountspayable_account?: string;
  /** @format int32 */
  invoice_method_id?: number;
  invoice_code?: string;
  finvoice_address?: string;
  reference?: string;
  /** @format double */
  creditlimit?: number;
  deny_credit?: boolean;
  /** @format int32 */
  reseller?: number;
  agreements?: LemonRestModelsProxyCustomerAgreement[];
  accounts?: LemonRestModelsProxyCustomerAccount[];
  circulations?: LemonRestModelsProxyCustomerCirculation[];
  /** @format int32 */
  id?: number;
  /** @format int32 */
  number?: number;
  name: string;
  name2?: string;
  phone?: string;
  vat?: string;
  street?: string;
  street2?: string;
  city?: string;
  postal_code?: string;
  country?: string;
  www?: string;
  language_code?: string;
  /** @format int32 */
  group?: number;
  /** @format int32 */
  customer_group_id?: number;
  invoicing_name?: string;
  invoicing_name2?: string;
  invoicing_address?: string;
  invoicing_postal_code?: string;
  invoicing_city?: string;
  /** @format int32 */
  type?: number;
  /** @format int32 */
  seller_number?: number;
}

export interface LemonRestModelsProxyCustomerAttribute {
  /** @format int32 */
  id: number;
  name?: string;
  selected: boolean;
}

export interface LemonRestModelsProxyCustomerText {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  header_number?: number;
  note?: string;
}

export interface LemonRestModelsProxyCustomerAgreement {
  products?: LemonRestModelsProxyCustomerAgreementProduct[];
  /** @format int32 */
  id?: number;
  /** @format int32 */
  type?: number;
  /** @format date-time */
  date?: string;
  /** @format int32 */
  invoicing_customer?: number;
  notes?: string;
  /** @format int32 */
  period_length?: number;
  description?: string;
  /** @format date-time */
  startdate?: string;
  /** @format date-time */
  enddate?: string;
  /** @format date-time */
  checkdate?: string;
  /** @format date-time */
  install_date?: string;
  /** @format date-time */
  invoiced_date?: string;
  mark?: string;
  invoice_text?: string;
  order_number?: string;
  /** @format int32 */
  blocking?: number;
  /** @format int32 */
  responsible_person?: number;
  invoice_travelling_bit?: boolean;
  auto_renew_bit?: boolean;
  /** @format int32 */
  service_person_number?: number;
  /** @format int32 */
  backup_service_person_number?: number;
  /** @format double */
  response_time?: number;
  leasing_number?: string;
  /** @format date-time */
  leasing_start_date?: string;
  /** @format date-time */
  leasing_end_date?: string;
  /** @format double */
  leasing_value?: number;
  /** @format double */
  leasing_end_value?: number;
  /** @format int32 */
  automation_weekday?: number;
  /** @format int32 */
  automation_month?: number;
  /** @format date-time */
  automation_markdate?: string;
  location?: string;
  email?: string;
  phone?: string;
  no_charges?: boolean;
  /** @format int32 */
  travel_time_percent?: number;
  /** @format int32 */
  master?: number;
  /** @format int32 */
  balancing_period?: number;
  /** @format date-time */
  balanced_date?: string;
  /** @format int32 */
  payment_term?: number;
  based_charges?: boolean;
  no_crediting?: boolean;
  /** @format int32 */
  pricelist?: number;
  show_included_amount?: boolean;
}

export interface LemonRestModelsProxyCustomerAccount {
  /** @format int32 */
  account_id?: number;
  /** @format int32 */
  customer_id?: number;
  account_number?: string;
  bank_name?: string;
  bank_address?: string;
  bank_address2?: string;
  bank_country_code?: string;
  bank_info?: string;
  bic?: string;
  iban?: string;
  foreign_type?: string;
  foreign_share?: string;
  clearing?: string;
}

export interface LemonRestModelsProxyCustomerCirculation {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  customer_id?: number;
  /** @format int32 */
  person_number?: number;
  /**
   * @format int32
   * @min 0
   * @max 1
   */
  circulation_type?: number;
}

export interface LemonRestModelsProxyCustomerAgreementProduct {
  /** @format int32 */
  agreement_product_id?: number;
  /** @format int32 */
  agreement_id?: number;
  product_code?: string;
  product_description?: string;
  product_description2?: string;
  product_serialnumber?: string;
  /** @format double */
  product_amount?: number;
  product_unit?: string;
  /** @format double */
  product_price?: number;
  /** @format int32 */
  product_type?: number;
  /** @format double */
  product_unitprice?: number;
  /** @format double */
  product_discount?: number;
  /** @format double */
  product_amount2?: number;
  /** @format int32 */
  product_blocking?: number;
  product_notes?: string;
  /** @format date-time */
  warranty_ends?: string;
  /** @format double */
  product_sales_price?: number;
  /** @format int32 */
  service_interval?: number;
  /** @format int32 */
  calibration_interval?: number;
  /** @format int32 */
  product_project_id?: number;
  /** @format int32 */
  product_project_phase_id?: number;
}

export interface LemonRestModelsQueryFiltersCustomerTransactionFilter {
  /** @format int32 */
  type?: number;
  /** @format int32 */
  state?: number;
  /** @format int32 */
  customer_number?: number;
  /** @format date-time */
  transaction_date_before?: string;
  /** @format date-time */
  transaction_date_after?: string;
  /** @format int32 */
  person_number?: number;
  /** @format int32 */
  todo_person_number?: number;
  /** @format int32 */
  project_number?: number;
  /** @format int32 */
  customer_contact_id?: number;
  object_ids?: number[];
  /**
   * Page number. If not provided, using default value of 1
   * @format int32
   */
  page?: number;
  /**
   * Page size. If not provided, using default value of 10
   * @format int32
   */
  page_size?: number;
  search?: string;
}

export interface LemonRestModelsProxyCustomerTransaction {
  /** @format int32 */
  id?: number;
  subject?: string;
  /** @format date-time */
  todo_enddate?: string;
  /** @format int32 */
  todo_person_number?: number;
  /** @format int32 */
  person_number?: number;
  /** @format date-time */
  todo_startdate?: string;
  header?: string;
  /** @format int32 */
  appointment_type?: number;
  /** @format int32 */
  type?: number;
  /** @format int32 */
  sec_type?: number;
  /** @format date-time */
  date?: string;
  person_name?: string;
  /** @format int32 */
  customer_number?: number;
  /** @format int32 */
  customer_contact_id?: number;
  todo_description?: string;
  /** @format int32 */
  duration?: number;
  /** @format int32 */
  project_number?: number;
  /** @format int32 */
  project_phase_id?: number;
  /** @format int32 */
  orderer_customer_number?: number;
  invoice_bit?: boolean;
  /** @format double */
  hours?: number;
  invoiced_bit?: boolean;
  /** @format int32 */
  state?: number;
  /** @format int32 */
  crm_type_attribute_id?: number;
  /** @format int32 */
  priority?: number;
  attributes?: LemonRestModelsProxyCustomerTransactionAttribute[];
  participates?: LemonRestModelsProxyCustomerTransactionParticipate[];
}

export interface LemonRestModelsProxyCustomerTransactionAttribute {
  /** @format int32 */
  code: number;
  description?: string;
  info?: string;
  group_description?: string;
  is_checked?: boolean;
}

export interface LemonRestModelsProxyCustomerTransactionParticipate {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  participate_number?: number;
  /** @format int32 */
  participate_type?: number;
  participate_contact_name?: string;
  /** @format int32 */
  participate_customer_contact_id?: number;
}

export interface LemonRestModelsQueryFiltersCustomerGroupFilter {
  name?: string;
  /** @format int32 */
  parent_id?: number;
  object_ids?: number[];
  /**
   * Page number. If not provided, using default value of 1
   * @format int32
   */
  page?: number;
  /**
   * Page size. If not provided, using default value of 10
   * @format int32
   */
  page_size?: number;
  search?: string;
}

export interface LemonRestModelsQueryFiltersLemonFilesFilter {
  /** @format int32 */
  application_id?: number;
  search?: string;
}

/** Vain upload käytössä oleva proxy */
export interface LemonRestModelsProxyAzureBlobItemUpload {
  filename: string;
  filepath: string;
  metadata: LemonRestModelsProxyAzureBlobItemMetadata[];
  bytes: string;
}

export interface LemonRestModelsProxyAzureBlobItemMetadata {
  /** @format int32 */
  metadatakey?: number;
  key?: string;
  value?: string;
}

/** Työn kuvaliitteet */
export interface LemonRestModelsProxyJobImage {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  object_id?: number;
  /** @format int32 */
  data_id?: number;
  description?: string;
  prefix?: string;
  /** @format byte */
  bytes?: string;
  /** @format int32 */
  type?: number;
  printname?: string;
}

export interface LemonRestModelsQueryFiltersSalesInvoiceFilter {
  numbers?: number[];
  /** @format int32 */
  customer_number?: number;
  /** @format int32 */
  delivery_customer_number?: number;
  /** @format int32 */
  type?: number;
  /** @format date-time */
  invoice_date_before?: string;
  /** @format date-time */
  invoice_date_after?: string;
  /** @format date-time */
  updated_before?: string;
  /** @format date-time */
  updated_after?: string;
  object_ids?: number[];
  /**
   * Page number. If not provided, using default value of 1
   * @format int32
   */
  page?: number;
  /**
   * Page size. If not provided, using default value of 10
   * @format int32
   */
  page_size?: number;
  search?: string;
}

export interface LemonRestModelsProxyInvoice {
  /** @format int32 */
  company_location_id?: number;
  currency_code?: string;
  /** @format int32 */
  delivery_method?: number;
  bank_code?: string;
  rf_reference?: string;
  /** @format date-time */
  agreed_due_date?: string;
  /** @format double */
  cash_amount?: number;
  /** @format date-time */
  cash_date?: string;
  customer_order_number?: string;
  delivery_code?: string;
  delivery_customer_address?: string;
  delivery_customer_address2?: string;
  delivery_customer_address3?: string;
  delivery_customer_contact?: string;
  delivery_customer_country?: string;
  delivery_customer_name?: string;
  delivery_customer_additional_name?: string;
  /** @format int32 */
  delivery_customer_number?: number;
  delivery_customer_contact_phone?: string;
  delivery_customer_contact_email?: string;
  /** @format int32 */
  delivery_term?: number;
  note?: string;
  orderer_customer_address?: string;
  orderer_customer_address2?: string;
  orderer_customer_address3?: string;
  orderer_customer_contact?: string;
  orderer_customer_country?: string;
  orderer_customer_name?: string;
  orderer_customer_additional_name?: string;
  /** @format int32 */
  orderer_customer_number?: number;
  orderer_customer_contact_phone?: string;
  orderer_customer_contact_email?: string;
  order_mark?: string;
  our_reference?: string;
  /** @format int32 */
  project_number?: number;
  reference?: string;
  tax_type?: boolean;
  /** @format double */
  total_sum?: number;
  /** @format int32 */
  type?: number;
  /** @format date-time */
  value_date?: string;
  /** @format int32 */
  payment_term?: number;
  /** @format int32 */
  person_driver?: number;
  /** @format int32 */
  person_invoice_res_person?: number;
  /** @format int32 */
  person_seller_number?: number;
  customer_reference?: string;
  rows?: LemonRestModelsProxyInvoiceRow[];
  payments?: LemonRestModelsProxyInvoicePayment[];
  links?: LemonRestModelsProxyLink[];
  /** @format int32 */
  id?: number;
  /** @format int32 */
  number?: number;
  /**
   * @format int32
   * @min 0
   * @max 20
   */
  invoice_method?: number;
  invoice_method_description?: string;
  customer_address?: string;
  customer_address2?: string;
  customer_address3?: string;
  customer_contact?: string;
  customer_country?: string;
  customer_name?: string;
  customer_additional_name?: string;
  /** @format int32 */
  customer_number?: number;
  customer_contact_phone?: string;
  customer_contact_email?: string;
  /** @format date-time */
  date: string;
  description?: string;
  /** @format date-time */
  due_date?: string;
  invoiced_bit?: boolean;
  reminder_bit?: boolean;
  /** @format int32 */
  reminder_count?: number;
  /** @format date-time */
  reminder_date?: string;
  language_code?: string;
  /** @format double */
  currency_rate?: number;
  state?: string;
}

export interface LemonRestModelsProxyInvoiceRow {
  /** @format int32 */
  invoice_id?: number;
  /** @format int32 */
  batch_number?: number;
  /** @format int32 */
  delivery_customer_number?: number;
  /** @format date-time */
  delivery_date?: string;
  /** @format int32 */
  order_number?: number;
  reference?: string;
  /** @format int32 */
  stock_id?: number;
  /** @format int32 */
  person_seller_id?: number;
  sizes?: LemonRestModelsProxySizeAmount[];
  /** @format int32 */
  id?: number;
  /** @format int32 */
  type?: number;
  account?: string;
  cost_center?: string;
  project_code?: string;
  /** @format int32 */
  project_number?: number;
  /** @format int32 */
  project_phase_id?: number;
  /** @format double */
  discount?: number;
  /** @format double */
  discount2?: number;
  /** @format double */
  discount3?: number;
  /** @format double */
  per?: number;
  /** @format double */
  sales_price?: number;
  /** @format double */
  total: number;
  /** @format double */
  unit_price: number;
  /** @format double */
  quantity: number;
  /** @format double */
  quantity2?: number;
  color?: string;
  /** @format double */
  customer_discount_percentage?: number;
  dimension?: string;
  inner_note?: string;
  /** @format double */
  net_price?: number;
  no_stock_update?: boolean;
  note?: string;
  /** @format int32 */
  number?: number;
  position?: string;
  product_code?: string;
  product_name?: string;
  product_extra_name?: string;
  /** @format double */
  tax_amount?: number;
  /** @format double */
  tax_rate?: number;
  unit?: string;
  /** @format double */
  unit_net_price?: number;
  /** @format double */
  unit_net_price_currency?: number;
  unit_net_currency?: string;
  /** @format int32 */
  product_stock?: number;
  lta?: string;
  /** @format double */
  weight?: number;
  /** @format int32 */
  supplier_id?: number;
  row_serial?: string;
  is_serial_follow_up?: boolean;
  /** @format int32 */
  serialnumber_type?: number;
  is_batch_follow_up?: boolean;
}

export interface LemonRestModelsProxyInvoicePayment {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  invoice_id?: number;
  description?: string;
  accountlist_account?: string;
  /** @format int32 */
  codelist_cashier_number?: number;
  /** @format int32 */
  codelist_paymentcode?: number;
  costcenter_code?: string;
  /** @format date-time */
  customer_date?: string;
  /** @format double */
  tax_rate?: number;
  account_currency?: string;
  /** @format double */
  currency_rate?: number;
  /** @format date-time */
  date: string;
  /** @format double */
  total?: number;
  /** @format double */
  total_incurrency?: number;
  /** @format int32 */
  reference_payment_id?: number;
  interest_bit?: boolean;
  rounding_bit?: boolean;
  archive?: string;
  /** @format int32 */
  project?: number;
  lta?: string;
}

export interface LemonRestModelsProxyLink {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  application_id?: number;
  /** @format int32 */
  object_id?: number;
  target?: string;
  description?: string;
  type?: string;
  /** @format int32 */
  codelist_type?: number;
}

export interface LemonRestModelsProxySizeAmount {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  row_id?: number;
  size?: string;
  ean?: string;
  /** @format double */
  amount?: number;
  /** @format double */
  dlvr_amount?: number;
  /** @format double */
  total_dlvr_amount?: number;
  /** @format int32 */
  sort_order?: number;
}

export interface LemonRestModelsQueryFiltersOfferFilter {
  /** @format int32 */
  customer_number?: number;
  /** @format int32 */
  delivery_customer_number?: number;
  /** @format date-time */
  offer_date_before?: string;
  /** @format date-time */
  offer_date_after?: string;
  /** @format date-time */
  updated_before?: string;
  /** @format date-time */
  updated_after?: string;
  include_old_versions?: boolean;
  offer_numbers?: number[];
  object_ids?: number[];
  /**
   * Page number. If not provided, using default value of 1
   * @format int32
   */
  page?: number;
  /**
   * Page size. If not provided, using default value of 10
   * @format int32
   */
  page_size?: number;
  search?: string;
}

export interface LemonRestModelsProxyOffer {
  /** @format date-time */
  offer_date?: string;
  offer_description?: string;
  /** @format int32 */
  offer_id?: number;
  /** @format int32 */
  offer_number?: number;
  offer_rows?: LemonRestModelsProxyOfferRow[];
  /** @format date-time */
  offer_deal_date?: string;
  /** @format date-time */
  offer_valid_date?: string;
  /** @format date-time */
  offer_deliverydate?: string;
  /** @format date-time */
  offer_invoicing_date?: string;
  /** @format int32 */
  version_count?: number;
  /** @format int32 */
  offer_type_attribute?: number;
  /** @format int32 */
  offer_type?: number;
  /** @format double */
  tot_profit?: number;
  /** @format double */
  tot_without_tax?: number;
  /** @format double */
  profit_percent?: number;
  currency_code?: string;
  offer_ordermark?: string;
  offer_our_reference?: string;
  /** @format int32 */
  person_seller_number?: number;
  /** @format int32 */
  payment_term?: number;
  /** @format int32 */
  delivery_method?: number;
  offer_delivery_code?: string;
  /** @format int32 */
  offer_delivery_term?: number;
  /** @format int32 */
  person_invoice_res_person?: number;
  offer_taxtype_bit?: boolean;
  /** @format double */
  offer_totalsum?: number;
  /** @format int32 */
  company_location_id?: number;
  offer_note?: string;
  /** @format int32 */
  offer_customer_number?: number;
  offer_customer_name1?: string;
  offer_customer_reference?: string;
  offer_customer_name2?: string;
  offer_customer_address1?: string;
  offer_customer_country?: string;
  offer_customer_contact?: string;
  /** @format int32 */
  offer_project_number?: number;
  delivery_customer_number?: string;
  delivery_customer_name1?: string;
  delivery_customer_name2?: string;
  delivery_customer_address1?: string;
  delivery_customer_address2?: string;
  delivery_customer_country?: string;
  delivery_customer_contact?: string;
  won_bit?: boolean;
  lost_bit?: boolean;
  wait_bit?: boolean;
  won_why?: string;
  lost_why?: string;
  wait_why?: string;
  /** @format date-time */
  won_date?: string;
  /** @format date-time */
  lost_date?: string;
  /** @format date-time */
  wait_date?: string;
  version?: string;
  is_newest_version?: boolean;
  /** @format int32 */
  order_number?: number;
  links?: LemonRestModelsProxyLink[];
}

export interface LemonRestModelsProxyOfferRow {
  invoice?: boolean;
  /** @format int32 */
  offer_id?: number;
  offerrow_reference?: string;
  /** @format date-time */
  offerrow_deliverydate?: string;
  /** @format int32 */
  offerrow_ordernumber?: number;
  stock_unit?: string;
  /** @format int32 */
  row_product_batch_id?: number;
  sizes?: LemonRestModelsProxySizeAmount[];
  /** @format int32 */
  id?: number;
  /** @format int32 */
  type?: number;
  account?: string;
  cost_center?: string;
  project_code?: string;
  /** @format int32 */
  project_number?: number;
  /** @format int32 */
  project_phase_id?: number;
  /** @format double */
  discount?: number;
  /** @format double */
  discount2?: number;
  /** @format double */
  discount3?: number;
  /** @format double */
  per?: number;
  /** @format double */
  sales_price?: number;
  /** @format double */
  total: number;
  /** @format double */
  unit_price: number;
  /** @format double */
  quantity: number;
  /** @format double */
  quantity2?: number;
  color?: string;
  /** @format double */
  customer_discount_percentage?: number;
  dimension?: string;
  inner_note?: string;
  /** @format double */
  net_price?: number;
  no_stock_update?: boolean;
  note?: string;
  /** @format int32 */
  number?: number;
  position?: string;
  product_code?: string;
  product_name?: string;
  product_extra_name?: string;
  /** @format double */
  tax_amount?: number;
  /** @format double */
  tax_rate?: number;
  unit?: string;
  /** @format double */
  unit_net_price?: number;
  /** @format double */
  unit_net_price_currency?: number;
  unit_net_currency?: string;
  /** @format int32 */
  product_stock?: number;
  lta?: string;
  /** @format double */
  weight?: number;
  /** @format int32 */
  supplier_id?: number;
  row_serial?: string;
  is_serial_follow_up?: boolean;
  /** @format int32 */
  serialnumber_type?: number;
  is_batch_follow_up?: boolean;
}

export interface LemonRestModelsQueryFiltersOrderFilter {
  /** @format int32 */
  type?: number;
  state?: number[];
  /** @format int32 */
  customer_number?: number;
  /** @format int32 */
  delivery_customer_number?: number;
  order_numbers?: number[];
  /** @format date-time */
  ordered_before?: string;
  /** @format date-time */
  ordered_after?: string;
  /** @format date-time */
  updated_before?: string;
  /** @format date-time */
  updated_after?: string;
  only_allowed_types?: boolean;
  sort_desc?: boolean;
  only_models?: boolean;
  object_ids?: number[];
  /**
   * Page number. If not provided, using default value of 1
   * @format int32
   */
  page?: number;
  /**
   * Page size. If not provided, using default value of 10
   * @format int32
   */
  page_size?: number;
  search?: string;
}

export interface LemonRestModelsProxySalesOrder {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  number?: number;
  /** @format date-time */
  order_datetime: string;
  /** @format date-time */
  delivery_datetime?: string;
  /** @format date-time */
  shipment_datetime?: string;
  rows: LemonRestModelsProxySalesOrderRow[];
  /** @format int32 */
  customer_number?: number;
  customer_address?: string;
  customer_address2?: string;
  customer_address3?: string;
  customer_contact?: string;
  customer_contact_email?: string;
  customer_contact_phone?: string;
  customer_country?: string;
  customer_name?: string;
  customer_name2?: string;
  customer_order_number?: string;
  customer_reference?: string;
  /** @format int32 */
  delivery_customer_number?: number;
  delivery_customer_address?: string;
  delivery_customer_address2?: string;
  delivery_customer_address3?: string;
  delivery_customer_contact?: string;
  delivery_customer_contact_email?: string;
  delivery_customer_contact_phone?: string;
  delivery_customer_country?: string;
  delivery_customer_name?: string;
  delivery_customer_name2?: string;
  /** @format int32 */
  orderer_customer_number?: number;
  orderer_customer_address?: string;
  orderer_customer_address2?: string;
  orderer_customer_address3?: string;
  orderer_customer_contact?: string;
  orderer_customer_contact_email?: string;
  orderer_customer_contact_phone?: string;
  orderer_customer_country?: string;
  orderer_customer_name?: string;
  orderer_customer_name2?: string;
  /** @format int32 */
  consignee_customer_number?: number;
  consignee_customer_address?: string;
  consignee_customer_address2?: string;
  consignee_customer_address3?: string;
  consignee_customer_contact?: string;
  consignee_customer_contact_email?: string;
  consignee_customer_contact_phone?: string;
  consignee_customer_country?: string;
  consignee_customer_name?: string;
  consignee_customer_name2?: string;
  is_confirmed?: boolean;
  is_taxful?: boolean;
  /** @format double */
  currency_rate?: number;
  /** @format double */
  total?: number;
  /** @format double */
  weight?: number;
  /** @format int32 */
  delivery_method?: number;
  /** @format int32 */
  delivery_term?: number;
  /** @format int32 */
  payment_term?: number;
  /** @format int32 */
  invoice_res_person?: number;
  /** @format int32 */
  seller_number?: number;
  /** @format int32 */
  project_number?: number;
  /** @format int32 */
  row_count?: number;
  /** @format int32 */
  state?: number;
  /** @format int32 */
  type?: number;
  currency_code?: string;
  delivery_code?: string;
  delivery_text?: string;
  description?: string;
  invoice_reference?: string;
  language_code?: string;
  note?: string;
  mark?: string;
  our_reference?: string;
  service_product?: string;
  service_serialnumber?: string;
  service_description_todo?: string;
  service_description_done?: string;
  service_description_inner?: string;
  service_price_estimate?: string;
  /** @format int32 */
  service_failcode?: number;
  /** @format double */
  service_workhours?: number;
  /** @format int32 */
  service_km_start?: number;
  /** @format int32 */
  service_km_end?: number;
  /** @format int32 */
  service_km?: number;
  /** @format double */
  service_travel_time?: number;
  /** @format double */
  service_day_allowance?: number;
  /** @format double */
  service_halfday_allowance?: number;
  /** @format int32 */
  service_version?: number;
  /** @format date-time */
  service_donedate?: string;
  /** @format date-time */
  service_started?: string;
  service_warranty_bit?: boolean;
  service_contact?: string;
  service_location?: string;
  /** @format date-time */
  service_started_trip?: string;
  /** @format date-time */
  service_started_date_calendar?: string;
  /** @format date-time */
  service_ended_date_calendar?: string;
  /** @format double */
  agreement_response_time?: number;
  /** @format int32 */
  service_type?: number;
  /** @format double */
  service_response_time?: number;
  /** @format int32 */
  service_team?: number;
  /** @format int32 */
  service_agreement_number?: number;
  /** @format int32 */
  service_customer_transaction_id?: number;
  /** @format int32 */
  campaign_id?: number;
  /** @format int32 */
  transaction_type?: number;
  /** @format double */
  service_planned_hours?: number;
  /** @format int32 */
  mark_code?: number;
  instructions?: LemonRestModelsProxyServiceOrderInstruction[];
  delivery_info?: LemonRestModelsProxyOrderDeliveryInfo;
  service_persons?: LemonRestModelsProxyServiceOrderPerson[];
  links?: LemonRestModelsProxyLink[];
  invoice_from_project?: boolean;
  triangulation_transaction?: boolean;
  customerdata_from_payload?: boolean;
}

export interface LemonRestModelsProxySalesOrderRow {
  /** @format int32 */
  order_id?: number;
  /** @format double */
  original_amount?: number;
  /** @format date-time */
  delivery_datetime?: string;
  /** @format date-time */
  shipment_datetime?: string;
  /** @format double */
  delivered_amount?: number;
  is_backorder?: boolean;
  /** @format int32 */
  order_number?: number;
  /** @format int32 */
  seller_number?: number;
  delivery_text?: string;
  /** @format int32 */
  person_number?: number;
  /** @format double */
  previous_delivery?: number;
  /** @format date-time */
  previous_delivery_datetime?: string;
  reference_number?: string;
  /** @format int32 */
  state?: number;
  /** @format double */
  total_delivery?: number;
  sizes?: LemonRestModelsProxySizeAmount[];
  /** @format double */
  returned_amount?: number;
  /** @format date-time */
  returned_datetime?: string;
  /** @format date-time */
  end_datetime?: string;
  /** @format double */
  volume?: number;
  /** @format double */
  delivery_estimate?: number;
  product_is_serialnumber_followup?: boolean;
  product_is_batchfollowup?: boolean;
  /** @format int32 */
  row_product_batch_id?: number;
  stock_unit?: string;
  /** @format double */
  collected_amount?: number;
  /** @format int32 */
  id?: number;
  /** @format int32 */
  type?: number;
  account?: string;
  cost_center?: string;
  project_code?: string;
  /** @format int32 */
  project_number?: number;
  /** @format int32 */
  project_phase_id?: number;
  /** @format double */
  discount?: number;
  /** @format double */
  discount2?: number;
  /** @format double */
  discount3?: number;
  /** @format double */
  per?: number;
  /** @format double */
  sales_price?: number;
  /** @format double */
  total: number;
  /** @format double */
  unit_price: number;
  /** @format double */
  quantity: number;
  /** @format double */
  quantity2?: number;
  color?: string;
  /** @format double */
  customer_discount_percentage?: number;
  dimension?: string;
  inner_note?: string;
  /** @format double */
  net_price?: number;
  no_stock_update?: boolean;
  note?: string;
  /** @format int32 */
  number?: number;
  position?: string;
  product_code?: string;
  product_name?: string;
  product_extra_name?: string;
  /** @format double */
  tax_amount?: number;
  /** @format double */
  tax_rate?: number;
  unit?: string;
  /** @format double */
  unit_net_price?: number;
  /** @format double */
  unit_net_price_currency?: number;
  unit_net_currency?: string;
  /** @format int32 */
  product_stock?: number;
  lta?: string;
  /** @format double */
  weight?: number;
  /** @format int32 */
  supplier_id?: number;
  row_serial?: string;
  is_serial_follow_up?: boolean;
  /** @format int32 */
  serialnumber_type?: number;
  is_batch_follow_up?: boolean;
}

export interface LemonRestModelsProxyServiceOrderInstruction {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  order_id: number;
  /** @format int32 */
  instruction_id: number;
  instruction_description?: string;
  /** @format int32 */
  instruction_phase_id: number;
  instruction_phase_header?: string;
  instruction_phase_description?: string;
  instruction_todo_description?: string;
  is_instruction?: boolean;
}

export interface LemonRestModelsProxyOrderDeliveryInfo {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  packages?: number;
  /** @format double */
  weight?: number;
  /** @format double */
  m2?: number;
  /** @format double */
  m3?: number;
  /** @format double */
  pallets?: number;
  /** @format int32 */
  delivery_method?: number;
  description?: string;
  consignment?: string;
  departure?: string;
  /** @format date-time */
  deliveryinfo_date?: string;
  instructions?: string;
  forwarder?: string;
  info1?: string;
  info2?: string;
}

export interface LemonRestModelsProxyServiceOrderPerson {
  /** @format int32 */
  service_order_person_id?: number;
  /** @format int32 */
  service_id?: number;
  /** @format int32 */
  service_order_person_number?: number;
  /** @format int32 */
  service_order_person_state?: number;
}

export interface LemonRestModelsProxySalesOrderRowSerialNumber {
  /** @format int32 */
  sales_orderrow_serial_id?: number;
  /** @format int32 */
  sales_orderrow_id: number;
  product_code: string;
  serialnr_code: string;
  serialnr_description?: string;
}

export interface LemonRestModelsProxySalesOrderRowBatchNumber {
  /** @format int32 */
  sales_orderrow_batch_id?: number;
  /** @format int32 */
  sales_orderrow_id: number;
  /** @format int32 */
  batchnr_id: number;
  batchnr_suppliercode: string;
  /** @format double */
  batchnr_amount: number;
}

export interface LemonRestModelsQueryFiltersServiceInstructionFilter {
  object_ids?: number[];
  /**
   * Page number. If not provided, using default value of 1
   * @format int32
   */
  page?: number;
  /**
   * Page size. If not provided, using default value of 10
   * @format int32
   */
  page_size?: number;
  search?: string;
}

export interface LemonRestModelsProxyOrderDeliveryPallet {
  /** @format int32 */
  order_delivery_pallet_id?: number;
  /** @format int32 */
  order_id?: number;
  order_delivery_pallet_code?: string;
  order_delivery_pallet_serial?: string;
  order_delivery_package_code?: string;
  /** @format double */
  order_delivery_pallet_weight?: number;
  /** @format double */
  order_delivery_pallet_volyme?: number;
  /** @format double */
  order_delivery_pallet_package?: number;
  order_delivery_pallet_info?: string;
  order_delivery_pallet_SSCC?: string;
  /** @format int32 */
  pallet_number?: number;
  order_delivery_pallet_rows?: LemonRestModelsProxyOrderDeliveryPalletRow[];
  /** @format int32 */
  pallet_id?: number;
  /** @format int32 */
  order_delivery_pallet_father_id?: number;
  order_delivery_calculate_stat?: boolean;
  delivery_pallet_view_name?: string;
  /** @format int32 */
  stock_number?: number;
  shelf?: string;
  /** @format int32 */
  length?: number;
  /** @format int32 */
  width?: number;
  /** @format int32 */
  height?: number;
}

export interface LemonRestModelsProxyOrderDeliveryPalletRow {
  /** @format int32 */
  pallet_row_id?: number;
  /** @format int32 */
  pallet_id?: number;
  pallet_row_code?: string;
  /** @format int32 */
  order_row_id?: number;
  /** @format double */
  row_amount?: number;
  /** @format int32 */
  batch_id?: number;
  batch_supplier_code?: string;
}

export interface LemonRestModelsQueryFiltersPersonFilter {
  /** @format int32 */
  role?: number;
  costcenter?: string;
  hide_models?: boolean;
  object_ids?: number[];
  /**
   * Page number. If not provided, using default value of 1
   * @format int32
   */
  page?: number;
  /**
   * Page size. If not provided, using default value of 10
   * @format int32
   */
  page_size?: number;
  search?: string;
}

export interface LemonRestModelsQueryFiltersJobFilter {
  /** @format int32 */
  person_number?: number;
  states?: number[];
  job_types?: number[];
  /** @format int32 */
  company_location?: number;
  /** @format int32 */
  department?: number;
  costcenter?: string;
  /** @format int32 */
  project_type?: number;
  /** @format date-time */
  after?: string;
  /** @format date-time */
  before?: string;
  object_ids?: number[];
  /**
   * Page number. If not provided, using default value of 1
   * @format int32
   */
  page?: number;
  /**
   * Page size. If not provided, using default value of 10
   * @format int32
   */
  page_size?: number;
  search?: string;
}

export interface LemonRestModelsProxyJob {
  /** @format int32 */
  type?: number;
  /** @format date-time */
  date?: string;
  /** @format date-time */
  start_date?: string;
  /** @format date-time */
  end_date?: string;
  description?: string;
  /** @format int32 */
  person_number?: number;
  /** @format int32 */
  state?: number;
  /** @format int32 */
  object_id?: number;
  customer_name?: string;
  customer_address?: string;
  /** @format double */
  hours?: number;
  description_done?: string;
  description_inner?: string;
  travel_route?: string;
  /** @format int32 */
  km?: number;
  /** @format int32 */
  vehicle?: number;
  header?: string;
  code?: string;
  /** @format int32 */
  object_number?: number;
  object_description?: string;
  /** @format int32 */
  customer_number?: number;
  customer_postal_code?: string;
  customer_city?: string;
  customer_contact_name?: string;
  customer_contact_phone_number?: string;
  customer_contact_email?: string;
  person_name?: string;
  person_gsm?: string;
  /** @format double */
  billable_hours?: number;
  /** @format int32 */
  fos_number?: number;
  /** @format int32 */
  person_office?: number;
  /** @format int32 */
  person_department?: number;
  /** @format int32 */
  service_order_id?: number;
  cost_center?: string;
  serialnumber?: string;
  product_code?: string;
  product_description?: string;
  product_description2?: string;
  additional_jobs?: LemonRestModelsProxyJob[];
  additional_workers?: LemonRestModelsProxyPersonMainData[];
  /** @format int32 */
  project_invoicing_type?: number;
  /** @format int32 */
  project_worktime_invoicing_type?: number;
  /** @format int32 */
  project_worktime_material_invoicing_type?: number;
  /** @format int32 */
  project_phase_worktime_invoicing_type?: number;
  /** @format int32 */
  project_phase_worktime_material_invoicing_type?: number;
  /** @format double */
  amount?: number;
  /** @format int32 */
  worktime_reason_code?: number;
  /** @format int32 */
  workshift?: number;
}

export interface LemonRestModelsProxyPersonMainData {
  contact_password?: string;
  person_password?: string;
  /** @format int32 */
  supervisor?: number;
  send_email?: boolean;
  send_internal_msg?: boolean;
  send_sms?: boolean;
  /** @format int32 */
  id?: number;
  language_code?: string;
  attributes?: LemonRestModelsProxyPersonAttribute[];
  email?: string;
  gsm?: string;
  name?: string;
  /** @format int32 */
  number?: number;
  /** @format int32 */
  office?: number;
  short_name?: string;
  username?: string;
}

export interface LemonRestModelsProxyPersonAttribute {
  name?: string;
  /** @format int32 */
  id: number;
  selected: boolean;
}

/** Työtunnin filtteri */
export interface LemonRestModelsQueryFiltersWorkHourFilter {
  /** @format date-time */
  date_before?: string;
  /** @format date-time */
  date_after?: string;
  states?: number[];
  object_ids?: number[];
  /**
   * Page number. If not provided, using default value of 1
   * @format int32
   */
  page?: number;
  /**
   * Page size. If not provided, using default value of 10
   * @format int32
   */
  page_size?: number;
  search?: string;
}

export interface LemonRestModelsProxyWorkHour {
  /** @format int32 */
  fos_number?: number;
  /** @format int32 */
  person_number?: number;
  person_name?: string;
  /** @format int32 */
  project_number?: number;
  /** @format int32 */
  project_phase_id?: number;
  /** @format date-time */
  end_date?: string;
  /** @format double */
  amount?: number;
  costcenter?: string;
  /** @format date-time */
  start_date: string;
  description?: string;
  header?: string;
  /** @format double */
  hours?: number;
  /** @format int32 */
  id?: number;
  is_invoice?: boolean;
  /** @format double */
  invoice_hours?: number;
  /** @format int32 */
  customer_number?: number;
  additions?: LemonRestModelsProxyWorkHourAddition[];
}

export interface LemonRestModelsProxyWorkHourAddition {
  /** @format int32 */
  fos_number?: number;
  fos_description?: string;
  /** @format int32 */
  amount?: number;
  /** @format int32 */
  fos_limitation_number?: number;
  fos_limition_description?: string;
}

/** Työajan materiaalin filtteri */
export interface LemonRestModelsQueryFiltersWorkHourMaterialFilter {
  /** @format int32 */
  product_type?: number;
  object_ids?: number[];
  /**
   * Page number. If not provided, using default value of 1
   * @format int32
   */
  page?: number;
  /**
   * Page size. If not provided, using default value of 10
   * @format int32
   */
  page_size?: number;
  search?: string;
}

export interface LemonRestModelsProxyWorkHourMaterial {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  workhour_id?: number;
  product_code: string;
  product_description?: string;
  /** @format double */
  amount: number;
  /** @format int32 */
  unit_id?: number;
  unit?: string;
  /** @format int32 */
  stock_number?: number;
  is_invoice?: boolean;
}

/** Työajan filtteri */
export interface LemonRestModelsQueryFiltersWorkTimeFilter {
  /** @format date-time */
  date_before?: string;
  /** @format date-time */
  date_after?: string;
  states?: number[];
  object_ids?: number[];
  /**
   * Page number. If not provided, using default value of 1
   * @format int32
   */
  page?: number;
  /**
   * Page size. If not provided, using default value of 10
   * @format int32
   */
  page_size?: number;
  search?: string;
}

/** Työajan proxy */
export interface LemonRestModelsProxyWorkTime {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  person_number?: number;
  person_name?: string;
  /** @format date-time */
  date: string;
  /** @format date-time */
  end_date?: string;
  /** @format int32 */
  hours?: number;
  header?: string;
  description?: string;
  geography?: string;
  /** @format int32 */
  state?: number;
  /** @format int32 */
  invoice_hours?: number;
  is_invoice?: boolean;
  /** @format int32 */
  project_number?: number;
  project_description?: string;
  /** @format int32 */
  project_phase_id?: number;
  project_phase_description?: string;
  /** @format int32 */
  formofsalary_number?: number;
  formofsalary_description?: string;
  /** @format int32 */
  customer_number?: number;
  customer_name?: string;
  costcenter?: string;
  /** @format double */
  costprice?: number;
  /** @format int32 */
  workshift?: number;
  additions?: LemonRestModelsProxyWorkTimeAddition[];
  /** @format int32 */
  source?: number;
  source_description?: string;
  /** @format int32 */
  reason?: number;
}

/** Työajan lisän proxy */
export interface LemonRestModelsProxyWorkTimeAddition {
  /** @format int32 */
  formofsalary_number?: number;
  formofsalary_description?: string;
  /** @format double */
  price?: number;
  /** @format int32 */
  amount?: number;
}

export interface LemonRestModelsQueryFiltersWorkTimeMaterialFilter {
  /** @format int32 */
  product_type?: number;
  object_ids?: number[];
  /**
   * Page number. If not provided, using default value of 1
   * @format int32
   */
  page?: number;
  /**
   * Page size. If not provided, using default value of 10
   * @format int32
   */
  page_size?: number;
  search?: string;
}

/** Työajan materiaalin proxy */
export interface LemonRestModelsProxyWorkTimeMaterial {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  worktime_id?: number;
  product_code: string;
  product_description?: string;
  /** @format double */
  amount: number;
  /** @format int32 */
  unit_id?: number;
  unit?: string;
  is_invoice?: boolean;
  /** @format int32 */
  stock_number?: number;
  /** @format int32 */
  project_invoicingtype?: number;
}

export interface LemonRestModelsQueryFiltersPersonAbsenceFilter {
  /** @format int32 */
  person_number?: number;
  states?: number[];
  /** @format date-time */
  after?: string;
  /** @format date-time */
  before?: string;
  object_ids?: number[];
  /**
   * Page number. If not provided, using default value of 1
   * @format int32
   */
  page?: number;
  /**
   * Page size. If not provided, using default value of 10
   * @format int32
   */
  page_size?: number;
  search?: string;
}

export interface LemonRestModelsProxyPersonLogin {
  /** @format int32 */
  id?: number;
  language_code?: string;
  attributes?: LemonRestModelsProxyPersonAttribute[];
  email?: string;
  gsm?: string;
  name?: string;
  /** @format int32 */
  number?: number;
  /** @format int32 */
  office?: number;
  short_name?: string;
  username?: string;
}

export interface LemonRestModelsQueryFiltersPricelistFilter {
  name?: string;
  object_ids?: number[];
  /**
   * Page number. If not provided, using default value of 1
   * @format int32
   */
  page?: number;
  /**
   * Page size. If not provided, using default value of 10
   * @format int32
   */
  page_size?: number;
  search?: string;
}

export interface LemonRestModelsProxyPricelist {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  number?: number;
  /** @format int32 */
  type?: number;
  name?: string;
  /** @format int32 */
  tax?: number;
  price_info?: string;
  /** @format double */
  price?: number;
  /** @format double */
  discount?: number;
  /** @format double */
  discount2?: number;
  customers?: LemonRestModelsProxyPricelistCustomer[];
  products?: LemonRestModelsProxyPricelistProduct[];
  product_groups?: LemonRestModelsProxyPriceListProductGroup[];
  supplier_discounts?: LemonRestModelsProxyPricelistSupplierDiscount[];
  customer_group_discounts?: LemonRestModelsProxyPricelistCustomerGroupDiscount[];
  /** @format date-time */
  start_datetime?: string;
  /** @format date-time */
  end_datetime?: string;
  /** @format int32 */
  reference_number?: number;
  currency?: string;
  /** @format int32 */
  profit_type?: number;
  /** @format double */
  profit?: number;
  projects?: LemonRestModelsProxyPricelistProject[];
}

export interface LemonRestModelsProxyPricelistCustomer {
  /** @format int32 */
  pricelist_id?: number;
  /** @format int32 */
  customer_id?: number;
  name?: string;
  /** @format int32 */
  number?: number;
}

export interface LemonRestModelsProxyPricelistProduct {
  /** @format int32 */
  pricelist_id?: number;
  /** @format int32 */
  product_id?: number;
  code?: string;
  name?: string;
  extra_name?: string;
  /** @format double */
  price?: number;
  /** @format double */
  discount?: number;
  /** @format double */
  discount2?: number;
  /** @format double */
  amount?: number;
  unit?: string;
  is_product_group?: boolean;
  location_code?: string;
}

export interface LemonRestModelsProxyPriceListProductGroup {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  pricelist_id?: number;
  code?: string;
  name?: string;
  /** @format double */
  discount?: number;
  /** @format double */
  discount2?: number;
}

export interface LemonRestModelsProxyPricelistSupplierDiscount {
  /** @format int32 */
  pricelist_id?: number;
  /** @format int32 */
  discount_id?: number;
  /** @format int32 */
  number?: number;
  /** @format double */
  discount?: number;
  /** @format double */
  discount2?: number;
}

export interface LemonRestModelsProxyPricelistCustomerGroupDiscount {
  /** @format int32 */
  pricelist_id?: number;
  /** @format int32 */
  group_id?: number;
  /** @format int32 */
  number?: number;
  /** @format double */
  discount?: number;
  /** @format double */
  discount2?: number;
  name?: string;
}

export interface LemonRestModelsProxyPricelistProject {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  pricelist_id?: number;
  /** @format int32 */
  project_number?: number;
}

export interface LemonRestModelsQueryFiltersProductPriceFilter {
  /**
   * Date when pricelist should be valid
   * @format date-time
   */
  list_valid_date: string;
  /** Product unit */
  product_unit?: string;
  /**
   * Customer number
   * @format int32
   */
  cust_no?: number;
}

export interface LemonRestModelsQueryFiltersProductFilter {
  name?: string;
  sku?: string[];
  /** @format date-time */
  modified_before?: string;
  /** @format date-time */
  modified_after?: string;
  /** @format int32 */
  attribute_id?: number;
  extra_name?: string;
  /** @format int32 */
  category_id?: number;
  /** @format int32 */
  group_code?: number;
  show_models?: boolean;
  show_nonactive?: boolean;
  shelf?: string;
  /** @format int32 */
  shelf_stock?: number;
  /** @format int32 */
  stock?: number;
  sort_by_sku?: boolean;
  search_words?: string[];
  object_ids?: number[];
  /**
   * Page number. If not provided, using default value of 1
   * @format int32
   */
  page?: number;
  /**
   * Page size. If not provided, using default value of 10
   * @format int32
   */
  page_size?: number;
  search?: string;
}

export interface LemonRestModelsProxyProduct {
  /** @format int32 */
  id?: number;
  name?: string;
  extra_name?: string;
  sku?: string;
  /** @format double */
  price?: number;
  price_includes_tax?: boolean;
  texts?: LemonRestModelsProxyProductText[];
  units?: LemonRestModelsProxyProductUnit[];
  dimensions?: string;
  is_inactive?: boolean;
  is_non_stock?: boolean;
  is_sellable?: boolean;
  is_purchase_product?: boolean;
  search_code?: string;
  /** @format int32 */
  size_type?: number;
  /** @format int32 */
  type?: number;
  stock_unit?: string;
  /** @format double */
  sales_price_taxful?: number;
  /** @format double */
  sales_price_taxless?: number;
  sales_account?: string;
  /** @format int32 */
  taxrate_code?: number;
  cost_center?: string;
  /** @format int32 */
  unit_id?: number;
  /** @format int32 */
  color_code?: number;
  /** @format int32 */
  mark_code?: number;
  /** @format int32 */
  model_code?: number;
  /** @format int32 */
  person_responsible_number?: number;
  stocks?: LemonRestModelsProxyProductStock[];
  cn_code?: string;
  ean_code?: string;
  /** @format int32 */
  group_code?: number;
  /** @format int32 */
  ser_code?: number;
  /** @format int32 */
  height?: number;
  /** @format int32 */
  length?: number;
  /** @format int32 */
  width?: number;
  /** @format int32 */
  manufacturer?: number;
  origin?: string;
  reference?: string;
  /** @format int32 */
  warranty?: number;
  version?: string;
  drawing_number?: string;
  machine?: LemonRestModelsProxyProductMachine;
  attribute_data?: LemonRestModelsProxyProductAttributeData[];
  suppliers?: LemonRestModelsProxyProductSupplier[];
  languages?: LemonRestModelsProxyProductLanguage[];
  attributes?: LemonRestModelsProxyProductAttribute[];
  categories?: LemonRestModelsProxyProductCategory[];
  is_serialnumber_followup?: boolean;
  /** @format int32 */
  serialnumber_type?: number;
  is_batchfollowup?: boolean;
  links?: LemonRestModelsProxyLink[];
  /** @format int32 */
  abc?: number;
  vak?: string;
  un?: string;
  handedness?: string;
  material?: string;
  /** @format int32 */
  family?: number;
  lta?: string;
  pricing?: LemonRestModelsProxyProductPricing;
}

export interface LemonRestModelsProxyProductText {
  /** @format int32 */
  id?: number;
  language_code?: string;
  /** @format int32 */
  header_number?: number;
  text?: string;
  text_plain?: string;
}

export interface LemonRestModelsProxyProductUnit {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  product_id?: number;
  /** @format double */
  package?: number;
  unit?: string;
  /** @format double */
  amount?: number;
  code?: string;
  /** @format double */
  default_amount?: number;
  /** @format double */
  discount?: number;
  /** @format double */
  price?: number;
  /** @format double */
  price_per?: number;
  use_for_pricing?: boolean;
  use_for_purchase?: boolean;
  use_for_sales?: boolean;
  use_for_stock?: boolean;
  /** @format double */
  volume?: number;
  /** @format double */
  weight?: number;
  /** @format double */
  package_weight?: number;
  use_intrastat?: boolean;
  /** @format double */
  intrastat_amount?: number;
  /** @format double */
  default_amount_purchase?: number;
  /** @format double */
  default_amount_production?: number;
  /** @format int32 */
  handling_cost_id?: number;
}

export interface LemonRestModelsProxyProductStock {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  number?: number;
  /** @format double */
  free_saldo?: number;
  /** @format double */
  saldo_incoming?: number;
  /** @format double */
  saldo_out?: number;
  is_default?: boolean;
  /** @format double */
  in_stock?: number;
  /** @format double */
  in_stock_min?: number;
  /** @format double */
  Stock_inward?: number;
  /** @format double */
  stock_outward?: number;
  /** @format double */
  stock_outward_production?: number;
  previous_shelf?: string;
  stock_description?: string;
  /** @format double */
  stock_average_prchase_price?: number;
  /** @format date-time */
  stock_inventory_date?: string;
  /** @format int32 */
  stock_shelf_type?: number;
  sizes?: LemonRestModelsProxySize[];
  shelves?: LemonRestModelsProxyStockShelf[];
}

export interface LemonRestModelsProxyProductMachine {
  code?: string;
  description?: string;
}

export interface LemonRestModelsProxyProductAttributeData {
  /** @format int32 */
  id?: number;
  name?: string;
  /** @format int32 */
  product_id?: number;
  /** @format int32 */
  codelist_id?: number;
  /** @format double */
  value?: number;
  /** @format double */
  min?: number;
  /** @format double */
  max?: number;
  /** @format int32 */
  type?: number;
}

export interface LemonRestModelsProxyProductSupplier {
  /** @format int32 */
  supplier_id?: number;
  /** @format int32 */
  product_id?: number;
  name?: string;
  is_default?: boolean;
  /** @format int32 */
  number?: number;
  code?: string;
  /** @format int32 */
  delivery_days?: number;
  note?: string;
  url?: string;
  description?: string;
  description2?: string;
  /** @format double */
  price?: number;
  /** @format double */
  stock_amount?: number;
  /** @format double */
  purchase_price?: number;
  /** @format double */
  purchase_price_in_currency?: number;
  currency_code?: string;
  /** @format double */
  discount?: number;
  discount_code?: string;
  /** @format date-time */
  price_update_date?: string;
  /** @format date-time */
  stock_date?: string;
  origin?: string;
  /** @format double */
  pricefactor_orders?: number;
  /** @format double */
  pricefactor_purchase_invoices?: number;
}

export interface LemonRestModelsProxyProductLanguage {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  product_id?: number;
  code?: string;
  name?: string;
  extra_name?: string;
}

export interface LemonRestModelsProxyProductAttribute {
  /** @format int32 */
  id?: number;
  name?: string;
  selected?: boolean;
}

export interface LemonRestModelsProxyProductCategory {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  parent_id?: number;
  name?: string;
  /** @format int32 */
  type?: number;
  is_web?: boolean;
  is_member?: boolean;
}

export interface LemonRestModelsProxyProductPricing {
  /** @format double */
  average_price?: number;
  /** @format double */
  previous_price?: number;
  /** @format double */
  previous_purchase_price?: number;
}

export interface LemonRestModelsProxySize {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  stock_id?: number;
  size?: string;
  /** @format double */
  in_stock?: number;
  /** @format double */
  in_stock_min?: number;
  /** @format double */
  inward?: number;
  /** @format double */
  outward?: number;
  /** @format int32 */
  sort_order?: number;
}

export interface LemonRestModelsProxyStockShelf {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  product_id?: number;
  /** @format int32 */
  stock_number?: number;
  stock_shelf?: string;
  /** @format int32 */
  in_stock?: number;
  /** @format date-time */
  in_date?: string;
  /** @format date-time */
  out_date?: string;
  /** @format double */
  inventory_tmp?: number;
  inventory_bit?: boolean;
  /** @format date-time */
  inventory_date?: string;
  /** @format int32 */
  shelf_type?: number;
  /** @format double */
  shelf_instock_min?: number;
}

export interface LemonRestModelsQueryFiltersProductGroupFilter {
  name?: string;
  web_only?: boolean;
  /** @format int32 */
  parent_id?: number;
  object_ids?: number[];
  /**
   * Page number. If not provided, using default value of 1
   * @format int32
   */
  page?: number;
  /**
   * Page size. If not provided, using default value of 10
   * @format int32
   */
  page_size?: number;
  search?: string;
}

export interface LemonRestModelsQueryFiltersProductCategoryFilter {
  name?: string;
  web_only?: boolean;
  /** @format int32 */
  parent_id?: number;
  object_ids?: number[];
  /**
   * Page number. If not provided, using default value of 1
   * @format int32
   */
  page?: number;
  /**
   * Page size. If not provided, using default value of 10
   * @format int32
   */
  page_size?: number;
  search?: string;
}

export interface LemonRestModelsQueryFiltersProductSerialFilter {
  serial_code?: string;
  /** @format int32 */
  stock?: number;
  in_stock?: boolean;
  object_ids?: number[];
  /**
   * Page number. If not provided, using default value of 1
   * @format int32
   */
  page?: number;
  /**
   * Page size. If not provided, using default value of 10
   * @format int32
   */
  page_size?: number;
  search?: string;
}

export interface LemonRestModelsQueryFiltersProductBatchFilter {
  supplier_code?: string;
  /** @format int32 */
  stock?: number;
  in_stock?: boolean;
  shelf?: string;
  object_ids?: number[];
  /**
   * Page number. If not provided, using default value of 1
   * @format int32
   */
  page?: number;
  /**
   * Page size. If not provided, using default value of 10
   * @format int32
   */
  page_size?: number;
  search?: string;
}

export interface LemonRestModelsQueryFiltersProductSaldoFilter {
  /**
   * If not defined, using default value 1
   * @format int32
   */
  page?: number;
  /**
   * If not defined, using default value 10
   * @format int32
   */
  page_size?: number;
  /**
   * Timestamp after product saldo should have changed
   * @format date-time
   */
  updated_after: string;
}

export interface LemonRestModelsProxyStockTransaction {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  type: number;
  /** @format int32 */
  sectype: number;
  product_code: string;
  /** @format int32 */
  stock_number: number;
  /** @format date-time */
  date?: string;
  /** @format double */
  amount: number;
  /** @format double */
  netprice?: number;
  /** @format int32 */
  price_type?: number;
  description?: string;
  costcenter?: string;
  /** @format int32 */
  worknumber?: number;
  /** @format int32 */
  project_number?: number;
  /** @format int32 */
  project_phase_id?: number;
  unit?: string;
  shelf?: string;
  /** @format int32 */
  stock_number_in?: number;
  shelf_in?: string;
  no_price_update_on_transfer?: boolean;
  shelves?: LemonRestModelsProxyStockTransactionShelf[];
  batches?: LemonRestModelsProxyStockTransactionBatch[];
  serials?: LemonRestModelsProxyStockTransactionSerialNumber[];
  sizes?: LemonRestModelsProxySizeAmount[];
}

export interface LemonRestModelsProxyStockTransactionShelf {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  stock_transaction_id?: number;
  shelf?: string;
  /** @format double */
  amount?: number;
  is_inventory?: boolean;
}

export interface LemonRestModelsProxyStockTransactionBatch {
  /** @format double */
  batchnr_amount?: number;
  /** @format date-time */
  batchnr_best_before?: string;
  batchnr_dimension?: string;
  /** @format int32 */
  batchnr_height?: number;
  /** @format int32 */
  batchnr_id?: number;
  batchnr_info1?: string;
  batchnr_info2?: string;
  batchnr_info3?: string;
  batchnr_info4?: string;
  /** @format int32 */
  batchnr_length?: number;
  batchnr_product_code?: string;
  /** @format double */
  batchnr_saldo?: number;
  /** @format int32 */
  batchnr_state?: number;
  batchnr_suppliercode?: string;
  /** @format double */
  batchnr_tmp_amount?: number;
  /** @format int32 */
  batchnr_width?: number;
  /** @format int32 */
  stock_transaction_id?: number;
  /** @format int32 */
  batchnr_stock_number?: number;
  batchnr_stock_shelf?: string;
  /** @format int32 */
  batchnr_pallet_id?: number;
  /** @format double */
  batchnr_inventory_tmp?: number;
  batchno_inventory_bit?: boolean;
}

export interface LemonRestModelsProxyStockTransactionSerialNumber {
  /** @format int32 */
  serialnr_id?: number;
  /** @format int32 */
  stock_transaction_id?: number;
  serialnr_product_code?: string;
  serialnr_code?: string;
  serialnr_father_serial?: string;
  serialnr_description?: string;
  /** @format int32 */
  serialnr_state?: number;
  /** @format int32 */
  serialnr_stock_number?: number;
  /** @format int32 */
  serialnr_inventory_tmp?: number;
}

export interface LemonRestModelsProxyStockTransactionFull {
  /** @format int32 */
  id?: number;
  description?: string;
  /** @format double */
  net_price?: number;
  /** @format int32 */
  person?: number;
  product_code?: string;
  /** @format double */
  sales_price?: number;
  /** @format int32 */
  sec_type?: number;
  shelf?: string;
  /** @format int32 */
  source?: number;
  /** @format int32 */
  stock_number?: number;
  /** @format int32 */
  stock_number_in?: number;
  /** @format int32 */
  supplier?: number;
  /** @format int32 */
  type?: number;
  type_description?: string;
  /** @format int32 */
  worknumber?: number;
  /** @format double */
  amount?: number;
  costcenter?: string;
  /** @format date-time */
  date?: string;
  /** @format int32 */
  price_type?: number;
  /** @format int32 */
  project_number?: number;
  /** @format int32 */
  project_phase_id?: number;
  default_shelf?: string;
  stock_unit?: string;
  batch_numbers?: LemonRestModelsProxyStockTransactionBatch[];
  serial_numbers?: LemonRestModelsProxyStockTransactionSerialNumber[];
  sizes?: LemonRestModelsProxySizeAmount[];
  fail_codes?: LemonRestModelsProxyStockTransactionFailcode[];
  shelves?: LemonRestModelsProxyStockTransactionShelf[];
}

export interface LemonRestModelsProxyStockTransactionFailcode {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  codelist_id?: number;
  /** @format int32 */
  transaction_id?: number;
  description?: string;
}

export interface LemonRestModelsQueryFiltersMainWorkstageFilter {
  /** @format date-time */
  updated_after: string;
  /** @format date-time */
  updated_before: string;
  /** @format int32 */
  state?: number;
  /**
   * If not defined, using default value of 1
   * @format int32
   */
  page?: number;
  /**
   * If not defined, using default value of 10
   * @format int32
   */
  page_size?: number;
}

export interface LemonRestModelsProxyProductionPostEndJob {
  main_ws?: LemonRestModelsProxyProductionProductMainWorkStage;
  sub_structures?: LemonRestModelsProxyProductSubStructure[];
  end_job_data?: LemonRestModelsProxyProductionProductionEndJob;
}

export interface LemonRestModelsProxyProductionProductMainWorkStage {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  main_structure_id?: number;
  /** @format int32 */
  type?: number;
  /** @format int32 */
  state?: number;
  state_description?: string;
  abort_text?: string;
  /** @format int32 */
  compilation_type?: number;
  /** @format double */
  procent_completed?: number;
  /** @format int32 */
  delivery_state?: number;
  delivery_text?: string;
  /** @format date-time */
  delivery_time?: string;
  /** @format date-time */
  start_time?: string;
  /** @format date-time */
  end_time?: string;
  dimension?: string;
  /** @format int32 */
  handedness?: number;
  /** @format int32 */
  material_state?: number;
  /** @format int32 */
  order_number?: number;
  /** @format int32 */
  priority?: number;
  product_code?: string;
  product_description?: string;
  /** @format int32 */
  row_type?: number;
  /** @format double */
  salesorder_amount?: number;
  /** @format double */
  std_time?: number;
  /** @format double */
  work_amount?: number;
  /** @format double */
  work_amount2?: number;
  /** @format int32 */
  product_stock?: number;
  /** @format int32 */
  project_number?: number;
  comment?: string;
  /** @format date-time */
  sales_orderrow_delivery_date?: string;
  /** @format int32 */
  sales_orderrow_id?: number;
  /** @format int32 */
  sub_structure_id?: number;
  /** @format int32 */
  worknumber?: number;
  customer_name?: string;
  /** @format int32 */
  customer_number?: number;
  /** @format int32 */
  delivery_id?: number;
  sub_workstages?: LemonRestModelsProxyProductionProductSubWorkStage[];
}

export interface LemonRestModelsProxyProductSubStructure {
  /** @format int32 */
  sub_workstage_id?: number;
  ask_amount?: boolean;
  /** @format double */
  collected?: number;
  /** @format double */
  collected_bad?: number;
  color?: string;
  /** @format int32 */
  configure_attribute?: number;
  /** @format int32 */
  father_id?: number;
  info1?: string;
  info2?: string;
  /** @format double */
  missing?: number;
  /** @format double */
  net_price?: number;
  passive_bit?: boolean;
  /** @format int32 */
  per?: number;
  serial?: string;
  /** @format int32 */
  type?: number;
  unit?: string;
  /** @format double */
  waste?: number;
  batch_numbers?: LemonRestModelsProxyStockTransactionBatch[];
  serial_numbers?: LemonRestModelsProxyStockTransactionSerialNumber[];
  shelves?: LemonRestModelsProxyStockTransactionShelf[];
  /** @format int32 */
  product_id?: number;
  product_code?: string;
  /** @format double */
  main_amount?: number;
  all_levels_bit?: boolean;
  /** @format double */
  amount?: number;
  dimension?: string;
  father_code?: string;
  /** @format int32 */
  handling?: number;
  /** @format int32 */
  structure_id?: number;
  /** @format int32 */
  level?: number;
  /** @format int32 */
  price_type?: number;
  product_description?: string;
  product_description2?: string;
  /** @format int32 */
  row?: number;
  /** @format int32 */
  stock?: number;
  /** @format int32 */
  worknumber?: number;
  is_main_structure?: boolean;
}

export interface LemonRestModelsProxyProductionProductionEndJob {
  done?: boolean;
  /** @format date-time */
  endTime?: string;
  /** @format double */
  hours?: number;
  /** @format double */
  amount?: number;
  /** @format double */
  amount2?: number;
  /** @format double */
  failed_amount?: number;
  /** @format double */
  money?: number;
  stock_shelf?: string;
  info?: string;
  /** @format int32 */
  payroll_type?: number;
  /** @format date-time */
  fail_date?: string;
  fail_codes?: number[];
  fail_description?: string;
  /** @format int32 */
  fail_sec_type?: number;
  create_sub_contract?: boolean;
  /** @format int32 */
  purchase_order_type?: number;
  transaction_batches?: LemonRestModelsProxyStockTransactionBatch[];
  serial_numbers?: LemonRestModelsProxyStockTransactionSerialNumber[];
}

export interface LemonRestModelsProxyProductionProductSubWorkStage {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  main_workstage_id?: number;
  /** @format int32 */
  worknumber?: number;
  /** @format int32 */
  order_nro?: number;
  /** @format int32 */
  suborder_nro?: number;
  /** @format int32 */
  machine_id?: number;
  /** @format int32 */
  workphase_id?: number;
  description?: string;
  description2?: string;
  /** @format int32 */
  state?: number;
  state_description?: string;
  /** @format double */
  productivity?: number;
  /** @format double */
  capacity?: number;
  /** @format double */
  capacity2?: number;
  /** @format int32 */
  unit?: number;
  /** @format int32 */
  setting_time?: number;
  /** @format int32 */
  settle_time?: number;
  /** @format double */
  batch_amount?: number;
  info?: string;
  program?: string;
  /** @format double */
  price?: number;
  /** @format int32 */
  start_code?: number;
  /** @format int32 */
  customer_number?: number;
  /** @format double */
  amount?: number;
  left?: boolean;
  right?: boolean;
  up?: boolean;
  down?: boolean;
  inner?: boolean;
  configure?: boolean;
  purchase_bit?: boolean;
  /** @format double */
  sales_price?: number;
  /** @format double */
  net_price?: number;
  /** @format int32 */
  persons?: number;
  /** @format double */
  person_cost?: number;
  /** @format double */
  waste?: number;
  /** @format int32 */
  duration?: number;
  /** @format date-time */
  start_time?: string;
  /** @format date-time */
  end_time?: string;
  /** @format double */
  work_amount?: number;
  /** @format double */
  work_amount2?: number;
  /** @format double */
  work_amount_done?: number;
  /** @format double */
  work_amount_left?: number;
  /** @format int32 */
  type?: number;
  /** @format int32 */
  can_start?: number;
  /** @format int32 */
  purchase_order?: number;
  /** @format int32 */
  compilation_worknumber?: number;
  /** @format int32 */
  project_phase_id?: number;
  person?: string;
  /** @format int32 */
  day_order?: number;
  /** @format int32 */
  duration_type?: number;
  machine_code?: string;
  machine_description?: string;
  product_code?: string;
  materials?: LemonRestModelsProxyProductionWorkstageMaterial[];
}

export interface LemonRestModelsProxyProductionWorkstageMaterial {
  product_code?: string;
  /** @format double */
  amount?: number;
  /** @format double */
  demanded_amount?: number;
}

export interface LemonRestModelsQueryFiltersMachineFilter {
  code?: string;
  description?: string;
  /** @format int32 */
  type?: number;
  /** @format double */
  hour_price?: number;
  /** @format double */
  capacity?: number;
  is_disabled?: boolean;
  object_ids?: number[];
  /**
   * Page number. If not provided, using default value of 1
   * @format int32
   */
  page?: number;
  /**
   * Page size. If not provided, using default value of 10
   * @format int32
   */
  page_size?: number;
  search?: string;
}

export interface LemonRestModelsQueryFiltersProjectFilter {
  project_number?: number[];
  /** @format int32 */
  project_type?: number;
  /** @format int32 */
  project_state?: number;
  /** @format int32 */
  customer_number?: number;
  /** @format int32 */
  invoicing_customer_id?: number;
  /** @format date-time */
  created_before?: string;
  /** @format date-time */
  created_after?: string;
  /** @format date-time */
  updated_before?: string;
  /** @format date-time */
  updated_after?: string;
  states?: number[];
  /** @format int32 */
  contact_personnumber?: number;
  show_models?: boolean;
  object_ids?: number[];
  /**
   * Page number. If not provided, using default value of 1
   * @format int32
   */
  page?: number;
  /**
   * Page size. If not provided, using default value of 10
   * @format int32
   */
  page_size?: number;
  search?: string;
}

export interface LemonRestModelsProxyProject {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  project_id?: number;
  /** @format int32 */
  project_number?: number;
  /** @format int32 */
  project_state?: number;
  project_description?: string;
  project_fulldescription?: string;
  /** @format double */
  offered?: number;
  /** @format double */
  invoiced?: number;
  /** @format double */
  ordered?: number;
  /** @format double */
  purchase_ordered?: number;
  /** @format double */
  purchase_invoice?: number;
  /** @format double */
  payroll?: number;
  /** @format double */
  workcosts?: number;
  /** @format double */
  project_profit_purchase?: number;
  /** @format double */
  project_profit_travel?: number;
  project_contacts?: LemonRestModelsProxyProjectContact[];
  project_customer_contacts?: LemonRestModelsProxyProjectCustomerContact[];
  project_phases?: LemonRestModelsProxyProjectPhase[];
  customer_name?: string;
  /** @format int32 */
  project_type?: number;
  /** @format date-time */
  project_date?: string;
  /** @format date-time */
  project_startdate?: string;
  /** @format date-time */
  project_enddate?: string;
  /** @format date-time */
  project_commissioning_date?: string;
  project_owner?: string;
  /** @format int32 */
  person_manager_number?: number;
  project_note?: string;
  /** @format int32 */
  project_customer_number?: number;
  /** @format int32 */
  project_calculate_type?: number;
  project_worksitecode?: string;
  project_worksitenumber?: string;
  /** @format int32 */
  project_report_type?: number;
  project_lta?: string;
  site?: LemonRestModelsProxySite;
  codelist_costcenter?: string;
  /** @format int32 */
  project_contract_type?: number;
  /** @format int32 */
  project_invoicing_type?: number;
  /** @format int32 */
  invoicing_customer_id?: number;
  /** @format int32 */
  invoicing_customer_number?: number;
  /** @format int32 */
  orderer_customer_id?: number;
  /** @format int32 */
  orderer_customer_number?: number;
  project_customers?: LemonRestModelsProxyProjectCustomer[];
  /**
   * @format int32
   * @min 0
   * @max 2
   */
  purchaserow_handle?: number;
  project_text?: string;
  project_working_time_instructions?: string;
  /** @format int32 */
  project_enterprise?: number;
  project_invoice_ordermark?: string;
  /** @format int32 */
  project_work_pricelist?: number;
}

export interface LemonRestModelsProxyProjectContact {
  /** @format int32 */
  project_contact_id?: number;
  /** @format int32 */
  project_id?: number;
  /** @format int32 */
  person_number?: number;
  person_name?: string;
  project_steering_bit?: boolean;
  /** @format int32 */
  project_role?: number;
  project_contacts_reference?: boolean;
  project_contact_skills?: LemonRestModelsProxyProjectContactSkill[];
}

export interface LemonRestModelsProxyProjectCustomerContact {
  /** @format int32 */
  project_customer_contact_id?: number;
  /** @format int32 */
  project_id?: number;
  contact_name?: string;
  contact_email?: string;
  contact_tel?: string;
  contact_fax?: string;
  contact_description?: string;
  contact_notes?: string;
  /** @format int32 */
  contact_role?: number;
}

export interface LemonRestModelsProxyProjectPhase {
  /** @format int32 */
  project_number?: number;
  product_description?: string;
  phase_description?: string;
  /** @format int32 */
  project_phase_id?: number;
  /** @format int32 */
  project_phase_father_id?: number;
  /** @format int32 */
  project_id?: number;
  /** @format int32 */
  person_number?: number;
  /** @format int32 */
  project_phase_state?: number;
  /** @format int32 */
  project_phase_type?: number;
  /** @format double */
  project_phase_part_payment?: number;
  /** @format int32 */
  project_phase_number?: number;
  project_person_name?: string;
  project_phase_header?: string;
  project_phase_description?: string;
  /** @format date-time */
  project_phase_start_date?: string;
  /** @format date-time */
  start_time?: string;
  /** @format date-time */
  project_phase_end_date?: string;
  /** @format date-time */
  end_time?: string;
  project_phase_code?: string;
  /** @format double */
  phase_plan_workhour?: number;
  /** @format double */
  phase_plan_work?: number;
  /** @format double */
  phase_plan_material?: number;
  /** @format double */
  phase_actual_workhour?: number;
  /** @format double */
  phase_actual_work?: number;
  /** @format double */
  phase_actual_material?: number;
  /** @format double */
  phase_coming_workhour?: number;
  /** @format double */
  phase_coming_work?: number;
  /** @format double */
  phase_coming_material?: number;
  /** @format int32 */
  project_crm_type?: number;
  /** @format int32 */
  project_order?: number;
  /** @format int32 */
  project_phase_order?: number;
  person_name?: string;
  product_code?: string;
  /** @format int32 */
  worknumber?: number;
  project_phase_dimension?: string;
  /** @format double */
  project_phase_amount?: number;
  /** @format double */
  project_phase_amount2?: number;
  /** @format double */
  project_phase_mat_profit?: number;
  /** @format double */
  project_phase_work_profit?: number;
  project_phase_account?: string;
  /** @format double */
  workhour_price?: number;
  /** @format double */
  project_phase_readiness?: number;
  /** @format double */
  project_phase_subcosts?: number;
  /** @format double */
  project_phase_cost1?: number;
  /** @format double */
  project_phase_cost2?: number;
  project_phase_skills?: LemonRestModelsProxyProjectPhaseSkill[];
  /** @format int32 */
  project_phase_related_phase_id?: number;
  /** @format int32 */
  project_phase_installment_order_number?: number;
  /** @format int32 */
  delivery_customer_id?: number;
  /** @format int32 */
  invoicing_customer_id?: number;
  /** @format int32 */
  orderer_customer_id?: number;
  /** @format date-time */
  project_phase_commissioning_date?: string;
  /** @format double */
  salary_exp_amount?: number;
  /** @format double */
  salary_exp?: number;
  /** @format double */
  material_exp?: number;
  /** @format double */
  subcontract_exp?: number;
  /** @format double */
  travel_exp?: number;
  /** @format double */
  allowance_exp?: number;
  project_phase_contacts?: LemonRestModelsProxyProjectPhaseContact[];
  /** @format int32 */
  worktime_invoicing_type?: number;
  /** @format int32 */
  worktime_material_invoicing_type?: number;
}

export interface LemonRestModelsProxySite {
  /** @format int32 */
  site_id?: number;
  site_key?: string;
  site_number?: string;
  site_address?: string;
  site_postalcode?: string;
  site_post_office?: string;
  site_contact?: string;
  site_contact_phone?: string;
  site_contact_email?: string;
  site_contact_address?: string;
  site_contact_postalcode?: string;
  site_contact_post_office?: string;
  site_contact_home_country?: string;
}

export interface LemonRestModelsProxyProjectCustomer {
  /** @format int32 */
  project_customer_id?: number;
  /** @format int32 */
  project_id?: number;
  /** @format int32 */
  customer_id?: number;
  /** @format int32 */
  customer_number?: number;
  customer_name?: string;
  customer_address1?: string;
  customer_address2?: string;
  customer_address3?: string;
  customer_country?: string;
  customer_contact?: string;
  customer_contact_phone?: string;
  customer_contact_email?: string;
  /** @format double */
  invoicing_percent?: number;
}

export interface LemonRestModelsProxyProjectContactSkill {
  /** @format int32 */
  project_contact_skill_id?: number;
  /** @format int32 */
  project_contacts_id?: number;
  /** @format int32 */
  person_skillprofile_id?: number;
  /** @format int32 */
  codelist_id?: number;
  skill_description?: string;
}

export interface LemonRestModelsProxyProjectPhaseSkill {
  /** @format int32 */
  project_phase_skill_id?: number;
  /** @format int32 */
  project_phase_id?: number;
  /** @format int32 */
  codelist_id?: number;
  codelist_description?: string;
}

export interface LemonRestModelsProxyProjectPhaseContact {
  /** @format int32 */
  project_phase_contact_id?: number;
  /** @format int32 */
  project_phase_id?: number;
  /** @format int32 */
  person_number?: number;
  person_name?: string;
  project_phase_team_bit?: boolean;
  /** @format int32 */
  project_phase_resource_amount?: number;
  /** @format int32 */
  project_contacts_total?: number;
}

export interface LemonRestModelsQueryFiltersInvoiceFilter {
  /** @format int32 */
  invoice_type?: number;
  /** @format int32 */
  invoice_state?: number;
  /** @format int32 */
  customer_number?: number;
  description?: string;
  /** @format date-time */
  created_before?: string;
  /** @format date-time */
  created_after?: string;
  /** @format date-time */
  updated_before?: string;
  /** @format date-time */
  updated_after?: string;
  object_ids?: number[];
  /**
   * Page number. If not provided, using default value of 1
   * @format int32
   */
  page?: number;
  /**
   * Page size. If not provided, using default value of 10
   * @format int32
   */
  page_size?: number;
  search?: string;
}

export interface LemonRestModelsProxyPurchaseInvoice {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  type?: number;
  invoice_state?: LemonRestModelsProxyPurchaseInvoiceState;
  /** @format int32 */
  number?: number;
  /** @format date-time */
  date?: string;
  description?: string;
  /** @format double */
  totalsum?: number;
  /** @format double */
  payment_total?: number;
  note?: string;
  /** @format int32 */
  note_type?: number;
  note_text?: string;
  taxtype?: boolean;
  currency_code?: string;
  /** @format double */
  currency_rate?: number;
  reference?: string;
  supplier_number?: string;
  purchase_order_number?: string;
  /** @format int32 */
  payment_term?: number;
  /** @format date-time */
  duedate?: string;
  exported_bit?: boolean;
  state_payed?: boolean;
  /** @format int32 */
  travelexpense_number?: number;
  /** @format int32 */
  project_invoice_number?: number;
  project_invoice_bit?: boolean;
  payment_ban_bit?: boolean;
  /** @format double */
  total_net?: number;
  /** @format double */
  total_tax?: number;
  /** @format int32 */
  customer_number?: number;
  customer_name?: string;
  customer_name_additional?: string;
  street_address?: string;
  street_address_additional?: string;
  city?: string;
  customer_country?: string;
  account?: string;
  swift?: string;
  bank?: string;
  bank2?: string;
  bank3?: string;
  bank4?: string;
  contractnumber?: string;
  /** @format int32 */
  payment_type?: number;
  /** @format int32 */
  payment_share?: number;
  foreign_share?: string;
  foreign_type?: string;
  clearing?: string;
  www_link?: string;
  purchase_invoice_payments?: LemonRestModelsProxyPurchaseInvoicePayment[];
  purchase_invoice_rows?: LemonRestModelsProxyPurchaseInvoiceRow[];
  purchase_invoice_circulations?: LemonRestModelsProxyPurchaseInvoiceCirculation[];
}

export interface LemonRestModelsProxyPurchaseInvoiceState {
  /**
   * 0=kirjattu, 1=hyväksytty, 2=maksussa, 3=maksettu, 4=kierrossa, 5=hylätty
   * @format int32
   */
  state?: number;
  description?: string;
}

export interface LemonRestModelsProxyPurchaseInvoicePayment {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  invoice_id?: number;
  /** @format date-time */
  date?: string;
  /** @format double */
  total?: number;
  /** @format double */
  total_incurrency?: number;
  /** @format double */
  currency_rate?: number;
  accountlist_account?: string;
  account_currency?: string;
  costcenter_code?: string;
  /** @format int32 */
  batch?: number;
  /** @format double */
  taxrate?: number;
  description?: string;
  identifier?: string;
  /** @format int32 */
  project?: number;
  lta?: string;
  /** @format int32 */
  type?: number;
}

export interface LemonRestModelsProxyPurchaseInvoiceRow {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  invoice_id?: number;
  /** @format int32 */
  row_number?: number;
  accountlist_account?: string;
  /** @format double */
  row_net?: number;
  /** @format double */
  taxrate?: number;
  /** @format double */
  taxamount?: number;
  /** @format double */
  total?: number;
  description?: string;
  description2?: string;
  codelist_costcenter?: string;
  /** @format int32 */
  project_number?: number;
  project_phase?: LemonRestModelsProxyPurchaseInvoiceProjectPhase;
  /** @format int32 */
  codelist_worknumber?: number;
  /** @format int32 */
  purchaseorder_number?: number;
  /** @format int32 */
  delivery_customer_number?: number;
  /** @format int32 */
  person_number?: number;
  note?: string;
  innernote?: string;
  project_invoice_bit?: boolean;
  /** @format int32 */
  project_invoice_number?: number;
  /** @format int32 */
  assets_id?: number;
  /** @format int32 */
  blocking?: number;
  productcode?: string;
  productdescription?: string;
  /** @format double */
  discount?: number;
  /** @format date-time */
  deliverydate?: string;
  /** @format double */
  amount?: number;
  unit?: string;
  /** @format double */
  unitprice?: number;
  /** @format int32 */
  expensegroup?: number;
  lta?: string;
  worksitecode?: string;
  worksitenumber?: string;
  /** @format int32 */
  receiptnumber?: number;
  worksite_bit?: boolean;
  reporttull_bit?: boolean;
}

export interface LemonRestModelsProxyPurchaseInvoiceCirculation {
  /**
   * Kierrätyksen id
   * @format int32
   */
  id?: number;
  /**
   * Ostolaskun id
   * @format int32
   */
  invoice_id?: number;
  /** Kierrätyksen tila */
  circulation_state?: LemonRestModelsProxyPurchaseInvoiceCirculationState;
  /** Kierrätyksen henkilön numero */
  circulation_person?: LemonRestModelsProxyPurchaseInvoiceCirculationPerson;
  /** Kierrätyksen rooli */
  circulation_type?: LemonRestModelsProxyPurchaseInvoiceCirculationType;
  /** Tarkaskuksen huomiot */
  note?: string;
  /** Viesti kierrätyksestä lähetetty */
  notification?: boolean;
  /** Tarkastuksen suorittaneen henkilön numero */
  circulation_checker?: LemonRestModelsProxyPurchaseInvoiceCirculationPerson;
  /**
   * Tarkastuksen suorituksen aikaleima
   * @format date-time
   */
  timestamp?: string;
  /**
   * Järjestys
   * @format int32
   */
  order?: number;
  /** Palaute mitä voi antaa jos palauttaa tarkastukseen */
  feedback?: string;
  /** Lisää info jos checker/henkilönumero=0, joka hyväksyi/tarkasti. esim. Ostosopimus */
  checker_text?: string;
  /** Palautettu kiertoon */
  returned?: boolean;
}

export interface LemonRestModelsProxyPurchaseInvoiceProjectPhase {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  phase_number?: number;
  header?: string;
  description?: string;
  phase_code?: string;
}

export interface LemonRestModelsProxyPurchaseInvoiceCirculationState {
  /**
   * 0=meneillään, 1=hyväksytty, 2=hylätty
   * @format int32
   */
  state?: number;
  description?: string;
}

export interface LemonRestModelsProxyPurchaseInvoiceCirculationPerson {
  /**
   * Henkilönumero
   * @format int32
   */
  number?: number;
  name?: string;
}

export interface LemonRestModelsProxyPurchaseInvoiceCirculationType {
  /**
   * 0=tarkastaja, 1=hyväksyjä, 2=Tiedoksi
   * @format int32
   */
  type?: number;
  description?: string;
}

export interface LemonRestModelsQueryFiltersPurchaseOrderFilter {
  /** @format int32 */
  state?: number;
  /** @format int32 */
  customer_number?: number;
  /** @format int32 */
  type?: number;
  /** @format date-time */
  ordered_before?: string;
  /** @format date-time */
  ordered_after?: string;
  order_numbers?: number[];
  /** @format date-time */
  updated_before?: string;
  /** @format date-time */
  updated_after?: string;
  only_allowed_types?: boolean;
  sort_desc?: boolean;
  object_ids?: number[];
  /**
   * Page number. If not provided, using default value of 1
   * @format int32
   */
  page?: number;
  /**
   * Page size. If not provided, using default value of 10
   * @format int32
   */
  page_size?: number;
  search?: string;
}

export interface LemonRestModelsProxyPurchaseOrder {
  currency_code?: string;
  /** @format date-time */
  delivery_date?: string;
  delivery_info1?: string;
  delivery_info2?: string;
  /** @format int32 */
  delivery_method?: number;
  language_code?: string;
  rows?: LemonRestModelsProxyPurchaseOrderRow[];
  /** @format int32 */
  payment_term?: number;
  /** @format int32 */
  person_buyer_number?: number;
  /** @format int32 */
  person_responsible_number?: number;
  /** @format double */
  currency_rate?: number;
  customer_address1?: string;
  customer_address2?: string;
  customer_address3?: string;
  customer_contact?: string;
  customer_country?: string;
  customer_name1?: string;
  customer_name2?: string;
  /** @format int32 */
  customer_number?: number;
  customer_reference?: string;
  /** @format date-time */
  purchase_order_date?: string;
  delivery_code?: string;
  delivery_customer_address1?: string;
  delivery_customer_address2?: string;
  delivery_customer_address3?: string;
  delivery_customer_contact?: string;
  delivery_customer_country?: string;
  delivery_customer_name1?: string;
  delivery_customer_name2?: string;
  /** @format int32 */
  delivery_customer_number?: number;
  /** @format int32 */
  delivery_term?: number;
  delivery_text?: string;
  deliverynotes?: string;
  description?: string;
  note?: string;
  /** @format int32 */
  order_number?: number;
  ordered_bit?: boolean;
  ordermark?: string;
  our_reference?: string;
  /** @format double */
  pricefactor?: number;
  /** @format int32 */
  project_number?: number;
  /** @format int32 */
  state?: number;
  taxtype_bit?: boolean;
  /** @format double */
  totalsum?: number;
  /** @format int32 */
  type?: number;
  /** @format int32 */
  purchase_order_id?: number;
  delivery_info?: LemonRestModelsProxyOrderDeliveryInfo;
}

export interface LemonRestModelsProxyPurchaseOrderRow {
  /** @format double */
  delivered?: number;
  delivery_info1?: string;
  /** @format int32 */
  invoice_number?: number;
  jt?: boolean;
  /** @format date-time */
  row_delivery_date?: string;
  row_delivery_text?: string;
  row_reference?: string;
  /** @format int32 */
  row_salesrow_id?: number;
  /** @format double */
  row_total_delivery?: number;
  shelf?: string;
  /** @format double */
  to_be_delivered?: number;
  /** @format int32 */
  purchase_order_id?: number;
  /** @format int32 */
  row_product_batch_id?: number;
  stock_unit?: string;
  row_sizes?: LemonRestModelsProxySizeAmount[];
  serials?: LemonRestModelsProxySerialNumberTmp[];
  batches?: LemonRestModelsProxyStockTransactionBatch[];
  shelfList?: LemonRestModelsProxyPurchaseOrderRowShelf[];
  /** @format int32 */
  id?: number;
  /** @format int32 */
  type?: number;
  account?: string;
  cost_center?: string;
  project_code?: string;
  /** @format int32 */
  project_number?: number;
  /** @format int32 */
  project_phase_id?: number;
  /** @format double */
  discount?: number;
  /** @format double */
  discount2?: number;
  /** @format double */
  discount3?: number;
  /** @format double */
  per?: number;
  /** @format double */
  sales_price?: number;
  /** @format double */
  total: number;
  /** @format double */
  unit_price: number;
  /** @format double */
  quantity: number;
  /** @format double */
  quantity2?: number;
  color?: string;
  /** @format double */
  customer_discount_percentage?: number;
  dimension?: string;
  inner_note?: string;
  /** @format double */
  net_price?: number;
  no_stock_update?: boolean;
  note?: string;
  /** @format int32 */
  number?: number;
  position?: string;
  product_code?: string;
  product_name?: string;
  product_extra_name?: string;
  /** @format double */
  tax_amount?: number;
  /** @format double */
  tax_rate?: number;
  unit?: string;
  /** @format double */
  unit_net_price?: number;
  /** @format double */
  unit_net_price_currency?: number;
  unit_net_currency?: string;
  /** @format int32 */
  product_stock?: number;
  lta?: string;
  /** @format double */
  weight?: number;
  /** @format int32 */
  supplier_id?: number;
  row_serial?: string;
  is_serial_follow_up?: boolean;
  /** @format int32 */
  serialnumber_type?: number;
  is_batch_follow_up?: boolean;
}

export interface LemonRestModelsProxySerialNumberTmp {
  /** @format int32 */
  row_id?: number;
  serialnr_code?: string;
  serialnr_description?: string;
  serialnr_product_code?: string;
}

/** Shelf model for purchase order row arrival */
export interface LemonRestModelsProxyPurchaseOrderRowShelf {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  row_id?: number;
  shelf?: string;
  /** @format double */
  amount?: number;
}

/** Function setting filter */
export interface LemonRestModelsQueryFiltersFunctionSettingFilter {
  /** @format int32 */
  id?: number;
  name?: string;
}

export interface LemonRestModelsQueryFiltersCostCenterFilter {
  /** @format int32 */
  level?: number;
  search?: string;
  also_passives?: boolean;
  /** @format int32 */
  page?: number;
  /** @format int32 */
  page_size?: number;
}

export interface LemonRestModelsQueryFiltersPageFilter {
  /**
   * If not defined, using default value of 1
   * @format int32
   */
  page?: number;
  /**
   * If not defined, using default value of 10
   * @format int32
   */
  page_size?: number;
}

export interface LemonRestModelsQueryFiltersLtaFilter {
  also_passives?: boolean;
  /**
   * If not defined, using default value of 1
   * @format int32
   */
  page?: number;
  /**
   * If not defined, using default value of 10
   * @format int32
   */
  page_size?: number;
}

export interface LemonRestModelsProxyStock {
  /** @format int32 */
  id?: number;
  description?: string;
  /** @format int32 */
  number: number;
  /** @format int32 */
  type?: number;
  /** @format int32 */
  customer_number?: number;
  /** @format int32 */
  inventory_state?: number;
  /** @format int32 */
  inventory_order?: number;
  /** @format int32 */
  shelf_type?: number;
}

export interface LemonRestModelsProxyProductCellList {
  cells?: LemonRestModelsProxyProductCell[];
}

export interface LemonRestModelsProxyProductCell {
  /** @format int32 */
  id?: number;
  code?: string;
  /** @format int32 */
  stock_number?: number;
  corridors?: LemonRestModelsProxyProductCorridor[];
}

export interface LemonRestModelsProxyProductCorridor {
  /** @format int32 */
  id?: number;
  code?: string;
  sections?: LemonRestModelsProxyProductSection[];
}

export interface LemonRestModelsProxyProductSection {
  /** @format int32 */
  id?: number;
  code?: string;
  shelves?: LemonRestModelsProxyShelf[];
}

export interface LemonRestModelsProxyShelf {
  /** @format int32 */
  id?: number;
  description?: string;
  /** @format int32 */
  stock_number?: number;
  /** @format double */
  weight?: number;
  /** @format double */
  width?: number;
  /** @format double */
  height?: number;
  /** @format double */
  depth?: number;
}

export interface LemonRestModelsQueryFiltersStockFilter {
  /** @format date-time */
  modified_before?: string;
  /** @format date-time */
  modified_after?: string;
}

/** Yleinen matkalasku proxy */
export interface LemonRestModelsProxyGlobalTravelExpense {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  person?: number;
  person_name?: string;
  description?: string;
  /** @format date-time */
  start_date?: string;
  /** @format date-time */
  end_date?: string;
  /** @format int32 */
  vehicle?: number;
  vehicle_description?: string;
  route?: string;
  /** @format int32 */
  kilometers?: number;
  /** @format int32 */
  customer?: number;
  customer_name?: string;
  /** @format int32 */
  project?: number;
  project_description?: string;
  costcenter?: string;
  costcenter_description?: string;
  /** @format int32 */
  passengers?: number;
  note?: string;
}

export interface LemonRestModelsLogInTokenInstanceDatabase {
  Token: string;
  Database: string;
  InstanceId: string;
  ApiKey: string;
}

export interface MicrosoftAspNetCoreJsonPatchJsonPatchDocumentLemonRestModelsProxyProduct {
  Operations?: MicrosoftAspNetCoreJsonPatchOperationsOperationLemonRestModelsProxyProduct[];
}

export interface MicrosoftAspNetCoreJsonPatchOperationsOperationLemonRestModelsProxyProduct {
  value?: object;
  path?: string;
  op?: string;
  from?: string;
}

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, HeadersDefaults, ResponseType } from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({
      ...axiosConfig,
      baseURL: axiosConfig.baseURL || "https://rest-s01-prod02.lemonsoft.eu/Lemonsoft30",
    });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method && this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (type === ContentType.Text && body && body !== null && typeof body !== "string") {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title LemonRest 2023.9 build_2341
 * @version v1
 * @baseUrl https://rest-s01-prod02.lemonsoft.eu/Lemonsoft30
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  auth = {
    /**
     * No description
     *
     * @tags Authentication
     * @name AuthenticationAlive
     * @summary Checks if your session is still alive
     * @request GET:/api/auth/alive
     * @response `200` `object` OK
     */
    authenticationAlive: (params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/auth/alive`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Authentication
     * @name AuthenticationRenew
     * @summary Renew your session
     * @request POST:/api/auth/renew
     * @response `200` `object` OK
     */
    authenticationRenew: (login_info: LemonRestModelsLogInInfo, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/auth/renew`,
        method: "POST",
        body: login_info,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Authentication
     * @name AuthenticationLogInUser
     * @summary Perform a login to the API
     * @request POST:/api/auth/login
     * @response `200` `object` OK
     */
    authenticationLogInUser: (login_info: LemonRestModelsLogInInfo, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/auth/login`,
        method: "POST",
        body: login_info,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Authentication
     * @name AuthenticationLogInToken
     * @summary Perform a login to the API
     * @request POST:/api/auth/login/token
     * @response `200` `object` OK
     */
    authenticationLogInToken: (login_token: LemonRestModelsLogInToken, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/auth/login/token`,
        method: "POST",
        body: login_token,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  campaigns = {
    /**
     * No description
     *
     * @tags Campaign
     * @name CampaignList
     * @summary Get a list of campaigns
     * @request GET:/api/campaigns
     * @response `200` `object` OK
     */
    campaignList: (
      query?: {
        /** @format int32 */
        "filter.campaign_type"?: number;
        /** @format int32 */
        "filter.campaign_state"?: number;
        /** @format int32 */
        "filter.responsible_person"?: number;
        /** @format date-time */
        "filter.campaign_created_before"?: string;
        /** @format date-time */
        "filter.campaign_created_after"?: string;
        "filter.campaign_description"?: string;
        /** @format date-time */
        "filter.updated_before"?: string;
        /** @format date-time */
        "filter.updated_after"?: string;
        "filter.object_ids"?: number[];
        /**
         * Page number. If not provided, using default value of 1
         * @format int32
         */
        "filter.page"?: number;
        /**
         * Page size. If not provided, using default value of 10
         * @format int32
         */
        "filter.page_size"?: number;
        "filter.search"?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/campaigns`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Campaign
     * @name CampaignUpdate
     * @summary Update campaign
     * @request PUT:/api/campaigns
     * @response `200` `object` OK
     */
    campaignUpdate: (proxyCampaign: LemonRestModelsProxyCampaign, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/campaigns`,
        method: "PUT",
        body: proxyCampaign,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Campaign
     * @name CampaignCreate
     * @summary Create new campaign
     * @request POST:/api/campaigns
     * @response `200` `object` OK
     */
    campaignCreate: (proxyCampaign: LemonRestModelsProxyCampaign, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/campaigns`,
        method: "POST",
        body: proxyCampaign,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Campaign
     * @name CampaignGet
     * @summary Get single campaign
     * @request GET:/api/campaigns/{campaignNumber}
     * @response `200` `object` OK
     */
    campaignGet: (campaignNumber: number, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/campaigns/${campaignNumber}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Campaign
     * @name CampaignAddContact
     * @summary Add new contact to campaign
     * @request POST:/api/campaigns/contact
     * @response `200` `object` OK
     */
    campaignAddContact: (
      query: {
        /** @format int32 */
        campaignNumber: number;
      },
      proxyContact: LemonRestModelsProxyCampaignContact,
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/campaigns/contact`,
        method: "POST",
        query: query,
        body: proxyContact,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Campaign
     * @name CampaignDeleteContact
     * @summary Delete campaign contact
     * @request DELETE:/api/campaigns/contact
     * @response `200` `object` OK
     */
    campaignDeleteContact: (proxyContact: LemonRestModelsProxyCampaignContact, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/campaigns/contact`,
        method: "DELETE",
        body: proxyContact,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Campaign
     * @name CampaignAddProduct
     * @summary Add new product to campaign
     * @request POST:/api/campaigns/product
     * @response `200` `object` OK
     */
    campaignAddProduct: (
      query: {
        /** @format int32 */
        campaignNumber: number;
      },
      proxyProduct: LemonRestModelsProxyCampaignProduct,
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/campaigns/product`,
        method: "POST",
        query: query,
        body: proxyProduct,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Campaign
     * @name CampaignDeleteProduct
     * @summary Delete campaign product
     * @request DELETE:/api/campaigns/product
     * @response `200` `object` OK
     */
    campaignDeleteProduct: (proxyProduct: LemonRestModelsProxyCampaignProduct, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/campaigns/product`,
        method: "DELETE",
        body: proxyProduct,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  campaign = {
    /**
     * No description
     *
     * @tags Campaign
     * @name CampaignDelete
     * @summary Delete campaign
     * @request DELETE:/api/Campaign
     * @response `200` `object` OK
     */
    campaignDelete: (
      query: {
        /** @format int32 */
        campaignNumber: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/Campaign`,
        method: "DELETE",
        query: query,
        format: "json",
        ...params,
      }),
  };
  contacts = {
    /**
     * @description Can be filtered using ContactFilter
     *
     * @tags Contact
     * @name ContactList
     * @summary Returns a list of contacts for given customer id
     * @request GET:/api/contacts/{customer_id}
     * @response `200` `object` OK
     */
    contactList: (
      customerId: number,
      query?: {
        /** Contact name [CONTAINS] */
        "filter.name"?: string;
        "filter.email"?: string;
        /** @format date-time */
        "filter.modified_before"?: string;
        /** @format date-time */
        "filter.modified_after"?: string;
        "filter.object_ids"?: number[];
        /**
         * Page number. If not provided, using default value of 1
         * @format int32
         */
        "filter.page"?: number;
        /**
         * Page size. If not provided, using default value of 10
         * @format int32
         */
        "filter.page_size"?: number;
        "filter.search"?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/contacts/${customerId}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Contact
     * @name ContactCreate
     * @summary Create a new contact for given Customer Id
     * @request POST:/api/contacts/{customer_id}
     * @response `200` `object` OK
     */
    contactCreate: (customerId: number, contact: LemonRestModelsProxyCustomerContact, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/contacts/${customerId}`,
        method: "POST",
        body: contact,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Contact
     * @name ContactUpdate
     * @summary Update a contact with given Contact ID
     * @request PUT:/api/contacts/{contact_id}
     * @response `200` `object` OK
     */
    contactUpdate: (contactId: number, contact: LemonRestModelsProxyCustomerContact, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/contacts/${contactId}`,
        method: "PUT",
        body: contact,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  customers = {
    /**
     * @description Can be filtered using CustomerFilter
     *
     * @tags Customer
     * @name CustomerList
     * @summary Returns a list of customers for given customer id
     * @request GET:/api/customers
     * @response `200` `object` OK
     */
    customerList: (
      query?: {
        "filter.name"?: string;
        "filter.search_name"?: string;
        "filter.email"?: string;
        "filter.vat"?: string;
        /** @format date-time */
        "filter.modified_before"?: string;
        /** @format date-time */
        "filter.modified_after"?: string;
        /** @format int32 */
        "filter.has_email"?: number;
        /** @format int32 */
        "filter.is_customer"?: number;
        /** @format int32 */
        "filter.is_supplier"?: number;
        "filter.customer_number"?: number[];
        /** @format int32 */
        "filter.group"?: number;
        "filter.object_ids"?: number[];
        /**
         * Page number. If not provided, using default value of 1
         * @format int32
         */
        "filter.page"?: number;
        /**
         * Page size. If not provided, using default value of 10
         * @format int32
         */
        "filter.page_size"?: number;
        "filter.search"?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/customers`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Customer
     * @name CustomerCreate
     * @summary Create a customer
     * @request POST:/api/customers
     * @response `200` `object` OK
     */
    customerCreate: (customer: LemonRestModelsProxyCustomer, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/customers`,
        method: "POST",
        body: customer,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Can be filtered using CustomerFilter
     *
     * @tags Customer
     * @name CustomerListBase
     * @summary Returns a list of customers with only basic information
     * @request GET:/api/customers/base
     * @response `200` `object` OK
     */
    customerListBase: (
      query?: {
        "filter.name"?: string;
        "filter.search_name"?: string;
        "filter.email"?: string;
        "filter.vat"?: string;
        /** @format date-time */
        "filter.modified_before"?: string;
        /** @format date-time */
        "filter.modified_after"?: string;
        /** @format int32 */
        "filter.has_email"?: number;
        /** @format int32 */
        "filter.is_customer"?: number;
        /** @format int32 */
        "filter.is_supplier"?: number;
        "filter.customer_number"?: number[];
        /** @format int32 */
        "filter.group"?: number;
        "filter.object_ids"?: number[];
        /**
         * Page number. If not provided, using default value of 1
         * @format int32
         */
        "filter.page"?: number;
        /**
         * Page size. If not provided, using default value of 10
         * @format int32
         */
        "filter.page_size"?: number;
        "filter.search"?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/customers/base`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Customer
     * @name CustomerGet
     * @summary Get single customer
     * @request GET:/api/customers/{customer_id}
     * @response `200` `object` OK
     */
    customerGet: (customerId: number, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/customers/${customerId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Customer
     * @name CustomerUpdate
     * @summary Update a customer
     * @request PUT:/api/customers/{customer_id}
     * @response `200` `object` OK
     */
    customerUpdate: (customerId: number, customer: LemonRestModelsProxyCustomer, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/customers/${customerId}`,
        method: "PUT",
        body: customer,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Customer
     * @name CustomerAddAgreement
     * @summary Add new agreement
     * @request POST:/api/customers/{customer_id}/agreements
     * @response `200` `object` OK
     */
    customerAddAgreement: (
      customerId: number,
      agreement: LemonRestModelsProxyCustomerAgreement,
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/customers/${customerId}/agreements`,
        method: "POST",
        body: agreement,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Customer
     * @name CustomerAddAgreementProduct
     * @summary Add new agreement product
     * @request POST:/api/customers/{customer_id}/agreements/{agreement_id}/products
     * @response `200` `object` OK
     */
    customerAddAgreementProduct: (
      customerId: number,
      agreementId: number,
      agreementProduct: LemonRestModelsProxyCustomerAgreementProduct,
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/customers/${customerId}/agreements/${agreementId}/products`,
        method: "POST",
        body: agreementProduct,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Customer
     * @name CustomerDeleteAgreementProduct
     * @summary Delete agreement product
     * @request DELETE:/api/customers/{customer_id}/agreements/products/{agreement_product_id}
     * @response `200` `object` OK
     */
    customerDeleteAgreementProduct: (customerId: number, agreementProductId: number, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/customers/${customerId}/agreements/products/${agreementProductId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Customer
     * @name CustomerDeleteAgreement
     * @summary Delete agreement
     * @request DELETE:/api/customers/{customer_id}/agreements/{agreement_id}
     * @response `200` `object` OK
     */
    customerDeleteAgreement: (customerId: number, agreementId: number, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/customers/${customerId}/agreements/${agreementId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Customer
     * @name CustomerAddAccount
     * @summary Add new account
     * @request POST:/api/customers/{customer_id}/accounts
     * @response `200` `object` OK
     */
    customerAddAccount: (
      customerId: number,
      account: LemonRestModelsProxyCustomerAccount,
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/customers/${customerId}/accounts`,
        method: "POST",
        body: account,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Customer
     * @name CustomerDeleteAccount
     * @summary Delete account
     * @request DELETE:/api/customers/{customer_id}/accounts/{account_id}
     * @response `200` `object` OK
     */
    customerDeleteAccount: (customerId: number, accountId: number, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/customers/${customerId}/accounts/${accountId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Customer
     * @name CustomerListTransaction
     * @summary Search customer transactions
     * @request GET:/api/customers/transactions
     * @response `200` `object` OK
     */
    customerListTransaction: (
      query?: {
        /** @format int32 */
        "filter.type"?: number;
        /** @format int32 */
        "filter.state"?: number;
        /** @format int32 */
        "filter.customer_number"?: number;
        /** @format date-time */
        "filter.transaction_date_before"?: string;
        /** @format date-time */
        "filter.transaction_date_after"?: string;
        /** @format int32 */
        "filter.person_number"?: number;
        /** @format int32 */
        "filter.todo_person_number"?: number;
        /** @format int32 */
        "filter.project_number"?: number;
        /** @format int32 */
        "filter.customer_contact_id"?: number;
        "filter.object_ids"?: number[];
        /**
         * Page number. If not provided, using default value of 1
         * @format int32
         */
        "filter.page"?: number;
        /**
         * Page size. If not provided, using default value of 10
         * @format int32
         */
        "filter.page_size"?: number;
        "filter.search"?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/customers/transactions`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Customer
     * @name CustomerGetSingleCustomerTransactions
     * @summary Get single customer transactions
     * @request GET:/api/customers/{customer_id}/transactions
     * @response `200` `object` OK
     */
    customerGetSingleCustomerTransactions: (customerId: number, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/customers/${customerId}/transactions`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Customer
     * @name CustomerUpdateTransaction
     * @summary Update transaction
     * @request PUT:/api/customers/{customer_id}/transactions
     * @response `200` `object` OK
     */
    customerUpdateTransaction: (
      customerId: number,
      proxytransaction: LemonRestModelsProxyCustomerTransaction,
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/customers/${customerId}/transactions`,
        method: "PUT",
        body: proxytransaction,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Customer
     * @name CustomerAddTransaction
     * @summary Add new transaction
     * @request POST:/api/customers/{customer_id}/transactions
     * @response `200` `object` OK
     */
    customerAddTransaction: (
      customerId: number,
      proxytransaction: LemonRestModelsProxyCustomerTransaction,
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/customers/${customerId}/transactions`,
        method: "POST",
        body: proxytransaction,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Customer
     * @name CustomerDeleteTransaction
     * @summary Delete transaction
     * @request DELETE:/api/customers/{customer_id}/transactions/{transaction_id}
     * @response `200` `object` OK
     */
    customerDeleteTransaction: (customerId: number, transactionId: number, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/customers/${customerId}/transactions/${transactionId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Customer
     * @name CustomerAddContact
     * @summary Add new contact
     * @request POST:/api/customers/{customer_id}/contacts
     * @response `200` `object` OK
     */
    customerAddContact: (
      customerId: number,
      contact: LemonRestModelsProxyCustomerContact,
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/customers/${customerId}/contacts`,
        method: "POST",
        body: contact,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Customer
     * @name CustomerDeleteContact
     * @summary Delete contact
     * @request DELETE:/api/customers/{customer_id}/contacts/{contact_id}
     * @response `200` `object` OK
     */
    customerDeleteContact: (customerId: number, contactId: number, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/customers/${customerId}/contacts/${contactId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Customer
     * @name CustomerAddText
     * @summary Add new text
     * @request POST:/api/customers/{customer_id}/texts
     * @response `200` `object` OK
     */
    customerAddText: (customerId: number, text: LemonRestModelsProxyCustomerText, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/customers/${customerId}/texts`,
        method: "POST",
        body: text,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Customer
     * @name CustomerAddCirculation
     * @summary Add new circulation
     * @request POST:/api/customers/{customer_id}/circulations
     * @response `200` `object` OK
     */
    customerAddCirculation: (
      customerId: number,
      circulation: LemonRestModelsProxyCustomerCirculation,
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/customers/${customerId}/circulations`,
        method: "POST",
        body: circulation,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Customer
     * @name CustomerDeleteCirculation
     * @summary Delete circulation
     * @request DELETE:/api/customers/{customer_id}/circulations/{circulation_id}
     * @response `200` `object` OK
     */
    customerDeleteCirculation: (customerId: number, circulationId: number, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/customers/${customerId}/circulations/${circulationId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Customer
     * @name CustomerListGroups
     * @summary Get list of Customer Groups
     * @request GET:/api/customers/groups
     * @response `200` `object` OK
     */
    customerListGroups: (
      query?: {
        "filter.name"?: string;
        /** @format int32 */
        "filter.parent_id"?: number;
        "filter.object_ids"?: number[];
        /**
         * Page number. If not provided, using default value of 1
         * @format int32
         */
        "filter.page"?: number;
        /**
         * Page size. If not provided, using default value of 10
         * @format int32
         */
        "filter.page_size"?: number;
        "filter.search"?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/customers/groups`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Customer
     * @name CustomerListTransactionAttributes
     * @summary List transaction attributes
     * @request GET:/api/customers/transactions/attributes
     * @response `200` `object` OK
     */
    customerListTransactionAttributes: (params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/customers/transactions/attributes`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  files = {
    /**
     * No description
     *
     * @tags File
     * @name FileGetFiles
     * @summary Gets lemonfiles from azure
     * @request GET:/api/files
     * @response `200` `object` OK
     */
    fileGetFiles: (
      query?: {
        /** @format int32 */
        "filter.application_id"?: number;
        "filter.search"?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/files`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags File
     * @name FileUpload
     * @summary Upload file to lemonfiles
     * @request POST:/api/files
     * @response `200` `object` OK
     */
    fileUpload: (azureBlobItem: LemonRestModelsProxyAzureBlobItemUpload, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/files`,
        method: "POST",
        body: azureBlobItem,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags File
     * @name FileGetSasUri
     * @summary Get sas uri for file
     * @request GET:/api/files/azure/url/{azure_blob_name}
     * @response `200` `object` OK
     */
    fileGetSasUri: (azureBlobName: string, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/files/azure/url/${azureBlobName}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags File
     * @name FileGetJobImage
     * @summary Get job image
     * @request GET:/api/files/jobimage/{applicationId}/{dataId}
     * @response `200` `object` OK
     */
    fileGetJobImage: (applicationId: number, dataId: number, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/files/jobimage/${applicationId}/${dataId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags File
     * @name FileUploadJobImage
     * @summary Upload file to images
     * @request POST:/api/files/jobimage
     * @response `200` `object` OK
     */
    fileUploadJobImage: (proxy: LemonRestModelsProxyJobImage, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/files/jobimage`,
        method: "POST",
        body: proxy,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  invoices = {
    /**
     * No description
     *
     * @tags Invoice
     * @name InvoiceList
     * @summary Get a list of invoices
     * @request GET:/api/invoices
     * @response `200` `object` OK
     */
    invoiceList: (
      query?: {
        "filter.numbers"?: number[];
        /** @format int32 */
        "filter.customer_number"?: number;
        /** @format int32 */
        "filter.delivery_customer_number"?: number;
        /** @format int32 */
        "filter.type"?: number;
        /** @format date-time */
        "filter.invoice_date_before"?: string;
        /** @format date-time */
        "filter.invoice_date_after"?: string;
        /** @format date-time */
        "filter.updated_before"?: string;
        /** @format date-time */
        "filter.updated_after"?: string;
        "filter.object_ids"?: number[];
        /**
         * Page number. If not provided, using default value of 1
         * @format int32
         */
        "filter.page"?: number;
        /**
         * Page size. If not provided, using default value of 10
         * @format int32
         */
        "filter.page_size"?: number;
        "filter.search"?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/invoices`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Invoice
     * @name InvoiceUpdateInvoice
     * @summary Update invoice
     * @request PUT:/api/invoices
     * @response `200` `object` OK
     */
    invoiceUpdateInvoice: (proxyInvoice: LemonRestModelsProxyInvoice, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/invoices`,
        method: "PUT",
        body: proxyInvoice,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Invoice
     * @name InvoiceCreateNewInvoice
     * @summary Create invoice
     * @request POST:/api/invoices
     * @response `200` `object` OK
     */
    invoiceCreateNewInvoice: (proxyInvoice: LemonRestModelsProxyInvoice, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/invoices`,
        method: "POST",
        body: proxyInvoice,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Invoice
     * @name InvoiceGet
     * @summary Get single invoice
     * @request GET:/api/invoices/{id}
     * @response `200` `object` OK
     */
    invoiceGet: (id: number, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/invoices/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Invoice
     * @name InvoiceDeleteInvoice
     * @summary Delete invoice
     * @request DELETE:/api/invoices/{id}
     * @response `200` `object` OK
     */
    invoiceDeleteInvoice: (id: number, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/invoices/${id}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Invoice
     * @name InvoiceCreateNewInvoiceFromSalesOrder
     * @summary Create invoice based on salesorder
     * @request POST:/api/invoices/order/{number}
     * @response `200` `object` OK
     */
    invoiceCreateNewInvoiceFromSalesOrder: (number: number, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/invoices/order/${number}`,
        method: "POST",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Invoice
     * @name InvoiceCreateNewInvoiceRow
     * @summary Create new invoice row
     * @request POST:/api/invoices/{id}/row
     * @response `200` `object` OK
     */
    invoiceCreateNewInvoiceRow: (
      id: number,
      proxyInvoiceRow: LemonRestModelsProxyInvoiceRow,
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/invoices/${id}/row`,
        method: "POST",
        body: proxyInvoiceRow,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Invoice
     * @name InvoiceCreateNewInvoicePayment
     * @summary Create new invoice payment row
     * @request POST:/api/invoices/{id}/payment
     * @response `200` `object` OK
     */
    invoiceCreateNewInvoicePayment: (
      id: number,
      proxyInvoicePayment: LemonRestModelsProxyInvoicePayment,
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/invoices/${id}/payment`,
        method: "POST",
        body: proxyInvoicePayment,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Invoice
     * @name InvoiceDeleteInvoiceRow
     * @summary Delete invoice row
     * @request DELETE:/api/invoices/{id}/row/{row_id}
     * @response `200` `object` OK
     */
    invoiceDeleteInvoiceRow: (id: number, rowId: number, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/invoices/${id}/row/${rowId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Invoice
     * @name InvoiceDeletePaymentRow
     * @summary Delete payment row
     * @request DELETE:/api/invoices/{id}/payment/{payment_id}
     * @response `200` `object` OK
     */
    invoiceDeletePaymentRow: (id: number, paymentId: number, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/invoices/${id}/payment/${paymentId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Invoice
     * @name InvoiceCreateLink
     * @summary Add link to invoice
     * @request POST:/api/invoices/{id}/link
     * @response `200` `object` OK
     */
    invoiceCreateLink: (id: number, proxyLink: LemonRestModelsProxyLink, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/invoices/${id}/link`,
        method: "POST",
        body: proxyLink,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Invoice
     * @name InvoiceDeleteLink
     * @summary Delete link
     * @request DELETE:/api/invoices/{id}/link/{link_id}
     * @response `200` `object` OK
     */
    invoiceDeleteLink: (id: number, linkId: number, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/invoices/${id}/link/${linkId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),
  };
  offers = {
    /**
     * No description
     *
     * @tags Offer
     * @name OfferCreate
     * @summary Create offer
     * @request POST:/api/offers/{offerType}
     * @response `200` `object` OK
     */
    offerCreate: (offerType: number, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/offers/${offerType}`,
        method: "POST",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Offer
     * @name OfferGet
     * @summary Get offer
     * @request GET:/api/offers/{offerNumber}
     * @response `200` `object` OK
     */
    offerGet: (
      offerNumber: number,
      query?: {
        /** A optional version number */
        version?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/offers/${offerNumber}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Offer
     * @name OfferList
     * @summary Get a list of offers
     * @request GET:/api/offers
     * @response `200` `object` OK
     */
    offerList: (
      query?: {
        /** @format int32 */
        "filter.customer_number"?: number;
        /** @format int32 */
        "filter.delivery_customer_number"?: number;
        /** @format date-time */
        "filter.offer_date_before"?: string;
        /** @format date-time */
        "filter.offer_date_after"?: string;
        /** @format date-time */
        "filter.updated_before"?: string;
        /** @format date-time */
        "filter.updated_after"?: string;
        "filter.include_old_versions"?: boolean;
        "filter.offer_numbers"?: number[];
        "filter.object_ids"?: number[];
        /**
         * Page number. If not provided, using default value of 1
         * @format int32
         */
        "filter.page"?: number;
        /**
         * Page size. If not provided, using default value of 10
         * @format int32
         */
        "filter.page_size"?: number;
        "filter.search"?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/offers`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Offer
     * @name OfferUpdate
     * @summary Update offer
     * @request PUT:/api/offers
     * @response `200` `object` OK
     */
    offerUpdate: (proxyOffer: LemonRestModelsProxyOffer, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/offers`,
        method: "PUT",
        body: proxyOffer,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Offer
     * @name OfferUpdateOfferRow
     * @summary Update offerrow
     * @request PUT:/api/offers/{offerNumber}/offerrows
     * @response `200` `object` OK
     */
    offerUpdateOfferRow: (
      offerNumber: number,
      proxyOfferRow: LemonRestModelsProxyOfferRow,
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/offers/${offerNumber}/offerrows`,
        method: "PUT",
        body: proxyOfferRow,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Offer
     * @name OfferCreateOfferRow
     * @summary Create offerrow
     * @request POST:/api/offers/{offerNumber}/offerrows
     * @response `200` `object` OK
     */
    offerCreateOfferRow: (
      offerNumber: number,
      proxyOfferRow: LemonRestModelsProxyOfferRow,
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/offers/${offerNumber}/offerrows`,
        method: "POST",
        body: proxyOfferRow,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Offer
     * @name OfferDeleteOfferRow
     * @summary Delete offerrow
     * @request DELETE:/api/offers/{offerNumber}/offerrows
     * @response `200` `object` OK
     */
    offerDeleteOfferRow: (
      offerNumber: number,
      proxyOfferRow: LemonRestModelsProxyOfferRow,
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/offers/${offerNumber}/offerrows`,
        method: "DELETE",
        body: proxyOfferRow,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Offer
     * @name OfferCreateLink
     * @summary Create a offer link
     * @request POST:/api/offers/{offerNumber}/links
     * @response `200` `object` OK
     */
    offerCreateLink: (offerNumber: number, link: LemonRestModelsProxyLink, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/offers/${offerNumber}/links`,
        method: "POST",
        body: link,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Offer
     * @name OfferDeleteLink
     * @summary Delete offer link
     * @request DELETE:/api/offers/{offerNumber}/links/{link_id}
     * @response `200` `object` OK
     */
    offerDeleteLink: (offerNumber: number, linkId: number, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/offers/${offerNumber}/links/${linkId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),
  };
  orders = {
    /**
     * No description
     *
     * @tags Order
     * @name OrderList
     * @summary Get a list of orders
     * @request GET:/api/orders
     * @response `200` `object` OK
     */
    orderList: (
      query?: {
        /** @format int32 */
        "filter.type"?: number;
        "filter.state"?: number[];
        /** @format int32 */
        "filter.customer_number"?: number;
        /** @format int32 */
        "filter.delivery_customer_number"?: number;
        "filter.order_numbers"?: number[];
        /** @format date-time */
        "filter.ordered_before"?: string;
        /** @format date-time */
        "filter.ordered_after"?: string;
        /** @format date-time */
        "filter.updated_before"?: string;
        /** @format date-time */
        "filter.updated_after"?: string;
        "filter.only_allowed_types"?: boolean;
        "filter.sort_desc"?: boolean;
        "filter.only_models"?: boolean;
        "filter.object_ids"?: number[];
        /**
         * Page number. If not provided, using default value of 1
         * @format int32
         */
        "filter.page"?: number;
        /**
         * Page size. If not provided, using default value of 10
         * @format int32
         */
        "filter.page_size"?: number;
        "filter.search"?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/orders`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Order
     * @name OrderUpdate
     * @summary Update order
     * @request PUT:/api/orders
     * @response `200` `object` OK
     */
    orderUpdate: (proxyOrder: LemonRestModelsProxySalesOrder, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/orders`,
        method: "PUT",
        body: proxyOrder,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Order
     * @name OrderCreate
     * @summary Create an order
     * @request POST:/api/orders
     * @response `200` `object` OK
     */
    orderCreate: (order: LemonRestModelsProxySalesOrder, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/orders`,
        method: "POST",
        body: order,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Order
     * @name OrderGetOrderStatus
     * @summary Get order status
     * @request GET:/api/orders/{order_id}/status
     * @response `200` `object` OK
     */
    orderGetOrderStatus: (orderId: number, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/orders/${orderId}/status`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Order
     * @name OrderGet
     * @summary Get order
     * @request GET:/api/orders/{order_id}
     * @response `200` `object` OK
     */
    orderGet: (orderId: number, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/orders/${orderId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Order
     * @name OrderUpdateRow
     * @summary Update order row
     * @request PUT:/api/orders/{order_id}/row
     * @response `200` `object` OK
     */
    orderUpdateRow: (orderId: number, proxyOrderRow: LemonRestModelsProxySalesOrderRow, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/orders/${orderId}/row`,
        method: "PUT",
        body: proxyOrderRow,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Order
     * @name OrderCreateRow
     * @summary Create new order row
     * @request POST:/api/orders/{order_id}/row
     * @response `200` `object` OK
     */
    orderCreateRow: (orderId: number, proxyOrderRow: LemonRestModelsProxySalesOrderRow, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/orders/${orderId}/row`,
        method: "POST",
        body: proxyOrderRow,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Order
     * @name OrderDeleteRow
     * @summary Delete order row
     * @request DELETE:/api/orders/{order_id}/row/{row_id}
     * @response `200` `object` OK
     */
    orderDeleteRow: (orderId: number, rowId: number, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/orders/${orderId}/row/${rowId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Order
     * @name OrderSetRowSerials
     * @summary Set serial numbers to row
     * @request PUT:/api/orders/{order_id}/row/{row_id}/serials
     * @response `200` `object` OK
     */
    orderSetRowSerials: (
      orderId: number,
      rowId: number,
      proxys: LemonRestModelsProxySalesOrderRowSerialNumber[],
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/orders/${orderId}/row/${rowId}/serials`,
        method: "PUT",
        body: proxys,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Order
     * @name OrderSetRowBatchNumbers
     * @summary Set batch numbers to row
     * @request PUT:/api/orders/{order_id}/row/{row_id}/batchs
     * @response `200` `object` OK
     */
    orderSetRowBatchNumbers: (
      orderId: number,
      rowId: number,
      proxys: LemonRestModelsProxySalesOrderRowBatchNumber[],
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/orders/${orderId}/row/${rowId}/batchs`,
        method: "PUT",
        body: proxys,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Order
     * @name OrderSetServiceInstructionToOrder
     * @summary Set service instruction to sales order
     * @request PUT:/api/orders/{order_id}/instruction/{instruction_id}
     * @response `200` `object` OK
     */
    orderSetServiceInstructionToOrder: (orderId: number, instructionId: number, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/orders/${orderId}/instruction/${instructionId}`,
        method: "PUT",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Order
     * @name OrderGetServiceInstructions
     * @summary Get a list of service instructions
     * @request GET:/api/orders/instructions
     * @response `200` `object` OK
     */
    orderGetServiceInstructions: (
      query?: {
        "filter.object_ids"?: number[];
        /**
         * Page number. If not provided, using default value of 1
         * @format int32
         */
        "filter.page"?: number;
        /**
         * Page size. If not provided, using default value of 10
         * @format int32
         */
        "filter.page_size"?: number;
        "filter.search"?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/orders/instructions`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Order
     * @name OrderUpdateServiceInstruction
     * @summary Updates service order instruction row
     * @request PUT:/api/orders/instructions/{id}
     * @response `200` `object` OK
     */
    orderUpdateServiceInstruction: (
      id: number,
      instruction: LemonRestModelsProxyServiceOrderInstruction,
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/orders/instructions/${id}`,
        method: "PUT",
        body: instruction,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Order
     * @name OrderCreateOrderFromOffer
     * @summary Create an order from offer payload
     * @request POST:/api/orders/from_offer
     * @response `200` `object` OK
     */
    orderCreateOrderFromOffer: (
      query: {
        /**
         * SalesOrder type
         * @format int32
         */
        orderType: number;
        /** Copy offer links to salesorder */
        copyLinks?: boolean;
        /** Refresh customer data */
        getCustomerData?: boolean;
      },
      proxyOffer: LemonRestModelsProxyOffer,
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/orders/from_offer`,
        method: "POST",
        query: query,
        body: proxyOffer,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Order
     * @name OrderCreateOrderFromOfferByNumber
     * @summary Create an order from offer by offer number
     * @request POST:/api/orders/from_offer/{number}
     * @response `200` `object` OK
     */
    orderCreateOrderFromOfferByNumber: (
      number: number,
      query: {
        /**
         * SalesOrder type
         * @format int32
         */
        orderType: number;
        /** Copy offer links to salesorder */
        copyLinks?: boolean;
        /** Refresh customer data */
        getCustomerData?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/orders/from_offer/${number}`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Order
     * @name OrderCreateLink
     * @summary Create a sales order link
     * @request POST:/api/orders/{order_id}/links
     * @response `200` `object` OK
     */
    orderCreateLink: (orderId: number, link: LemonRestModelsProxyLink, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/orders/${orderId}/links`,
        method: "POST",
        body: link,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Order
     * @name OrderDeleteLink
     * @summary Delete salesorder link
     * @request DELETE:/api/orders/{order_id}/links/{link_id}
     * @response `200` `object` OK
     */
    orderDeleteLink: (orderId: number, linkId: number, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/orders/${orderId}/links/${linkId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Order
     * @name OrderCreateRowPacketProduct
     * @summary Create salesorder packet product row to existing sales order
     * @request POST:/api/orders/{order_id}/packet_row
     * @response `200` `object` OK
     */
    orderCreateRowPacketProduct: (
      orderId: number,
      query: {
        /** Product sku code */
        product_code: string;
        /**
         * Product amount
         * @format double
         */
        amount: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/orders/${orderId}/packet_row`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Order
     * @name OrderGetOrderDeliveryPallets
     * @summary Gets list of delivery pallets that are linked to order
     * @request GET:/api/orders/{order_id}/deliverypallets
     * @response `200` `object` OK
     */
    orderGetOrderDeliveryPallets: (orderId: number, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/orders/${orderId}/deliverypallets`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Order
     * @name OrderGetOrderDeliveryPallet
     * @summary Gets single delivery pallet
     * @request GET:/api/orders/{order_id}/deliverypallets/{id}
     * @response `200` `object` OK
     */
    orderGetOrderDeliveryPallet: (orderId: number, id: number, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/orders/${orderId}/deliverypallets/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Order
     * @name OrderGetNewPallet
     * @summary Returns a body of new delivery pallet for sales order. Does not save.
     * @request GET:/api/orders/{order_id}/newdeliverypallet
     * @response `200` `object` OK
     */
    orderGetNewPallet: (orderId: number, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/orders/${orderId}/newdeliverypallet`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Order
     * @name OrderGetNewSscc
     * @summary Returns autogenerated SSCC-code for pallet
     * @request GET:/api/orders/deliverypallet/new_sscc
     * @response `200` `object` OK
     */
    orderGetNewSscc: (params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/orders/deliverypallet/new_sscc`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Order
     * @name OrderUpdateOrderDeliveryPallet
     * @summary Updates delivery pallet for salesorder.
     * @request PUT:/api/orders/{order_id}/deliverypallet
     * @response `200` `object` OK
     */
    orderUpdateOrderDeliveryPallet: (
      orderId: number,
      pallet: LemonRestModelsProxyOrderDeliveryPallet,
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/orders/${orderId}/deliverypallet`,
        method: "PUT",
        body: pallet,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Order
     * @name OrderCreateOrderDeliveryPallet
     * @summary Creates a new delivery pallet for salesorder.
     * @request POST:/api/orders/{order_id}/deliverypallet
     * @response `200` `object` OK
     */
    orderCreateOrderDeliveryPallet: (
      orderId: number,
      pallet: LemonRestModelsProxyOrderDeliveryPallet,
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/orders/${orderId}/deliverypallet`,
        method: "POST",
        body: pallet,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Order
     * @name OrderDeletePallet
     * @summary Deletes delivery pallet from sales order.
     * @request DELETE:/api/orders/{order_id}/deliverypallet/{pallet_id}
     * @response `200` `object` OK
     */
    orderDeletePallet: (orderId: number, palletId: number, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/orders/${orderId}/deliverypallet/${palletId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Order
     * @name OrderCreateOrderDeliveryPalletRow
     * @summary Creates a new delivery pallet row for salesorder.
     * @request POST:/api/orders/{order_id}/deliverypalletrow
     * @response `200` `object` OK
     */
    orderCreateOrderDeliveryPalletRow: (
      orderId: number,
      row: LemonRestModelsProxyOrderDeliveryPalletRow,
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/orders/${orderId}/deliverypalletrow`,
        method: "POST",
        body: row,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Order
     * @name OrderDeletePalletRow
     * @summary Delete pallet row.
     * @request DELETE:/api/orders/{order_id}/deliverypalletrow/{pallet_row_id}
     * @response `200` `object` OK
     */
    orderDeletePalletRow: (orderId: number, palletRowId: number, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/orders/${orderId}/deliverypalletrow/${palletRowId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),
  };
  persons = {
    /**
     * No description
     *
     * @tags Person
     * @name PersonGetPersons
     * @summary Get persons
     * @request GET:/api/persons
     * @response `200` `object` OK
     */
    personGetPersons: (
      query?: {
        /** @format int32 */
        "filter.role"?: number;
        "filter.costcenter"?: string;
        "filter.hide_models"?: boolean;
        "filter.object_ids"?: number[];
        /**
         * Page number. If not provided, using default value of 1
         * @format int32
         */
        "filter.page"?: number;
        /**
         * Page size. If not provided, using default value of 10
         * @format int32
         */
        "filter.page_size"?: number;
        "filter.search"?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/persons`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Person
     * @name PersonGetCurrentPerson
     * @summary Get login person
     * @request GET:/api/persons/current
     * @response `200` `object` OK
     */
    personGetCurrentPerson: (params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/persons/current`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Person
     * @name PersonGetPersonDefaultStock
     * @summary Get person default stock number
     * @request GET:/api/persons/{person_id}/stock
     * @response `200` `object` OK
     */
    personGetPersonDefaultStock: (personId: number, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/persons/${personId}/stock`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Person
     * @name PersonList
     * @summary Get a list of Person jobs
     * @request GET:/api/persons/jobs
     * @response `200` `object` OK
     */
    personList: (
      query?: {
        /** @format int32 */
        "filter.person_number"?: number;
        "filter.states"?: number[];
        "filter.job_types"?: number[];
        /** @format int32 */
        "filter.company_location"?: number;
        /** @format int32 */
        "filter.department"?: number;
        "filter.costcenter"?: string;
        /** @format int32 */
        "filter.project_type"?: number;
        /** @format date-time */
        "filter.after"?: string;
        /** @format date-time */
        "filter.before"?: string;
        "filter.object_ids"?: number[];
        /**
         * Page number. If not provided, using default value of 1
         * @format int32
         */
        "filter.page"?: number;
        /**
         * Page size. If not provided, using default value of 10
         * @format int32
         */
        "filter.page_size"?: number;
        "filter.search"?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/persons/jobs`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Person
     * @name PersonStartPersonJob
     * @summary Start person job
     * @request POST:/api/persons/jobs/{id}/{type}/start
     * @response `200` `object` OK
     */
    personStartPersonJob: (
      id: number,
      type: number,
      proxyPersonJob: LemonRestModelsProxyJob,
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/persons/jobs/${id}/${type}/start`,
        method: "POST",
        body: proxyPersonJob,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Person
     * @name PersonPausePersonJob
     * @summary Pause person job
     * @request POST:/api/persons/jobs/{id}/{type}/pause
     * @response `200` `object` OK
     */
    personPausePersonJob: (
      id: number,
      type: number,
      proxyPersonJob: LemonRestModelsProxyJob,
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/persons/jobs/${id}/${type}/pause`,
        method: "POST",
        body: proxyPersonJob,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Person
     * @name PersonDonePersonJob
     * @summary Done person job
     * @request POST:/api/persons/jobs/{id}/{type}/done
     * @response `200` `object` OK
     */
    personDonePersonJob: (
      id: number,
      type: number,
      proxyPersonJob: LemonRestModelsProxyJob,
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/persons/jobs/${id}/${type}/done`,
        method: "POST",
        body: proxyPersonJob,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Person
     * @name PersonAssignPersonJob
     * @summary Assign person job to worker
     * @request PUT:/api/persons/jobs/{id}/{type}/assign/{person_number}
     * @response `200` `object` OK
     */
    personAssignPersonJob: (id: number, type: number, personNumber: number, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/persons/jobs/${id}/${type}/assign/${personNumber}`,
        method: "PUT",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Person
     * @name PersonRemovePersonFromJob
     * @summary Remove person from job
     * @request DELETE:/api/persons/jobs/{id}/{type}/remove/{person_number}
     * @response `200` `object` OK
     */
    personRemovePersonFromJob: (id: number, type: number, personNumber: number, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/persons/jobs/${id}/${type}/remove/${personNumber}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Person
     * @name PersonCreateWorkday
     * @summary Create workday from job
     * @request POST:/api/persons/jobs/workday
     * @response `200` `object` OK
     */
    personCreateWorkday: (proxy: LemonRestModelsProxyJob, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/persons/jobs/workday`,
        method: "POST",
        body: proxy,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Person
     * @name PersonCreateDaySummary
     * @summary Create day summary from jobs
     * @request POST:/api/persons/jobs/daysummary
     * @response `200` `object` OK
     */
    personCreateDaySummary: (
      query: {
        /**
         * Person number
         * @format int32
         */
        person_number: number;
      },
      proxyList: LemonRestModelsProxyJob[],
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/persons/jobs/daysummary`,
        method: "POST",
        query: query,
        body: proxyList,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Person
     * @name PersonCreateWorkHourFromPersonJob
     * @summary Create workhour from job
     * @request POST:/api/persons/jobs/workhours
     * @response `200` `object` OK
     */
    personCreateWorkHourFromPersonJob: (proxy: LemonRestModelsProxyJob, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/persons/jobs/workhours`,
        method: "POST",
        body: proxy,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Person
     * @name PersonGetWorkHours
     * @summary Get workhours
     * @request GET:/api/persons/workhours
     * @response `200` `object` OK
     */
    personGetWorkHours: (
      query?: {
        /** @format date-time */
        "filter.date_before"?: string;
        /** @format date-time */
        "filter.date_after"?: string;
        "filter.states"?: number[];
        "filter.object_ids"?: number[];
        /**
         * Page number. If not provided, using default value of 1
         * @format int32
         */
        "filter.page"?: number;
        /**
         * Page size. If not provided, using default value of 10
         * @format int32
         */
        "filter.page_size"?: number;
        "filter.search"?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/persons/workhours`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Person
     * @name PersonUpdateWorkhour
     * @summary Update workhour
     * @request PUT:/api/persons/workhours
     * @response `200` `object` OK
     */
    personUpdateWorkhour: (proxy: LemonRestModelsProxyWorkHour, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/persons/workhours`,
        method: "PUT",
        body: proxy,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Person
     * @name PersonCreateWorkhour
     * @summary Create workhour
     * @request POST:/api/persons/workhours
     * @response `200` `object` OK
     */
    personCreateWorkhour: (proxy: LemonRestModelsProxyWorkHour, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/persons/workhours`,
        method: "POST",
        body: proxy,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Person
     * @name PersonGet
     * @summary Get workhour
     * @request GET:/api/persons/workhours/{id}
     * @response `200` `object` OK
     */
    personGet: (id: number, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/persons/workhours/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Person
     * @name PersonGetMaterials
     * @summary Get workhour materials
     * @request GET:/api/persons/workhours/{id}/materials
     * @response `200` `object` OK
     */
    personGetMaterials: (
      id: number,
      query?: {
        /** @format int32 */
        "filter.product_type"?: number;
        "filter.object_ids"?: number[];
        /**
         * Page number. If not provided, using default value of 1
         * @format int32
         */
        "filter.page"?: number;
        /**
         * Page size. If not provided, using default value of 10
         * @format int32
         */
        "filter.page_size"?: number;
        "filter.search"?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/persons/workhours/${id}/materials`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Person
     * @name PersonUpdateWorkHourMaterial
     * @summary Update workhour material
     * @request PUT:/api/persons/workhours/{id}/materials
     * @response `200` `object` OK
     */
    personUpdateWorkHourMaterial: (
      id: number,
      proxyMaterial: LemonRestModelsProxyWorkHourMaterial,
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/persons/workhours/${id}/materials`,
        method: "PUT",
        body: proxyMaterial,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Person
     * @name PersonCreateWorkHourMaterial
     * @summary Create workhour material
     * @request POST:/api/persons/workhours/{id}/materials
     * @response `200` `object` OK
     */
    personCreateWorkHourMaterial: (
      id: number,
      proxyMaterial: LemonRestModelsProxyWorkHourMaterial,
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/persons/workhours/${id}/materials`,
        method: "POST",
        body: proxyMaterial,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Person
     * @name PersonDeleteWorkhourMaterial
     * @summary Delete workhour material
     * @request DELETE:/api/persons/workhours/{workhour_id}/materials/{material_id}
     * @response `200` `object` OK
     */
    personDeleteWorkhourMaterial: (workhourId: number, materialId: number, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/persons/workhours/${workhourId}/materials/${materialId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Person
     * @name PersonAddWorkHourAdditionals
     * @summary Add workhour additions
     * @request POST:/api/persons/workhours/{workhour_id}/additions
     * @response `200` `object` OK
     */
    personAddWorkHourAdditionals: (
      workhourId: number,
      additions: LemonRestModelsProxyWorkHourAddition[],
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/persons/workhours/${workhourId}/additions`,
        method: "POST",
        body: additions,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Person
     * @name PersonGetPersonWorkshiftAdditionals
     * @summary Get person workshift additions
     * @request GET:/api/persons/{person_number}/workhours/additions
     * @response `200` `object` OK
     */
    personGetPersonWorkshiftAdditionals: (personNumber: number, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/persons/${personNumber}/workhours/additions`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Person
     * @name PersonGetWorkTimes
     * @summary Get worktimes
     * @request GET:/api/persons/worktimes
     * @response `200` `object` OK
     */
    personGetWorkTimes: (
      query?: {
        /** @format date-time */
        "filter.date_before"?: string;
        /** @format date-time */
        "filter.date_after"?: string;
        "filter.states"?: number[];
        "filter.object_ids"?: number[];
        /**
         * Page number. If not provided, using default value of 1
         * @format int32
         */
        "filter.page"?: number;
        /**
         * Page size. If not provided, using default value of 10
         * @format int32
         */
        "filter.page_size"?: number;
        "filter.search"?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/persons/worktimes`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Person
     * @name PersonUpdateWorktime
     * @summary Update Worktime
     * @request PUT:/api/persons/worktimes
     * @response `200` `object` OK
     */
    personUpdateWorktime: (proxy: LemonRestModelsProxyWorkTime, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/persons/worktimes`,
        method: "PUT",
        body: proxy,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Person
     * @name PersonCreateWorktime
     * @summary Create Worktime
     * @request POST:/api/persons/worktimes
     * @response `200` `object` OK
     */
    personCreateWorktime: (proxy: LemonRestModelsProxyWorkTime, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/persons/worktimes`,
        method: "POST",
        body: proxy,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Person
     * @name PersonGetWorkTimeMaterials
     * @summary Get worktime materials
     * @request GET:/api/persons/worktimes/{id}/materials
     * @response `200` `object` OK
     */
    personGetWorkTimeMaterials: (
      id: number,
      query?: {
        /** @format int32 */
        "filter.product_type"?: number;
        "filter.object_ids"?: number[];
        /**
         * Page number. If not provided, using default value of 1
         * @format int32
         */
        "filter.page"?: number;
        /**
         * Page size. If not provided, using default value of 10
         * @format int32
         */
        "filter.page_size"?: number;
        "filter.search"?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/persons/worktimes/${id}/materials`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Person
     * @name PersonUpdateWorkTimeMaterial
     * @summary Update worktime material
     * @request PUT:/api/persons/worktimes/{id}/materials
     * @response `200` `object` OK
     */
    personUpdateWorkTimeMaterial: (
      id: number,
      proxyMaterial: LemonRestModelsProxyWorkTimeMaterial,
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/persons/worktimes/${id}/materials`,
        method: "PUT",
        body: proxyMaterial,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Person
     * @name PersonCreateWorkTimeMaterial
     * @summary Create worktime material
     * @request POST:/api/persons/worktimes/{id}/materials
     * @response `200` `object` OK
     */
    personCreateWorkTimeMaterial: (
      id: number,
      proxyMaterial: LemonRestModelsProxyWorkTimeMaterial,
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/persons/worktimes/${id}/materials`,
        method: "POST",
        body: proxyMaterial,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Person
     * @name PersonDeleteWorkTimeMaterial
     * @summary Delete worktime material
     * @request DELETE:/api/persons/worktimes/{worktime_id}/materials/{material_id}
     * @response `200` `object` OK
     */
    personDeleteWorkTimeMaterial: (worktimeId: number, materialId: number, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/persons/worktimes/${worktimeId}/materials/${materialId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Person
     * @name PersonGetWorkTimeRegulation
     * @summary Get worktime regulation
     * @request GET:/api/persons/worktimes/regulations/{regulation_id}
     * @response `200` `object` OK
     */
    personGetWorkTimeRegulation: (regulationId: number, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/persons/worktimes/regulations/${regulationId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Person
     * @name PersonGetWorkTimeAdditions
     * @summary Get worktime additions
     * @request GET:/api/persons/worktimes/additions/{person_number}/{formofsalary_number}/{regulation_id}
     * @response `200` `object` OK
     */
    personGetWorkTimeAdditions: (
      personNumber: number,
      formofsalaryNumber: number,
      regulationId: number,
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/persons/worktimes/additions/${personNumber}/${formofsalaryNumber}/${regulationId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Person
     * @name PersonAddWorkTimeAdditionals
     * @summary Add worktime additions
     * @request PUT:/api/persons/worktimes/{worktime_id}/additions
     * @response `200` `object` OK
     */
    personAddWorkTimeAdditionals: (
      worktimeId: number,
      proxyAdditions: LemonRestModelsProxyWorkTimeAddition[],
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/persons/worktimes/${worktimeId}/additions`,
        method: "PUT",
        body: proxyAdditions,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Person
     * @name PersonGetWorktimeStartDate
     * @summary Get next startdate for worktime
     * @request GET:/api/persons/worktimes/startdate/{person_number}
     * @response `200` `object` OK
     */
    personGetWorktimeStartDate: (personNumber: number, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/persons/worktimes/startdate/${personNumber}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Person
     * @name PersonGetPersonAbsenceList
     * @summary Get persons absence list
     * @request GET:/api/persons/absences
     * @response `200` `object` OK
     */
    personGetPersonAbsenceList: (
      query?: {
        /** @format int32 */
        "filter.person_number"?: number;
        "filter.states"?: number[];
        /** @format date-time */
        "filter.after"?: string;
        /** @format date-time */
        "filter.before"?: string;
        "filter.object_ids"?: number[];
        /**
         * Page number. If not provided, using default value of 1
         * @format int32
         */
        "filter.page"?: number;
        /**
         * Page size. If not provided, using default value of 10
         * @format int32
         */
        "filter.page_size"?: number;
        "filter.search"?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/persons/absences`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Person
     * @name PersonCreatePersonWithBasicInfo
     * @summary Create new person with basic information
     * @request POST:/api/persons/basic
     * @response `200` `object` OK
     */
    personCreatePersonWithBasicInfo: (person: LemonRestModelsProxyPersonLogin, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/persons/basic`,
        method: "POST",
        body: person,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  pricelists = {
    /**
     * No description
     *
     * @tags Pricelist
     * @name PricelistList
     * @summary Get a list of Pricelists
     * @request GET:/api/pricelists
     * @response `200` `object` OK
     */
    pricelistList: (
      query?: {
        "filter.name"?: string;
        "filter.object_ids"?: number[];
        /**
         * Page number. If not provided, using default value of 1
         * @format int32
         */
        "filter.page"?: number;
        /**
         * Page size. If not provided, using default value of 10
         * @format int32
         */
        "filter.page_size"?: number;
        "filter.search"?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/pricelists`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Pricelist
     * @name PricelistUpdatePricelist
     * @summary Update pricelist
     * @request PUT:/api/pricelists
     * @response `200` `object` OK
     */
    pricelistUpdatePricelist: (proxyPricelist: LemonRestModelsProxyPricelist, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/pricelists`,
        method: "PUT",
        body: proxyPricelist,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Pricelist
     * @name PricelistCreateNewPricelist
     * @summary Create new pricelist
     * @request POST:/api/pricelists
     * @response `200` `object` OK
     */
    pricelistCreateNewPricelist: (proxyPricelist: LemonRestModelsProxyPricelist, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/pricelists`,
        method: "POST",
        body: proxyPricelist,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Pricelist
     * @name PricelistGetProductPrice
     * @summary Get product price
     * @request GET:/api/pricelists/{id}/{product_code}
     * @response `200` `object` OK
     */
    pricelistGetProductPrice: (
      id: number,
      productCode: string,
      query: {
        /** Get sales or purchase price */
        get_purchase_price: boolean;
        /**
         * Date when pricelist should be valid
         * @format date-time
         */
        "filter.list_valid_date": string;
        /** Product unit */
        "filter.product_unit"?: string;
        /**
         * Customer number
         * @format int32
         */
        "filter.cust_no"?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/pricelists/${id}/${productCode}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Pricelist
     * @name PricelistGet
     * @summary Get single pricelist
     * @request GET:/api/pricelists/{id}
     * @response `200` `object` OK
     */
    pricelistGet: (id: number, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/pricelists/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Pricelist
     * @name PricelistDeletePricelist
     * @summary Delete pricelist
     * @request DELETE:/api/pricelists/{id}
     * @response `200` `object` OK
     */
    pricelistDeletePricelist: (id: number, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/pricelists/${id}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Pricelist
     * @name PricelistCreateNewPricelistCustomer
     * @summary Add new customer to pricelist
     * @request POST:/api/pricelists/{id}/customers
     * @response `200` `object` OK
     */
    pricelistCreateNewPricelistCustomer: (
      id: number,
      proxyCustomer: LemonRestModelsProxyPricelistCustomer,
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/pricelists/${id}/customers`,
        method: "POST",
        body: proxyCustomer,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Pricelist
     * @name PricelistCreateNewPricelistProduct
     * @summary Add new product to pricelist
     * @request POST:/api/pricelists/{id}/products
     * @response `200` `object` OK
     */
    pricelistCreateNewPricelistProduct: (
      id: number,
      proxyProduct: LemonRestModelsProxyPricelistProduct,
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/pricelists/${id}/products`,
        method: "POST",
        body: proxyProduct,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Pricelist
     * @name PricelistCreateNewPricelistProductGroup
     * @summary Add new product group to pricelist
     * @request POST:/api/pricelists/{id}/product_groups
     * @response `200` `object` OK
     */
    pricelistCreateNewPricelistProductGroup: (
      id: number,
      proxyProductGroup: LemonRestModelsProxyPriceListProductGroup,
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/pricelists/${id}/product_groups`,
        method: "POST",
        body: proxyProductGroup,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Pricelist
     * @name PricelistCreateNewPricelistCustomerGroupDiscount
     * @summary Add new customer group discount for pricelist
     * @request POST:/api/pricelists/{id}/cust_group_discounts
     * @response `200` `object` OK
     */
    pricelistCreateNewPricelistCustomerGroupDiscount: (
      id: number,
      proxyCustGroupDiscount: LemonRestModelsProxyPricelistCustomerGroupDiscount,
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/pricelists/${id}/cust_group_discounts`,
        method: "POST",
        body: proxyCustGroupDiscount,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Pricelist
     * @name PricelistCreateNewPricelistSupplierDiscount
     * @summary Add new supplier discount to pricelist
     * @request POST:/api/pricelists/{id}/supplier_discounts
     * @response `200` `object` OK
     */
    pricelistCreateNewPricelistSupplierDiscount: (
      id: number,
      proxySupplierDiscount: LemonRestModelsProxyPricelistSupplierDiscount,
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/pricelists/${id}/supplier_discounts`,
        method: "POST",
        body: proxySupplierDiscount,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Pricelist
     * @name PricelistCreateNewPricelistProject
     * @summary Add new project to pricelist
     * @request POST:/api/pricelists/{id}/projects
     * @response `200` `object` OK
     */
    pricelistCreateNewPricelistProject: (
      id: number,
      proxyProject: LemonRestModelsProxyPricelistProject,
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/pricelists/${id}/projects`,
        method: "POST",
        body: proxyProject,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Pricelist
     * @name PricelistDeletePricelistCustomer
     * @summary Delete customer from pricelist
     * @request DELETE:/api/pricelists/{id}/customers/{customer_id}
     * @response `200` `object` OK
     */
    pricelistDeletePricelistCustomer: (id: number, customerId: number, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/pricelists/${id}/customers/${customerId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Pricelist
     * @name PricelistDeletePricelistProduct
     * @summary Delete product from pricelist
     * @request DELETE:/api/pricelists/{id}/products/{product_id}
     * @response `200` `object` OK
     */
    pricelistDeletePricelistProduct: (id: number, productId: number, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/pricelists/${id}/products/${productId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Pricelist
     * @name PricelistDeletePricelistProductGroup
     * @summary Delete product group from pricelist
     * @request DELETE:/api/pricelists/{id}/product_groups/{group_id}
     * @response `200` `object` OK
     */
    pricelistDeletePricelistProductGroup: (id: number, groupId: number, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/pricelists/${id}/product_groups/${groupId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Pricelist
     * @name PricelistDeletePricelistCustomerGroupDiscount
     * @summary Delete customer discount group from pricelist
     * @request DELETE:/api/pricelists/{id}/cust_group_discounts/{group_id}
     * @response `200` `object` OK
     */
    pricelistDeletePricelistCustomerGroupDiscount: (id: number, groupId: number, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/pricelists/${id}/cust_group_discounts/${groupId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Pricelist
     * @name PricelistDeletePricelistSupplierDiscount
     * @summary Delete supplier discount from pricelist
     * @request DELETE:/api/pricelists/{id}/supplier_discounts/{discount_id}
     * @response `200` `object` OK
     */
    pricelistDeletePricelistSupplierDiscount: (id: number, discountId: number, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/pricelists/${id}/supplier_discounts/${discountId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Pricelist
     * @name PricelistDeletePricelistProject
     * @summary Delete project from pricelist
     * @request DELETE:/api/pricelists/{id}/projects/{project_id}
     * @response `200` `object` OK
     */
    pricelistDeletePricelistProject: (id: number, projectId: number, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/pricelists/${id}/projects/${projectId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),
  };
  products = {
    /**
     * No description
     *
     * @tags Product
     * @name ProductList
     * @summary Get a list of products
     * @request GET:/api/products
     * @response `200` `object` OK
     */
    productList: (
      query?: {
        "filter.name"?: string;
        "filter.sku"?: string[];
        /** @format date-time */
        "filter.modified_before"?: string;
        /** @format date-time */
        "filter.modified_after"?: string;
        /** @format int32 */
        "filter.attribute_id"?: number;
        "filter.extra_name"?: string;
        /** @format int32 */
        "filter.category_id"?: number;
        /** @format int32 */
        "filter.group_code"?: number;
        "filter.show_models"?: boolean;
        "filter.show_nonactive"?: boolean;
        "filter.shelf"?: string;
        /** @format int32 */
        "filter.shelf_stock"?: number;
        /** @format int32 */
        "filter.stock"?: number;
        "filter.sort_by_sku"?: boolean;
        "filter.search_words"?: string[];
        "filter.object_ids"?: number[];
        /**
         * Page number. If not provided, using default value of 1
         * @format int32
         */
        "filter.page"?: number;
        /**
         * Page size. If not provided, using default value of 10
         * @format int32
         */
        "filter.page_size"?: number;
        "filter.search"?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/products`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Product
     * @name ProductUpdate
     * @summary Update product
     * @request PUT:/api/products
     * @response `200` `object` OK
     */
    productUpdate: (product: LemonRestModelsProxyProduct, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/products`,
        method: "PUT",
        body: product,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Product
     * @name ProductCreate
     * @summary Create a product
     * @request POST:/api/products
     * @response `200` `object` OK
     */
    productCreate: (product: LemonRestModelsProxyProduct, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/products`,
        method: "POST",
        body: product,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Product
     * @name ProductGet
     * @summary Get product
     * @request GET:/api/products/{id}
     * @response `200` `object` OK
     */
    productGet: (id: number, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/products/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Product
     * @name ProductDelete
     * @summary Delete product
     * @request DELETE:/api/products/{id}
     * @response `200` `object` OK
     */
    productDelete: (id: number, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/products/${id}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Product
     * @name ProductPatch
     * @summary Patch product
     * @request PATCH:/api/products/{id}
     * @response `200` `object` OK
     */
    productPatch: (
      id: number,
      productPatch: MicrosoftAspNetCoreJsonPatchOperationsOperationLemonRestModelsProxyProduct[],
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/products/${id}`,
        method: "PATCH",
        body: productPatch,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Product
     * @name ProductCreateLink
     * @summary Create a product link
     * @request POST:/api/products/{id}/links
     * @response `200` `object` OK
     */
    productCreateLink: (id: number, link: LemonRestModelsProxyLink, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/products/${id}/links`,
        method: "POST",
        body: link,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Product
     * @name ProductListGroups
     * @summary Get a list of Product Groups
     * @request GET:/api/products/groups
     * @response `200` `object` OK
     */
    productListGroups: (
      query?: {
        "filter.name"?: string;
        "filter.web_only"?: boolean;
        /** @format int32 */
        "filter.parent_id"?: number;
        "filter.object_ids"?: number[];
        /**
         * Page number. If not provided, using default value of 1
         * @format int32
         */
        "filter.page"?: number;
        /**
         * Page size. If not provided, using default value of 10
         * @format int32
         */
        "filter.page_size"?: number;
        "filter.search"?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/products/groups`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Product
     * @name ProductListCategories
     * @summary Get a list of Product Categories
     * @request GET:/api/products/categories
     * @response `200` `object` OK
     */
    productListCategories: (
      query?: {
        "filter.name"?: string;
        "filter.web_only"?: boolean;
        /** @format int32 */
        "filter.parent_id"?: number;
        "filter.object_ids"?: number[];
        /**
         * Page number. If not provided, using default value of 1
         * @format int32
         */
        "filter.page"?: number;
        /**
         * Page size. If not provided, using default value of 10
         * @format int32
         */
        "filter.page_size"?: number;
        "filter.search"?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/products/categories`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Product
     * @name ProductGetProductSerialNumbers
     * @summary Get a list of Product Serial numbers
     * @request GET:/api/products/{product_code}/serials
     * @response `200` `object` OK
     */
    productGetProductSerialNumbers: (
      productCode: string,
      query?: {
        "filter.serial_code"?: string;
        /** @format int32 */
        "filter.stock"?: number;
        "filter.in_stock"?: boolean;
        "filter.object_ids"?: number[];
        /**
         * Page number. If not provided, using default value of 1
         * @format int32
         */
        "filter.page"?: number;
        /**
         * Page size. If not provided, using default value of 10
         * @format int32
         */
        "filter.page_size"?: number;
        "filter.search"?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/products/${productCode}/serials`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Product
     * @name ProductGetProductBatchs
     * @summary Get a list of Product batch numbers
     * @request GET:/api/products/{product_code}/batchs
     * @response `200` `object` OK
     */
    productGetProductBatchs: (
      productCode: string,
      query?: {
        "filter.supplier_code"?: string;
        /** @format int32 */
        "filter.stock"?: number;
        "filter.in_stock"?: boolean;
        "filter.shelf"?: string;
        "filter.object_ids"?: number[];
        /**
         * Page number. If not provided, using default value of 1
         * @format int32
         */
        "filter.page"?: number;
        /**
         * Page size. If not provided, using default value of 10
         * @format int32
         */
        "filter.page_size"?: number;
        "filter.search"?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/products/${productCode}/batchs`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Product
     * @name ProductGetProductStocks
     * @summary Get a list of Product stocks
     * @request GET:/api/products/{id}/stocks
     * @response `200` `object` OK
     */
    productGetProductStocks: (id: number, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/products/${id}/stocks`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Product
     * @name ProductCreateProductStocks
     * @summary Create product stock for existing product
     * @request POST:/api/products/{id}/stocks
     * @response `200` `object` OK
     */
    productCreateProductStocks: (id: number, stock: LemonRestModelsProxyProductStock, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/products/${id}/stocks`,
        method: "POST",
        body: stock,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Product
     * @name ProductGetProductBaseList
     * @summary Get paged list of all products with basic information
     * @request GET:/api/products/base
     * @response `200` `object` OK
     */
    productGetProductBaseList: (
      query?: {
        "filter.name"?: string;
        "filter.sku"?: string[];
        /** @format date-time */
        "filter.modified_before"?: string;
        /** @format date-time */
        "filter.modified_after"?: string;
        /** @format int32 */
        "filter.attribute_id"?: number;
        "filter.extra_name"?: string;
        /** @format int32 */
        "filter.category_id"?: number;
        /** @format int32 */
        "filter.group_code"?: number;
        "filter.show_models"?: boolean;
        "filter.show_nonactive"?: boolean;
        "filter.shelf"?: string;
        /** @format int32 */
        "filter.shelf_stock"?: number;
        /** @format int32 */
        "filter.stock"?: number;
        "filter.sort_by_sku"?: boolean;
        "filter.search_words"?: string[];
        "filter.object_ids"?: number[];
        /**
         * Page number. If not provided, using default value of 1
         * @format int32
         */
        "filter.page"?: number;
        /**
         * Page size. If not provided, using default value of 10
         * @format int32
         */
        "filter.page_size"?: number;
        "filter.search"?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/products/base`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Product
     * @name ProductGetProductPurchasePrice
     * @summary Get product purchase price
     * @request GET:/api/products/{id}/purchase_price/{supplier}/{stock}
     * @response `200` `object` OK
     */
    productGetProductPurchasePrice: (id: number, supplier: number, stock: number, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/products/${id}/purchase_price/${supplier}/${stock}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Product
     * @name ProductDeleteUnit
     * @summary Delete product units
     * @request DELETE:/api/products/{id}/units/{unit_id}
     * @response `200` `object` OK
     */
    productDeleteUnit: (id: number, unitId: number, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/products/${id}/units/${unitId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Product
     * @name ProductDeleteStock
     * @summary Delete product stocks
     * @request DELETE:/api/products/{id}/stocks/{stock_id}
     * @response `200` `object` OK
     */
    productDeleteStock: (id: number, stockId: number, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/products/${id}/stocks/${stockId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Product
     * @name ProductDeleteAttributeData
     * @summary Delete product attribute data
     * @request DELETE:/api/products/{id}/attribute_data/{attribute_data_id}
     * @response `200` `object` OK
     */
    productDeleteAttributeData: (id: number, attributeDataId: number, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/products/${id}/attribute_data/${attributeDataId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Product
     * @name ProductDeleteSuppliers
     * @summary Delete product suppliers
     * @request DELETE:/api/products/{id}/suppliers/{supplier_id}
     * @response `200` `object` OK
     */
    productDeleteSuppliers: (id: number, supplierId: number, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/products/${id}/suppliers/${supplierId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Product
     * @name ProductDeleteLanguage
     * @summary Delete product language
     * @request DELETE:/api/products/{id}/languages/{language_id}
     * @response `200` `object` OK
     */
    productDeleteLanguage: (id: number, languageId: number, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/products/${id}/languages/${languageId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Product
     * @name ProductDeleteLink
     * @summary Delete product link
     * @request DELETE:/api/products/{id}/links/{link_id}
     * @response `200` `object` OK
     */
    productDeleteLink: (id: number, linkId: number, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/products/${id}/links/${linkId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Product
     * @name ProductGetProductsSaldos
     * @summary Lists products with saldo changes based on datetime filter
     * @request GET:/api/products/stocks/saldos/changed
     * @response `200` `object` OK
     */
    productGetProductsSaldos: (
      query: {
        /**
         * If not defined, using default value 1
         * @format int32
         */
        "filter.page"?: number;
        /**
         * If not defined, using default value 10
         * @format int32
         */
        "filter.page_size"?: number;
        /**
         * Timestamp after product saldo should have changed
         * @format date-time
         */
        "filter.updated_after": string;
      },
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/products/stocks/saldos/changed`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Product
     * @name ProductGetProductStructureAll
     * @summary Get complete product structure
     * @request GET:/api/products/{product_code}/{work_number}/all_levels
     * @response `200` `object` OK
     */
    productGetProductStructureAll: (productCode: string, workNumber: number, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/products/${productCode}/${workNumber}/all_levels`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Product
     * @name ProductGetProductStructureLevel
     * @summary Get specified product structure level
     * @request GET:/api/products/{product_code}/{work_number}/{level}
     * @response `200` `object` OK
     */
    productGetProductStructureLevel: (
      productCode: string,
      workNumber: number,
      level: number,
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/products/${productCode}/${workNumber}/${level}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Product
     * @name ProductCreateProductUnit
     * @summary Create product unit for existing product
     * @request POST:/api/products/{id}/units
     * @response `200` `object` OK
     */
    productCreateProductUnit: (id: number, unit: LemonRestModelsProxyProductUnit, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/products/${id}/units`,
        method: "POST",
        body: unit,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Product
     * @name ProductCreateProductSupplier
     * @summary Create product supplier for existing product
     * @request POST:/api/products/{id}/suppliers
     * @response `200` `object` OK
     */
    productCreateProductSupplier: (
      id: number,
      supplier: LemonRestModelsProxyProductSupplier,
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/products/${id}/suppliers`,
        method: "POST",
        body: supplier,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Product
     * @name ProductCreateStockTransaction
     * @summary Create stock transaction
     * @request POST:/api/products/{id}/stocktransaction
     * @response `200` `object` OK
     */
    productCreateStockTransaction: (
      id: number,
      proxy: LemonRestModelsProxyStockTransaction,
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/products/${id}/stocktransaction`,
        method: "POST",
        body: proxy,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Product
     * @name ProductCreateInTransaction
     * @summary Get body of inward stock transaction
     * @request GET:/api/products/{product_code}/{stock}/transactions/in
     * @response `200` `object` OK
     */
    productCreateInTransaction: (productCode: string, stock: number, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/products/${productCode}/${stock}/transactions/in`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Product
     * @name ProductCreateOutTransaction
     * @summary Get body of outward stock transaction
     * @request GET:/api/products/{product_code}/{stock}/transactions/out
     * @response `200` `object` OK
     */
    productCreateOutTransaction: (productCode: string, stock: number, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/products/${productCode}/${stock}/transactions/out`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Product
     * @name ProductCreateInventoryTransaction
     * @summary Get body of inventory stock transaction
     * @request GET:/api/products/{product_code}/{stock}/transactions/inventory
     * @response `200` `object` OK
     */
    productCreateInventoryTransaction: (productCode: string, stock: number, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/products/${productCode}/${stock}/transactions/inventory`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Product
     * @name ProductSaveTransaction
     * @summary Create new stock transaction
     * @request POST:/api/products/transactions
     * @response `200` `object` OK
     */
    productSaveTransaction: (proxyTransaction: LemonRestModelsProxyStockTransactionFull, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/products/transactions`,
        method: "POST",
        body: proxyTransaction,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  production = {
    /**
     * No description
     *
     * @tags Production
     * @name ProductionGetChangedMainWorkStages
     * @summary Get list of changed workstages
     * @request GET:/api/production/main_ws/changed
     * @response `200` `object` OK
     */
    productionGetChangedMainWorkStages: (
      query: {
        /** @format date-time */
        "filter.updated_after": string;
        /** @format date-time */
        "filter.updated_before": string;
        /** @format int32 */
        "filter.state"?: number;
        /**
         * If not defined, using default value of 1
         * @format int32
         */
        "filter.page"?: number;
        /**
         * If not defined, using default value of 10
         * @format int32
         */
        "filter.page_size"?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/production/main_ws/changed`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Production
     * @name ProductionGetSubWorkStagesCanDo
     * @summary Get list of all or machine specific subwork stages that can be started
     * @request GET:/api/production/main_ws/sub_ws/available
     * @response `200` `object` OK
     */
    productionGetSubWorkStagesCanDo: (
      query?: {
        /** Optional machine code */
        machineCode?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/production/main_ws/sub_ws/available`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Production
     * @name ProductionGetSingleMainWorkStage
     * @summary Get single mainworkstage with subworkstage lists
     * @request GET:/api/production/main_ws/{id}
     * @response `200` `object` OK
     */
    productionGetSingleMainWorkStage: (id: number, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/production/main_ws/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
 * No description
 *
 * @tags Production
 * @name ProductionStartJob
 * @summary Start sub workstage.
Returns result =  0 OK.
         result = 1 Person has already started current workstage.
         result = 2 Person not found.
         result = 3 Person has started some other workstage, can't start another.
         result = 4 Person should end other jobs.
 * @request POST:/api/production/{work_number}/{person}/main_ws/sub_ws/{id}/start_job
 * @response `200` `object` OK
 */
    productionStartJob: (workNumber: number, person: number, id: number, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/production/${workNumber}/${person}/main_ws/sub_ws/${id}/start_job`,
        method: "POST",
        format: "json",
        ...params,
      }),

    /**
 * No description
 *
 * @tags Production
 * @name ProductionPauseJob
 * @summary Pause sub workstage
Returns result = true if pause job OK
 * @request POST:/api/production/{work_number}/{person}/main_ws/sub_ws/{id}/pause_job
 * @response `200` `object` OK
 */
    productionPauseJob: (
      workNumber: number,
      person: number,
      id: number,
      query: {
        /**
         * Datetime when work paused
         * @format date-time
         */
        pauseTime: string;
        /**
         * Hours done before pause
         * @format double
         */
        hoursDone: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/production/${workNumber}/${person}/main_ws/sub_ws/${id}/pause_job`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
 * No description
 *
 * @tags Production
 * @name ProductionEndJob
 * @summary End job workstage.
Returns result = 1000 when all sub workstages done for workstage.
        result = 0000 when single sub workstage done, other sub workstages open for workstage.
        result = 0100 when single sub workstage done and created new purchaseorder for next subcontracting sub workstage.
 * @request POST:/api/production/{person}/main_ws/sub_ws/{id}/end_job
 * @response `200` `object` OK
 */
    productionEndJob: (
      person: number,
      id: number,
      postEndJobData: LemonRestModelsProxyProductionPostEndJob,
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/production/${person}/main_ws/sub_ws/${id}/end_job`,
        method: "POST",
        body: postEndJobData,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
 * No description
 *
 * @tags Production
 * @name ProductionBadProduction
 * @summary Report bad production for workstage
Returns result = true if report OK, false otherwise
 * @request POST:/api/production/{person}/main_ws/sub_ws/{id}/bad_production
 * @response `200` `object` OK
 */
    productionBadProduction: (
      person: number,
      id: number,
      query: {
        /**
         * Amount of bad items
         * @format int32
         */
        amount: number;
        /** Description of failure */
        description: string;
        /** Optional fail codelist id:s */
        fail_codes: number[];
      },
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/production/${person}/main_ws/sub_ws/${id}/bad_production`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Production
     * @name ProductionGetMachine
     * @summary Get single machine
     * @request GET:/api/production/machines/{code}
     * @response `200` `object` OK
     */
    productionGetMachine: (code: string, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/production/machines/${code}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Production
     * @name ProductionListMachines
     * @summary Get a list of machines
     * @request GET:/api/production/machines
     * @response `200` `object` OK
     */
    productionListMachines: (
      query?: {
        "filter.code"?: string;
        "filter.description"?: string;
        /** @format int32 */
        "filter.type"?: number;
        /** @format double */
        "filter.hour_price"?: number;
        /** @format double */
        "filter.capacity"?: number;
        "filter.is_disabled"?: boolean;
        "filter.object_ids"?: number[];
        /**
         * Page number. If not provided, using default value of 1
         * @format int32
         */
        "filter.page"?: number;
        /**
         * Page size. If not provided, using default value of 10
         * @format int32
         */
        "filter.page_size"?: number;
        "filter.search"?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/production/machines`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
  };
  projects = {
    /**
     * No description
     *
     * @tags Project
     * @name ProjectList
     * @summary Get a list of projects
     * @request GET:/api/projects
     * @response `200` `object` OK
     */
    projectList: (
      query?: {
        "filter.project_number"?: number[];
        /** @format int32 */
        "filter.project_type"?: number;
        /** @format int32 */
        "filter.project_state"?: number;
        /** @format int32 */
        "filter.customer_number"?: number;
        /** @format int32 */
        "filter.invoicing_customer_id"?: number;
        /** @format date-time */
        "filter.created_before"?: string;
        /** @format date-time */
        "filter.created_after"?: string;
        /** @format date-time */
        "filter.updated_before"?: string;
        /** @format date-time */
        "filter.updated_after"?: string;
        "filter.states"?: number[];
        /** @format int32 */
        "filter.contact_personnumber"?: number;
        "filter.show_models"?: boolean;
        "filter.object_ids"?: number[];
        /**
         * Page number. If not provided, using default value of 1
         * @format int32
         */
        "filter.page"?: number;
        /**
         * Page size. If not provided, using default value of 10
         * @format int32
         */
        "filter.page_size"?: number;
        "filter.search"?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/projects`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Project
     * @name ProjectUpdate
     * @summary Update project
     * @request PUT:/api/projects
     * @response `200` `object` OK
     */
    projectUpdate: (proxyProject: LemonRestModelsProxyProject, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/projects`,
        method: "PUT",
        body: proxyProject,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Project
     * @name ProjectCreate
     * @summary Create new project
     * @request POST:/api/projects
     * @response `200` `object` OK
     */
    projectCreate: (proxyProject: LemonRestModelsProxyProject, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/projects`,
        method: "POST",
        body: proxyProject,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Project
     * @name ProjectGet
     * @summary Get single project
     * @request GET:/api/projects/{projectNumber}
     * @response `200` `object` OK
     */
    projectGet: (projectNumber: number, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/projects/${projectNumber}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Project
     * @name ProjectCreatePhase
     * @summary Create new project phase
     * @request POST:/api/projects/{projectNumber}/phase
     * @response `200` `object` OK
     */
    projectCreatePhase: (
      projectNumber: number,
      proxyPhase: LemonRestModelsProxyProjectPhase,
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/projects/${projectNumber}/phase`,
        method: "POST",
        body: proxyPhase,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Project
     * @name ProjectDeletePhase
     * @summary Delete project phase
     * @request DELETE:/api/projects/{projectNumber}/phase
     * @response `200` `object` OK
     */
    projectDeletePhase: (
      projectNumber: number,
      proxyPhase: LemonRestModelsProxyProjectPhase,
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/projects/${projectNumber}/phase`,
        method: "DELETE",
        body: proxyPhase,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Project
     * @name ProjectCreatePhaseContact
     * @summary Create new project phase contact
     * @request POST:/api/projects/phase/contact
     * @response `200` `object` OK
     */
    projectCreatePhaseContact: (
      query: {
        /** @format int32 */
        projectPhaseId: number;
        /** @format int32 */
        personNumber: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/projects/phase/contact`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),
  };
  purchaseInvoice = {
    /**
     * No description
     *
     * @tags PurchaseInvoice
     * @name PurchaseInvoiceList
     * @summary Get a list of purchase invoices
     * @request GET:/api/purchase-invoice
     * @response `200` `object` OK
     */
    purchaseInvoiceList: (
      query?: {
        /** @format int32 */
        "filter.invoice_type"?: number;
        /** @format int32 */
        "filter.invoice_state"?: number;
        /** @format int32 */
        "filter.customer_number"?: number;
        "filter.description"?: string;
        /** @format date-time */
        "filter.created_before"?: string;
        /** @format date-time */
        "filter.created_after"?: string;
        /** @format date-time */
        "filter.updated_before"?: string;
        /** @format date-time */
        "filter.updated_after"?: string;
        "filter.object_ids"?: number[];
        /**
         * Page number. If not provided, using default value of 1
         * @format int32
         */
        "filter.page"?: number;
        /**
         * Page size. If not provided, using default value of 10
         * @format int32
         */
        "filter.page_size"?: number;
        "filter.search"?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/purchase-invoice`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags PurchaseInvoice
     * @name PurchaseInvoiceUpdate
     * @summary Update purchase invoice
     * @request PUT:/api/purchase-invoice
     * @response `200` `object` OK
     */
    purchaseInvoiceUpdate: (proxyInvoice: LemonRestModelsProxyPurchaseInvoice, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/purchase-invoice`,
        method: "PUT",
        body: proxyInvoice,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags PurchaseInvoice
     * @name PurchaseInvoiceCreate
     * @summary Create new purchase invoice
     * @request POST:/api/purchase-invoice
     * @response `200` `object` OK
     */
    purchaseInvoiceCreate: (proxyInvoice: LemonRestModelsProxyPurchaseInvoice, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/purchase-invoice`,
        method: "POST",
        body: proxyInvoice,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags PurchaseInvoice
     * @name PurchaseInvoiceGet
     * @summary Get single purchase invoice
     * @request GET:/api/purchase-invoice/{invoiceNumber}
     * @response `200` `object` OK
     */
    purchaseInvoiceGet: (invoiceNumber: number, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/purchase-invoice/${invoiceNumber}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags PurchaseInvoice
     * @name PurchaseInvoiceDelete
     * @summary Delete invoice
     * @request DELETE:/api/purchase-invoice/{invoiceNumber}
     * @response `200` `object` OK
     */
    purchaseInvoiceDelete: (invoiceNumber: number, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/purchase-invoice/${invoiceNumber}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags PurchaseInvoice
     * @name PurchaseInvoiceAddInvoiceRow
     * @summary Add new row to purchase invoice
     * @request POST:/api/purchase-invoice/{invoiceNumber}/row
     * @response `200` `object` OK
     */
    purchaseInvoiceAddInvoiceRow: (
      invoiceNumber: number,
      proxyRow: LemonRestModelsProxyPurchaseInvoiceRow,
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/purchase-invoice/${invoiceNumber}/row`,
        method: "POST",
        body: proxyRow,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags PurchaseInvoice
     * @name PurchaseInvoiceDeleteInvoiceRow
     * @summary Delete purchase invoice row
     * @request DELETE:/api/purchase-invoice/{invoiceNumber}/row
     * @response `200` `object` OK
     */
    purchaseInvoiceDeleteInvoiceRow: (
      invoiceNumber: string,
      proxyRow: LemonRestModelsProxyPurchaseInvoiceRow,
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/purchase-invoice/${invoiceNumber}/row`,
        method: "DELETE",
        body: proxyRow,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags PurchaseInvoice
     * @name PurchaseInvoiceAddInvoicePayment
     * @summary Add new payment to purchase invoice
     * @request POST:/api/purchase-invoice/{invoiceNumber}/payment
     * @response `200` `object` OK
     */
    purchaseInvoiceAddInvoicePayment: (
      invoiceNumber: number,
      proxyPayment: LemonRestModelsProxyPurchaseInvoicePayment,
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/purchase-invoice/${invoiceNumber}/payment`,
        method: "POST",
        body: proxyPayment,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags PurchaseInvoice
     * @name PurchaseInvoiceDeletePaymentRow
     * @summary Delete purchase invoice payment
     * @request DELETE:/api/purchase-invoice/{invoiceNumber}/payment
     * @response `200` `object` OK
     */
    purchaseInvoiceDeletePaymentRow: (
      invoiceNumber: string,
      proxyPayment: LemonRestModelsProxyPurchaseInvoicePayment,
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/purchase-invoice/${invoiceNumber}/payment`,
        method: "DELETE",
        body: proxyPayment,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags PurchaseInvoice
     * @name PurchaseInvoiceAddInvoiceCirculation
     * @summary Add new circulation to purchase invoice
     * @request POST:/api/purchase-invoice/{invoiceNumber}/circulation
     * @response `200` `object` OK
     */
    purchaseInvoiceAddInvoiceCirculation: (
      invoiceNumber: number,
      proxyCirculation: LemonRestModelsProxyPurchaseInvoiceCirculation,
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/purchase-invoice/${invoiceNumber}/circulation`,
        method: "POST",
        body: proxyCirculation,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags PurchaseInvoice
     * @name PurchaseInvoiceDeleteCirculation
     * @summary Delete purchase invoice circulation
     * @request DELETE:/api/purchase-invoice/{invoiceNumber}/circulation
     * @response `200` `object` OK
     */
    purchaseInvoiceDeleteCirculation: (
      invoiceNumber: string,
      proxyCirculation: LemonRestModelsProxyPurchaseInvoiceCirculation,
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/purchase-invoice/${invoiceNumber}/circulation`,
        method: "DELETE",
        body: proxyCirculation,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags PurchaseInvoice
     * @name PurchaseInvoiceGetInvoiceAttachments
     * @summary Get attachments of purchase invoice based on id or number
     * @request GET:/api/purchase-invoice/attachments
     * @response `200` `object` OK
     */
    purchaseInvoiceGetInvoiceAttachments: (
      query?: {
        /**
         * Purchase invoice id
         * @format int32
         */
        id?: number;
        /**
         * Purchase invoice number
         * @format int32
         */
        invoiceNumber?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/purchase-invoice/attachments`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
  };
  purchaseorders = {
    /**
     * No description
     *
     * @tags PurchaseOrder
     * @name PurchaseOrderList
     * @summary Get a list of purchase orders
     * @request GET:/api/purchaseorders
     * @response `200` `object` OK
     */
    purchaseOrderList: (
      query?: {
        /** @format int32 */
        "filter.state"?: number;
        /** @format int32 */
        "filter.customer_number"?: number;
        /** @format int32 */
        "filter.type"?: number;
        /** @format date-time */
        "filter.ordered_before"?: string;
        /** @format date-time */
        "filter.ordered_after"?: string;
        "filter.order_numbers"?: number[];
        /** @format date-time */
        "filter.updated_before"?: string;
        /** @format date-time */
        "filter.updated_after"?: string;
        "filter.only_allowed_types"?: boolean;
        "filter.sort_desc"?: boolean;
        "filter.object_ids"?: number[];
        /**
         * Page number. If not provided, using default value of 1
         * @format int32
         */
        "filter.page"?: number;
        /**
         * Page size. If not provided, using default value of 10
         * @format int32
         */
        "filter.page_size"?: number;
        "filter.search"?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/purchaseorders`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags PurchaseOrder
     * @name PurchaseOrderUpdate
     * @summary Update purchase order
     * @request PUT:/api/purchaseorders
     * @response `200` `object` OK
     */
    purchaseOrderUpdate: (order: LemonRestModelsProxyPurchaseOrder, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/purchaseorders`,
        method: "PUT",
        body: order,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags PurchaseOrder
     * @name PurchaseOrderCreate
     * @summary Create new purchase order
     * @request POST:/api/purchaseorders
     * @response `200` `object` OK
     */
    purchaseOrderCreate: (order: LemonRestModelsProxyPurchaseOrder, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/purchaseorders`,
        method: "POST",
        body: order,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags PurchaseOrder
     * @name PurchaseOrderGetOrder
     * @summary Get single purchase order
     * @request GET:/api/purchaseorders/{orderNumber}
     * @response `200` `object` OK
     */
    purchaseOrderGetOrder: (orderNumber: number, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/purchaseorders/${orderNumber}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags PurchaseOrder
     * @name PurchaseOrderGetChangedOrders
     * @summary Get changed purchase orders
     * @request GET:/api/purchaseorders/changed
     * @response `200` `object` OK
     */
    purchaseOrderGetChangedOrders: (
      query: {
        /**
         * Change date
         * @format date-time
         */
        changedDate: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/purchaseorders/changed`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags PurchaseOrder
     * @name PurchaseOrderAddOrderRow
     * @summary Add new row to order
     * @request POST:/api/purchaseorders/{orderNumber}/orderrow
     * @response `200` `object` OK
     */
    purchaseOrderAddOrderRow: (
      orderNumber: number,
      proxyRow: LemonRestModelsProxyPurchaseOrderRow,
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/purchaseorders/${orderNumber}/orderrow`,
        method: "POST",
        body: proxyRow,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags PurchaseOrder
     * @name PurchaseOrderDeleteRow
     * @summary Delete order row
     * @request DELETE:/api/purchaseorders/orderrow
     * @response `200` `object` OK
     */
    purchaseOrderDeleteRow: (proxyRow: LemonRestModelsProxyPurchaseOrderRow, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/purchaseorders/orderrow`,
        method: "DELETE",
        body: proxyRow,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags PurchaseOrder
     * @name PurchaseOrderGetPallet
     * @summary Get single pallet
     * @request GET:/api/purchaseorders/pallet/{pallet_id}
     * @response `200` `object` OK
     */
    purchaseOrderGetPallet: (palletId: number, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/purchaseorders/pallet/${palletId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags PurchaseOrder
     * @name PurchaseOrderUpdatePallet
     * @summary Update single pallet
     * @request PUT:/api/purchaseorders/pallet
     * @response `200` `object` OK
     */
    purchaseOrderUpdatePallet: (pallet: LemonRestModelsProxyOrderDeliveryPallet, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/purchaseorders/pallet`,
        method: "PUT",
        body: pallet,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags PurchaseOrder
     * @name PurchaseOrderCreatePallet
     * @summary Create single pallet
     * @request POST:/api/purchaseorders/pallet
     * @response `200` `object` OK
     */
    purchaseOrderCreatePallet: (pallet: LemonRestModelsProxyOrderDeliveryPallet, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/purchaseorders/pallet`,
        method: "POST",
        body: pallet,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags PurchaseOrder
     * @name PurchaseOrderGetNewDeliveryInfo
     * @summary Get body of new deliveryinfo for purchase order
     * @request GET:/api/purchaseorders/{order_id}/newdeliveryinfo
     * @response `200` `object` OK
     */
    purchaseOrderGetNewDeliveryInfo: (orderId: number, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/purchaseorders/${orderId}/newdeliveryinfo`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  settings = {
    /**
     * No description
     *
     * @tags Settings
     * @name SettingsGetVehicles
     * @summary Get vehicle pay grades
     * @request GET:/api/settings/salaries/grades/vehicles
     * @response `200` `object` OK
     */
    settingsGetVehicles: (params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/settings/salaries/grades/vehicles`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Settings
     * @name SettingsGetFosList
     * @summary Get pay grades for grade attribute
     * @request GET:/api/settings/salaries/grades/{attribute_id}
     * @response `200` `object` OK
     */
    settingsGetFosList: (attributeId: number, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/settings/salaries/grades/${attributeId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Settings
     * @name SettingsGetFunctionSetting
     * @summary Get function setting
     * @request GET:/api/settings/functions/{id}/{name}/{personal}
     * @response `200` `object` OK
     */
    settingsGetFunctionSetting: (id: number, name: string, personal: boolean, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/settings/functions/${id}/${name}/${personal}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Settings
     * @name SettingsGetFunctionSettingsList
     * @summary Get multiple function settings
     * @request POST:/api/settings/functions
     * @response `200` `object` OK
     */
    settingsGetFunctionSettingsList: (
      filters: LemonRestModelsQueryFiltersFunctionSettingFilter[],
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/settings/functions`,
        method: "POST",
        body: filters,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Settings
     * @name SettingsGetCostCenters
     * @summary Get costcenters
     * @request GET:/api/settings/costcenters
     * @response `200` `object` OK
     */
    settingsGetCostCenters: (
      query?: {
        /** @format int32 */
        "filter.level"?: number;
        "filter.search"?: string;
        "filter.also_passives"?: boolean;
        /** @format int32 */
        "filter.page"?: number;
        /** @format int32 */
        "filter.page_size"?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/settings/costcenters`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Settings
     * @name SettingsGetCostCenterLevels
     * @summary Get costcenter levels
     * @request GET:/api/settings/costcenters/levels
     * @response `200` `object` OK
     */
    settingsGetCostCenterLevels: (
      query?: {
        /**
         * If not defined, using default value of 1
         * @format int32
         */
        "filter.page"?: number;
        /**
         * If not defined, using default value of 10
         * @format int32
         */
        "filter.page_size"?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/settings/costcenters/levels`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Settings
     * @name SettingsGetLtas
     * @summary Get LTAs
     * @request GET:/api/settings/ltas
     * @response `200` `object` OK
     */
    settingsGetLtas: (
      query?: {
        "filter.also_passives"?: boolean;
        /**
         * If not defined, using default value of 1
         * @format int32
         */
        "filter.page"?: number;
        /**
         * If not defined, using default value of 10
         * @format int32
         */
        "filter.page_size"?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/settings/ltas`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Settings
     * @name SettingsGetCompanyLocationList
     * @summary Get company locations
     * @request GET:/api/settings/companylocations
     * @response `200` `object` OK
     */
    settingsGetCompanyLocationList: (params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/settings/companylocations`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Settings
     * @name SettingsGetDepartmentList
     * @summary Get departments
     * @request GET:/api/settings/departments
     * @response `200` `object` OK
     */
    settingsGetDepartmentList: (params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/settings/departments`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Settings
     * @name SettingsGetProjectNumberseries
     * @summary Get project numberseries
     * @request GET:/api/settings/project_numberseries
     * @response `200` `object` OK
     */
    settingsGetProjectNumberseries: (params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/settings/project_numberseries`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Settings
     * @name SettingsGetSalesOrderNumberseries
     * @summary Get all salesorder numberseries
     * @request GET:/api/settings/salesorder_numberseries
     * @response `200` `object` OK
     */
    settingsGetSalesOrderNumberseries: (params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/settings/salesorder_numberseries`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Settings
     * @name SettingsGetSalesOrderNumberseriesAllowed
     * @summary Get salesorder numberseries that are allowed for user
     * @request GET:/api/settings/salesorder_numberseries/allowed
     * @response `200` `object` OK
     */
    settingsGetSalesOrderNumberseriesAllowed: (params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/settings/salesorder_numberseries/allowed`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Settings
     * @name SettingsGetPurchaseOrderNumberseries
     * @summary Get all purchase order numberseries
     * @request GET:/api/settings/purchaseorder_numberseries
     * @response `200` `object` OK
     */
    settingsGetPurchaseOrderNumberseries: (params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/settings/purchaseorder_numberseries`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Settings
     * @name SettingsGetPurchaseOrderNumberseriesAllowed
     * @summary Get purchase order numberseries that are allowed to user
     * @request GET:/api/settings/purchaseorder_numberseries/allowed
     * @response `200` `object` OK
     */
    settingsGetPurchaseOrderNumberseriesAllowed: (params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/settings/purchaseorder_numberseries/allowed`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Settings
     * @name SettingsGetStateList
     * @summary Get states
     * @request GET:/api/settings/states/{state_source}
     * @response `200` `object` OK
     */
    settingsGetStateList: (stateSource: number, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/settings/states/${stateSource}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Settings
     * @name SettingsGetPurchaseOrderStateList
     * @summary Get purchase order states
     * @request GET:/api/settings/purchaseorderstates
     * @response `200` `object` OK
     */
    settingsGetPurchaseOrderStateList: (params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/settings/purchaseorderstates`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Settings
     * @name SettingsIsLicense
     * @summary Check if current user has license
     * @request GET:/api/settings/license/{license}
     * @response `200` `object` OK
     */
    settingsIsLicense: (license: string, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/settings/license/${license}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Settings
     * @name SettingsGetStocks
     * @summary Get stocks
     * @request GET:/api/settings/products/stocks
     * @response `200` `object` OK
     */
    settingsGetStocks: (params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/settings/products/stocks`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Settings
     * @name SettingsUpdateStock
     * @summary Update product stock
     * @request PUT:/api/settings/products/stocks
     * @response `200` `object` OK
     */
    settingsUpdateStock: (proxyStock: LemonRestModelsProxyStock, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/settings/products/stocks`,
        method: "PUT",
        body: proxyStock,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Settings
     * @name SettingsCreateStock
     * @summary Create product stock
     * @request POST:/api/settings/products/stocks
     * @response `200` `object` OK
     */
    settingsCreateStock: (proxyStock: LemonRestModelsProxyStock, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/settings/products/stocks`,
        method: "POST",
        body: proxyStock,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Settings
     * @name SettingsGetShelves
     * @summary Get stock departments / product cells
     * @request GET:/api/settings/products/stocks/{stock}/shelves
     * @response `200` `object` OK
     */
    settingsGetShelves: (stock: number, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/settings/products/stocks/${stock}/shelves`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Settings
     * @name SettingsCreateShelves
     * @summary Create product shelves
     * @request POST:/api/settings/products/stocks/{stock}/shelves
     * @response `200` `object` OK
     */
    settingsCreateShelves: (
      stock: number,
      proxyCells: LemonRestModelsProxyProductCellList,
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/settings/products/stocks/${stock}/shelves`,
        method: "POST",
        body: proxyCells,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Settings
     * @name SettingsGetStockShelves
     * @summary Get all the shelves in the stock
     * @request GET:/api/settings/stocks/{stock}/shelves
     * @response `200` `object` OK
     */
    settingsGetStockShelves: (stock: number, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/settings/stocks/${stock}/shelves`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Settings
     * @name SettingsGetShelf
     * @summary Get stock shelf
     * @request GET:/api/settings/products/stocks/{stock}/{shelf}
     * @response `200` `object` OK
     */
    settingsGetShelf: (stock: number, shelf: string, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/settings/products/stocks/${stock}/${shelf}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Settings
     * @name SettingsGetProductStockShelves
     * @summary Get list of product's shelves from selected stock
     * @request GET:/api/settings/products/{product_code}/stocks/{stock}/shelves
     * @response `200` `object` OK
     */
    settingsGetProductStockShelves: (productCode: string, stock: number, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/settings/products/${productCode}/stocks/${stock}/shelves`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Settings
     * @name SettingsDeleteStock
     * @summary Delete stock
     * @request DELETE:/api/settings/products/stocks/{stock}
     * @response `200` `object` OK
     */
    settingsDeleteStock: (stock: number, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/settings/products/stocks/${stock}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Settings
     * @name SettingsGetProductTextTypes
     * @summary Get product text types
     * @request GET:/api/settings/produttexttypes/{languageCode}
     * @response `200` `object` OK
     */
    settingsGetProductTextTypes: (languageCode: string, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/settings/produttexttypes/${languageCode}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Settings
     * @name SettingsGetStockTransactionNumberseries
     * @summary Get stock transaction numberseries
     * @request GET:/api/settings/stocktransaction_numberseries/{languageCode}
     * @response `200` `object` OK
     */
    settingsGetStockTransactionNumberseries: (languageCode: string, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/settings/stocktransaction_numberseries/${languageCode}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Settings
     * @name SettingsGetLanguages
     * @summary Gets languages
     * @request GET:/api/settings/languages
     * @response `200` `object` OK
     */
    settingsGetLanguages: (params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/settings/languages`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Settings
     * @name SettingsGetProductionFailCodes
     * @summary Get production fail code list
     * @request GET:/api/settings/production/fail_codes
     * @response `200` `object` OK
     */
    settingsGetProductionFailCodes: (params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/settings/production/fail_codes`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Settings
     * @name SettingsGetWorkTimeReasonCodes
     * @summary Get worktime reason code list
     * @request GET:/api/settings/worktime/reason_codes/{regulationId}/{languageCode}
     * @response `200` `object` OK
     */
    settingsGetWorkTimeReasonCodes: (regulationId: number, languageCode: string, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/settings/worktime/reason_codes/${regulationId}/${languageCode}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Settings
     * @name SettingsGetWorkTimeRegulations
     * @summary Get worktime regulations
     * @request GET:/api/settings/worktime/regulations
     * @response `200` `object` OK
     */
    settingsGetWorkTimeRegulations: (params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/settings/worktime/regulations`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Settings
     * @name SettingsGetDeliveryPackageTypeList
     * @summary Get delivery package type list
     * @request GET:/api/settings/delivery_package_codes
     * @response `200` `object` OK
     */
    settingsGetDeliveryPackageTypeList: (params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/settings/delivery_package_codes`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Settings
     * @name SettingsGetMobileAppPageSettings
     * @summary Get mobile app settings
     * @request GET:/api/settings/mobileapp/{app_id}/settings
     * @response `200` `object` OK
     */
    settingsGetMobileAppPageSettings: (appId: number, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/settings/mobileapp/${appId}/settings`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Settings
     * @name SettingsGetDeliveryMethods
     * @summary Get delivery methods
     * @request GET:/api/settings/deliverymethods
     * @response `200` `object` OK
     */
    settingsGetDeliveryMethods: (params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/settings/deliverymethods`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Settings
     * @name SettingsGetCurrency
     * @summary Get single currency
     * @request GET:/api/settings/currency/{code}
     * @response `200` `object` OK
     */
    settingsGetCurrency: (code: string, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/settings/currency/${code}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  stocks = {
    /**
     * No description
     *
     * @tags Stock
     * @name StockStocks
     * @summary Get a list of changed product stocks
     * @request GET:/api/stocks
     * @response `200` `object` OK
     */
    stockStocks: (
      query?: {
        /** @format date-time */
        "filter.modified_before"?: string;
        /** @format date-time */
        "filter.modified_after"?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/stocks`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
  };
  travelexpenses = {
    /**
     * No description
     *
     * @tags TravelExpense
     * @name TravelExpenseCreate
     * @summary Create travel expense
     * @request POST:/api/travelexpenses
     * @response `200` `object` OK
     */
    travelExpenseCreate: (proxyExpenses: LemonRestModelsProxyGlobalTravelExpense[], params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/travelexpenses`,
        method: "POST",
        body: proxyExpenses,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  v1 = {
    /**
     * No description
     *
     * @tags V1Authentication
     * @name V1AuthenticationRefreshLicenses
     * @summary Refresh licenses from UM
     * @request POST:/api/v1/auth/login/refreshlicenses
     * @response `200` `object` OK
     */
    v1AuthenticationRefreshLicenses: (
      login_token: LemonRestModelsLogInTokenInstanceDatabase,
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/v1/auth/login/refreshlicenses`,
        method: "POST",
        body: login_token,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags V1Authentication
     * @name V1AuthenticationLogInToken
     * @summary Perform a login to the API
     * @request POST:/api/v1/auth/login/token
     * @response `200` `object` OK
     */
    v1AuthenticationLogInToken: (login_token: LemonRestModelsLogInTokenInstanceDatabase, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/v1/auth/login/token`,
        method: "POST",
        body: login_token,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags V1Authentication
     * @name V1AuthenticationLogInRopcToken
     * @summary ROPC-user login to the API
     * @request GET:/api/v1/auth/login/restuser
     * @response `200` `object` OK
     */
    v1AuthenticationLogInRopcToken: (
      query: {
        /** encrypted string containing the login info */
        ropcstring: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/v1/auth/login/restuser`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
  };
}
