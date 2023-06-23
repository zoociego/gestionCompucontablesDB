  import { gql } from 'apollo-server'
  export const typeDefs = gql`
    type Query {
      LegalRep(
        PAGE: Int!, 
        LIMIT: Int!, 
        SORT: String!,
        QUERY_PARAMS: String
      ): [LegalRep]!
      BankAccount(
        PAGE: Int!, 
        LIMIT: Int!, 
        SORT: String!,
        QUERY_PARAMS: String
      ): [BankAccount]!
      Invoices(
        PAGE: Int!, 
        LIMIT: Int!, 
        SORT: String!,
        QUERY_PARAMS: String
      ): [Invoice]!
      Users(
        PAGE: Int!, 
        LIMIT: Int!, 
        SORT: String!,
        QUERY_PARAMS: String
      ): [User]!
      Companies(
        PAGE: Int!, 
        LIMIT: Int!, 
        SORT: String!,
        valueQueryParam: String
      ): Companies! 
      FindCompanyServicesProvided(
        COMPANY: String!
      ): [Invoice]!
      FindCompanyLegalRepresentative(
        COMPANY: String!
      ): [LegalRep]!
      FindCompanyBankAccounts(
        COMPANY: String!
      ): [BankAccount]!
    }
    type Company {
      NAME: String!,
      ALIAS: String!,
      RUT: String!,
      BUSINESS_ACTIVITY: String!,
      EMAIL: String!,
      PHONE: String!,
      STATUS: String,
      SII_PASSWORD: String,
      PREVIRED_USER: String,
      PREVIRED_PASSWORD: String,
      INVOICES_PROVIDED: [String],
      LEGAL_REPRESENTATIVE: [String],
      BANK_ACCOUNTS: [String]
    }
    type Companies {
      results: [Company]!,
      total: Int!
    }
    type LegalRep {
      NAME: String!,
      COMPANY: String!,
      RUT: String!,
      EMAIL: String!,
      SII_PASSWORD: String,
    }
    type BankAccount {
      BANK: String!,
      COMPANY: String!,
      ACCOUNT_TYPE: String!,
      ACCOUNT_NUMBER: String!,
      ACCOUNT_NAME: String!,
    }
    type User {
      NAME: String!,
      RUT: String!,
      COMPANY: String,
      EMAIL: String!,
      USER: String!,
      PASSWORD: String!,
      ROLE: String!,
      GENDER: String,
    }
    type Invoice {
      INVOICE_TYPE: String!,
      SERVICE_TYPE: String!,
      SERVICE_PROVIDED: String!,
      TOTAL: Float!,
      COMPANY: String!,
      TAX: Float!,
      NUMBER: Int,
      STATUS: String,
      NET: Float,
      TAX_EXEMPT: Boolean,
      TAX_EXEMPT_REASON: String,
    }
    type Mutation {
      addCompany(
        NAME: String!,
        RUT: String!,
        ALIAS: String!,
        BUSINESS_ACTIVITY: String!,
        EMAIL: String!,
        PHONE: String!,
        SII_PASSWORD: String,
        PREVIRED_USER: String,
        PREVIRED_PASSWORD: String,
      ): Company
      addInvoice(
        COMPANY: String!,
        SERVICE_TYPE: String!,
        INVOICE_TYPE: String!,
        SERVICE_PROVIDED: String!,
        TOTAL: Float!,
        TAX: Float!,
        TAX_EXEMPT: Boolean,
        TAX_EXEMPT_REASON: String,
      ): Invoice
      addLegalRep(
        COMPANY: String!,
        NAME: String!,
        RUT: String!,
        EMAIL: String!,
        SII_PASSWORD: String,
      ): LegalRep
      addBankAccount(
        BANK: String!,
        ACCOUNT_TYPE: String!,
        ACCOUNT_NUMBER: String!,
        ACCOUNT_NAME: String!,
        COMPANY: String!,
      ): BankAccount
      addUser(
        NAME: String!,
        RUT: String!,
        EMAIL: String!,
        USER: String!,
        PASSWORD: String!,
        ROLE: String!,
        GENDER: String,
      ): User
      deleteInvoice(
        _id: String!,
        COMPANY: String!,
      ): String
      deleteLegalRep(
        _id: String!,
        COMPANY: String!,
      ): String
      deleteBankAccount(
        _id: String!,
        COMPANY: String!,
      ): String
      deleteUser(
        _id: String!,
        COMPANY: String!,
      ): String
    }
  `