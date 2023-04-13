import { gql } from 'apollo-server'
export const typeDefs = gql`
  type Service {
    DATE: String!,
    NAME: String!,
    TYPE: String!,
    PRICE: Int!,
    COMPANY_ID: ID!,
  }
  type Company {
    CREATED_AT: String!,
    STATUS: String!,
    NAME: String!,
    RUT: String!,
    BUSINESS_ACTIVITY: String!,
    EMAIL: String!,
    PHONE: String!,
    SII_PASSWORD: String,
    PREVIRED_USER: String,
    PREVIRED_PASSWORD: String,
  }
  type LegalRep {
    NAME: String!,
    RUT: String!,
    EMAIL: String!,
    SII_PASSWORD: String,
    COMPANY_ID: ID!,
  }
  type BankAccount {
    BANK: String!,
    ACCOUNT_TYPE: String!,
    ACCOUNT_NUMBER: String!,
    ACCOUNT_NAME: String!,
    COMPANY_ID: ID!,
  }
  type User {
    NAME: String!,
    RUT: String!,
    EMAIL: String!,
    USER: String!,
    PASSWORD: String!,
    ROLE: String!,
    GENDER: String,
  }
  type invoice {
    COMPANY_ID: ID!,
    NUMBER: String!,
    DATE: String!,
    TYPE: String!,
    STATUS: String!,
    TOTAL: Int!,
    NET: Int!,
    TAX: Int!,
    TAX_RATE: Int!,
    TAX_TYPE: String!,
    TAX_EXEMPT: Boolean!,
    TAX_EXEMPT_REASON: String,
  }
  type Query {
    service: [Service]!
    company: [Company]!
    legalRep: [LegalRep]!
    bankAccount: [BankAccount]!
    invoice: [invoice]!
  }
`