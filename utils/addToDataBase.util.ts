import mongoose from 'mongoose'
import { ServiceModel, CompanyModel } from '../lib/models'
import { Services } from '../lib/mongo.enum'

export const newService = (
  name: string, 
  type: Services, 
  price: number, 
  companyId: string
) => {
  const Service = new ServiceModel({
    DATE: new Date(),
    NAME: name,
    TYPE: type,
    PRICE: price,
    COMPANY_ID: companyId,
  })
  Service.save()
    .then((result) => {
      console.log(result)
    })
    .catch((err) => {
      console.error(err)
    })
    .finally(() => {
      mongoose.connection.close()
    })
}

export const newCompany = (
  name: string,
  rut: string,
  businessActivity: string,
  email: string,
  phone: string,
  siiPassword: string,
  previredUser: string,
  previredPassword: string
) => {
  const Company = new CompanyModel({
    CREATED_AT: new Date(),
    STATUS: 'NEW',
    NAME: name,
    RUT: rut,
    BUSINESS_ACTIVITY: businessActivity,
    EMAIL: email,
    PHONE: phone,
    SII_PASSWORD: siiPassword,
    PREVIRED_USER: previredUser,
    PREVIRED_PASSWORD: previredPassword,
  })
  Company.save()
    .then((result) => {
      console.log(result)
    })
    .catch((err) => {
      console.error(err)
    })
    .finally(() => {
      mongoose.connection.close()
    })
}
