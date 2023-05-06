import {
  EInoviceStatus, 
  EInvoices, 
  EServices, 
  ETaxesRates,
  EBANK_ACCOUNTS,
  EGender
} from "./mongo.enum";

export interface ICompany {
  NAME: String,
  RUT: String,
  BUSINESS_ACTIVITY: String,
  EMAIL: String,
  PHONE: String,
  SII_PASSWORD?: String,
  PREVIRED_USER?: String,
  PREVIRED_PASSWORD?: String,
  SERVICES_PROVIDED?: Array<String>,
  LEGAL_REPRESENTATIVE?: Array<String>,
  BANK_ACCOUNTS?: Array<String>
}

export interface IInvoice {
  _id?: String,
  COMPANY: String,
  NUMBER: Number,
  SERVICE: Array<String>,
  INVOICE_TYPE: EInvoices,
  SERVICE_TYPE: EServices,
  STATUS: EInoviceStatus,
  TOTAL: Number,
  TAX: ETaxesRates,
  NET: Number,
  TAX_EXEMPT: Boolean,
  TAX_EXEMPT_REASON: String,
}

export interface ILegalRep {
  _id?: String,
  NAME: String,
  RUT: string,
  EMAIL: String,
  COMPANY: String,
  SII_PASSWORD?: String,
}

export interface IBankAccount {
  _id?: String,
  BANK: String,
  ACCOUNT_TYPE: EBANK_ACCOUNTS,
  ACCOUNT_NUMBER: String,
  ACCOUNT_NAME: String,
  COMPANY: String,
}

export interface IUser {
  NAME: String,
  RUT: string,
  EMAIL: String,
  USER: String,
  PASSWORD: String,
  ROLE: String,
  GENDER: EGender,
}

export interface IPagination {
  PAGE: number,
  LIMIT: number,
  SORT: string,
  TYPE: string,
  QUERYPARAMS?: any,
}