import { model } from 'mongoose'
import {
  companySchema,
  legalRepSchema,
  BASchema,
  userSchema,
  invoiceSchema,
} from './schemas'

export const CompanyModel = model('companies', companySchema)
export const LegalRepModel = model('legalreps', legalRepSchema)
export const BankAccountModel = model('bankaccounts', BASchema)
export const UserModel = model('user', userSchema)
export const InvoiceModel = model('invoices', invoiceSchema)
