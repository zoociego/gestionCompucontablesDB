import mongoose from 'mongoose'
import { connectWithMongoose } from '../utils/connectDB.js'
import { CompanyModel, ServiceModel } from '../lib/models.js'

connectWithMongoose()
const company = await CompanyModel.findOne({ NAME: 'Test Company' })

const service = await ServiceModel.findOne({ COMPANY_ID: company._id }).finally(
  () => mongoose.connection.close()
)

console.log(service)
