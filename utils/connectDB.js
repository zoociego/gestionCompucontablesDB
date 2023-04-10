import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
const uri = process.env.MONGO_DB_URI
// MongoDB connection
export const connectWithMongoose = () => {
  mongoose
    .connect(uri)
    .then(() => {
      console.log('DB is connected')
    })
    .catch((err) => {
      console.error(err)
    })
}
