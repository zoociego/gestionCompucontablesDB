 import { Schema } from 'mongoose'
import {
  EServices, 
  EStatus, 
  EBANK_ACCOUNTS,
  EInvoices,
  EInoviceStatus,
  ETaxesRates,
  EGender,
  EServicesProvided,
  ERole,
} from './mongo.enum'

const StringForSchemas = {
  type: String,
  default: "No values recive"
}
const BooleanForSchemas = {
  type: Boolean,
  default: false,
}
// Used to define the type of the price and not get an undefined value
export const NumberForSchemas = {
  type: Number,
  default: 0,
}

const RoleType = {
  type: String,
  enum: ERole,
  default: ERole.NOT_SPECIFIED,
  length: 20,
}
const GenderType = {
  type: String,
  enum: EGender,
  default: EGender.NOT_SPECIFIED,
  length: 13,
}

const BAType = {
  type: String,
  enum: EBANK_ACCOUNTS,
  default: EBANK_ACCOUNTS.OTHER,
  length: 8,
}
const StatusType = {
  type: String,
  enum: EStatus,
  default: EStatus.NEW,
  length: 8,
}

export const ServiceType = {
  type: String,
  enum: EServices,
  default: EServices.OTHER,
  length: 13,
}
const ServiceProvidedType = {
  type: String,
  enum: EServicesProvided,
  default: EServicesProvided.NOT_SPECIFIED,
  length: 20,
}

const InoviceStatusType = {
  type: String,
  enum: EInoviceStatus,
  default: EInoviceStatus.PENDING,
  length: 9,
}
const InvoiceType = {
  type: String,
  enum: EInvoices,
  default: EInvoices.OTHER,
  length: 11,
}
const TaxRate = {
  type: Number,
  enum: ETaxesRates,
  default: ETaxesRates.REGULAR,
  length: 5,
}

export const invoiceSchema = new Schema({
  NUMBER: Number,
  COMPANY: String,
  INVOICE_TYPE: InvoiceType,
  SERVICE_TYPE: ServiceType,
  SERVICE_PROVIDED: ServiceProvidedType, 
  STATUS: InoviceStatusType,
  TAX_RATE: TaxRate,
  TOTAL: NumberForSchemas,
  TAX: NumberForSchemas,
  NET: NumberForSchemas,
  TAX_EXEMPT: BooleanForSchemas,
  TAX_EXEMPT_REASON: StringForSchemas,
}, {
  timestamps: true,
})

export const companySchema = new Schema({
  NAME: StringForSchemas,
  RUT: StringForSchemas,
  BUSINESS_ACTIVITY: StringForSchemas,
  EMAIL: StringForSchemas,
  PHONE: StringForSchemas,
  STATUS: StatusType,
  SII_PASSWORD: StringForSchemas,
  PREVIRED_USER: StringForSchemas,
  PREVIRED_PASSWORD: StringForSchemas,
  SERVICES_PROVIDED: [{ type: Schema.Types.ObjectId, ref: 'invoices' }],
  LEGAL_REPRESENTATIVE: [{ type: Schema.Types.ObjectId, ref: 'legalreps' }],
  BANK_ACCOUNTS: [{ type: Schema.Types.ObjectId, ref: 'bankaccounts' }]
}, {
  timestamps: true,
})

export const legalRepSchema = new Schema({
  COMPANY: Array<String>,
  NAME: StringForSchemas,
  RUT: StringForSchemas,
  EMAIL: StringForSchemas,
  SII_PASSWORD: StringForSchemas,
},{
  timestamps: true,
})
// bank account schema
export const BASchema = new Schema({
  BANK: StringForSchemas,
  ACCOUNT_TYPE: BAType,
  ACCOUNT_NUMBER: StringForSchemas,
  ACCOUNT_NAME: StringForSchemas,
  COMPANY: StringForSchemas
}, {
  timestamps: true,
})

export const userSchema = new Schema({
  NAME: StringForSchemas,
  RUT: StringForSchemas,
  EMAIL: StringForSchemas,
  USER: StringForSchemas,
  PASSWORD: StringForSchemas,
  ROLE: RoleType,
  GENDER: GenderType,
}, {
  timestamps: true,
})

