import { paginations } from './paginations'
import {
    BankAccountModel as BankAccount,
    CompanyModel as Company, 
    InvoiceModel as Invoice, 
    LegalRepModel as LegalRep, 
    UserModel as User,
} from '../lib/models'
import { IPagination } from '../lib/interfaces'

const Query = {
    Companies: async (_root: any, args: IPagination) => {
      const { PAGE, LIMIT, SORT } = args
      const companies = await paginations(PAGE, LIMIT, SORT, Company)
      return companies.results
    },
    Invoices: async (_root: any, args: IPagination) => {
      const { PAGE, LIMIT, SORT } = args
      const invoices = await paginations(PAGE, LIMIT, SORT, Invoice)
      return invoices.results
    },
    LegalRep: async (_root: any, args: IPagination) => {
      const { PAGE, LIMIT, SORT } = args
      const legalReps = await paginations(PAGE, LIMIT, SORT, LegalRep)
      return legalReps.results
    },
    BankAccount: async (_root: any, args: IPagination) => {
      const { PAGE, LIMIT, SORT } = args
      const bankAccounts = await paginations(PAGE, LIMIT, SORT, BankAccount)
      return bankAccounts.results
    },
    Users: async (_root: any, args: IPagination) => {
      const { PAGE, LIMIT, SORT } = args
      const users = await paginations(PAGE, LIMIT, SORT, User)
      return users.results
    },
    FindCompanyServicesProvided: async (_root: any, args: { COMPANY: string }) => {
      const { COMPANY } = args
      const CompanyServiceProvided = 
      await Company.findOne({ NAME: COMPANY }).populate('SERVICES_PROVIDED')
      return CompanyServiceProvided?.SERVICES_PROVIDED
    },
    FindCompanyLegalRepresentative: async (_root: any, args: { COMPANY: string }) => {
      const { COMPANY } = args
      const CompanyLegalReps = 
        await Company.findOne({ NAME: COMPANY }).populate('LEGAL_REPRESENTATIVE')
      return CompanyLegalReps?.LEGAL_REPRESENTATIVE
    },
    FindCompanyBankAccounts: async (_root: any, args: { COMPANY: string }) => {
      const { COMPANY } = args
      const CompanyBankAccounts = 
        await Company.findOne({ NAME: COMPANY }).populate('BANK_ACCOUNTS')
      return CompanyBankAccounts?.BANK_ACCOUNTS
    }
  }

export default Query