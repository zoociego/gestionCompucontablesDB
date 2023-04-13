import { Schema } from 'mongoose'
import {
  Services, 
  Status, 
  BAType as BAEnum,
  Invoices,
  InoviceStatus,
  TaxT,
  TaxesRates,
} from '../lib/enum/mongo.enum'

const BooleanForSchemas = {
  type: Boolean,
  default: false,
}
const BAType = {
  type: String,
  enum: BAEnum,
  default: BAEnum.OTHER,
}
const StatusType = {
  type: String,
  enum: Status,
  default: Status.NEW,
}

export const ServiceType = {
  type: String,
  enum: Services,
  default: Services.OTHER,
}
// Used to define the type of the price and not get an undefined value
export const TOTAL = {
  type: Number,
  default: 0,
}

export const TaxType = {
  type: String,
  enum: TaxT,
  default: TaxT.TAX,
}

const InoviceStatusType = {
  type: String,
  enum: InoviceStatus,
  default: InoviceStatus.PENDING,
}
const InvoiceType = {
  type: String,
  enum: Invoices,
  default: Invoices.OTHER,
}
const TaxRate = {
  type: Number,
  enum: TaxesRates,
  default: TaxesRates.TAX_19,
}

export const serviceSchema = new Schema({
  DATE: Date,
  NAME: String,
  TYPE: ServiceType,
  PRICE: TOTAL,
  COMPANY_ID: String,
})

export const companySchema = new Schema({
  CREATED_AT: Date,
  STATUS: StatusType,
  NAME: String,
  RUT: String,
  BUSINESS_ACTIVITY: String,
  EMAIL: String,
  PHONE: String,
  SII_PASSWORD: String,
  PREVIRED_USER: String,
  PREVIRED_PASSWORD: String,
})

export const legalRepSchema = new Schema({
  NAME: String,
  RUT: String,
  EMAIL: String,
  SII_PASSWORD: String,
  COMPANY_ID: String,
})
// bank account schema
export const BASchema = new Schema({
  BANK: String,
  ACCOUNT_TYPE: BAType,
  ACCOUNT_NUMBER: String,
  ACCOUNT_NAME: String,
  COMPANY_ID: String,
})

export const userSchema = new Schema({
  NAME: String,
  RUT: String,
  EMAIL: String,
  USER: String,
  PASSWORD: String,
  ROLE: String,
  GENDER: String,
})

export const invoiceSchema = new Schema({
  COMPANY_ID: String,
  NUMBER: String,
  DATE: Date,
  TYPE: InvoiceType,
  STATUS: InoviceStatusType,
  TOTAL: TOTAL,
  NET: TOTAL,
  TAX: TOTAL,
  TAX_RATE: TaxRate,
  TAX_TYPE: TaxType,
  TAX_EXEMPT: BooleanForSchemas,
  TAX_EXEMPT_REASON: String,
})
