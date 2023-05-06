export enum EServices  {
    REMUNERATIONS = 'REMUNERATIONS',
    ACCOUNTING = 'ACCOUNTING',
    OTHER = 'OTHER',
  }
  export enum EStatus {
    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE',
    NEW = 'NEW',
  }
// Bank account type 
export enum EBANK_ACCOUNTS {
    CHECKING = 'CHECKING',
    SAVINGS = 'SAVINGS',
    OTHER = 'OTHER',
  }
  export enum EInvoices {
    INVOICE = 'INVOICE',
    CREDIT_NOTE = 'CREDIT_NOTE',
    DEBIT_NOTE = 'DEBIT_NOTE',
    OTHER = 'OTHER',
  }
  export enum EInoviceStatus {
    PENDING = 'PENDING',
    PAID = 'PAID',
    CANCELLED = 'CANCELLED',
  }
  export enum ETaxesRates {
    REGULAR = 1.19,
  }

  export enum EGender {
    MALE = "MALE",
    FEMALE = "FEMALE",
    NOT_SPECIFIED = "NOT SPECIFIED"
  }
  export enum EServicesProvided {
    // Remunerations
    PAYROLL = 'PAYROLL',
    // Accounting
    // Other
    // Not specified
    NOT_SPECIFIED = 'NOT SPECIFIED',
  }
  export enum ERole {
    CEO = 'CEO',
    FINANCE_MANAGER = 'FINANCE_MANAGER',
    NOT_SPECIFIED = 'NOT_SPECIFIED',
  }