import { Schema } from 'mongoose'

const Services = {
  1: 'REMUNERATIONS',
  2: 'ACCOUNTING',
  3: 'OTHER',
}
const Status = {
  1: 'ACTIVE',
  2: 'INACTIVE',
  3: 'NEW',
}
const StatusType = {
  type: String,
  enum: Object.values(Status),
  default: Status.NEW,
}

const ServiceType = {
  type: String,
  enum: Object.values(Services),
  default: Services.OTHER,
}

export const serviceSchema = new Schema({
  DATE: Date,
  NAME: String,
  TYPE: ServiceType,
  PRICE: {
    type: Number,
    default: 0,
  },
  COMPANY_ID: String,
})

export const companySchema = new Schema({
  CREATED_AT: String,
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
  COMPANY: String,
})
// bank account schema
export const BASchema = new Schema({
  BANK: String,
  ACCOUNT_TYPE: String,
  ACCOUNT_NUMBER: String,
  ACCOUNT_NAME: String,
  COMPANY: String,
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
  COMPANY: String,
  NUMBER: String,
  DATE: String,
  TYPE: String,
  STATUS: String,
  TOTAL: Number,
  NET: Number,
  TAX: Number,
  TAX_RATE: Number,
  TAX_TYPE: String,
  TAX_EXEMPT: Boolean,
  TAX_EXEMPT_REASON: String,
})
