import {
    CompanyModel,
    ServiceModel,
} from '../lib/models'

export const resolvers = {
    Query: {
      company: async () => {
        const companies = await CompanyModel.find()
        return companies/* .clone().exec() */
      },
      service: () => {
        return ServiceModel.find()/* .clone().exec() */
      }
    }
  }