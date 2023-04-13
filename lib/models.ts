import { model } from 'mongoose'
import {
  companySchema,
  legalRepSchema,
  BASchema,
  userSchema,
  invoiceSchema,
  serviceSchema,
} from './schemas'

export const CompanyModel = model('Company', companySchema)
export const LegalRepModel = model('LegalRep', legalRepSchema)
export const BAModel = model('BankAccount', BASchema)
export const UserModel = model('User', userSchema)
export const InvoiceModel = model('Invoice', invoiceSchema)
export const ServiceModel = model('Service', serviceSchema)
