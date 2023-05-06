import dotenv from 'dotenv'
import {
  CompanyModel,
  InvoiceModel,
  LegalRepModel,
  BankAccountModel,
  UserModel
} from '../lib/models'
import {
ICompany, 
IInvoice, 
ILegalRep, 
IBankAccount, 
IUser,
} from '../lib/interfaces'
import { rutRegex } from './Validations.util'
dotenv.config()
export const Mutation = {
    addCompany: async(_root: any, args: ICompany) => {
      const newCompany = new CompanyModel(args)
      await newCompany.save()
      return newCompany 
    },
    addInvoice: async(_root: any, args: IInvoice) => {
      const newInvoice = new InvoiceModel(args)
      let { _id, COMPANY, TAX, TAX_RATE, TOTAL } = newInvoice
      newInvoice.NUMBER = await InvoiceModel.countDocuments() + 1
      newInvoice.TAX = (TOTAL * TAX_RATE) - TOTAL
      newInvoice.NET = TOTAL - TAX
      await CompanyModel.findOneAndUpdate({ NAME: COMPANY }, {
        $push: { SERVICES_PROVIDED: _id }
      }) 
      await newInvoice.save()
      return newInvoice
    },
    addLegalRep: async(_root: any, args: ILegalRep) => {
      if(rutRegex.test(args.RUT)) {
        const newLegalRep = new LegalRepModel(args)
        const { _id, COMPANY } = newLegalRep
        await newLegalRep.save()
        await CompanyModel.findOneAndUpdate({ NAME: COMPANY }, {
          $push: { LEGAL_REPRESENTATIVE: _id }
        })
        return newLegalRep
      } else {
        return new Error('RUT is not valid')
      }
    },
    addBankAccount: async(_root: any, args: IBankAccount) => {
      const newBankAccount = new BankAccountModel(args)
      let { _id, COMPANY } = newBankAccount
      await CompanyModel.findOneAndUpdate({ NAME: COMPANY }, {
        $push: { BANK_ACCOUNTS: _id }
      })
      await newBankAccount.save()
      return newBankAccount
    },
    addUser: async(_root: any, args: IUser) => {
      const newUser = new UserModel(args)
      await newUser.save()
      return newUser
    },
    deleteInvoice: async(_root: any, args: { _id: string, COMPANY: string }) => {
      const { _id, COMPANY } = args
      await InvoiceModel.findOneAndDelete({ _id })
      await CompanyModel.findOneAndUpdate({ NAME: COMPANY }, {
        $pull: { SERVICES_PROVIDED: _id }
      })
      return 'Invoice deleted'
    },
    deleteLegalRep: async(_root: any, args: { _id: string, COMPANY: string }) => {
      const { _id, COMPANY } = args
      await LegalRepModel.findOneAndDelete({ _id })
      await CompanyModel.findOneAndUpdate({ NAME: COMPANY }, {
        $pull: { LEGAL_REPRESENTATIVE: _id }
      })
      return 'Legal Representative deleted'
    },
    deleteBankAccount: async(_root: any, args: { _id: string, COMPANY: string }) => {
      const { _id, COMPANY } = args
      await BankAccountModel.findOneAndDelete({ _id })
      await CompanyModel.findOneAndUpdate({ NAME: COMPANY }, {
        $pull: { BANK_ACCOUNTS: _id }
      })
      return 'Bank Account deleted'
    },
    deleteUser: async(_root: any, args: { _id: string }) => {
      const { _id } = args
      await UserModel.findOneAndDelete({ _id })
      return 'User deleted'
    }
}

export default Mutation