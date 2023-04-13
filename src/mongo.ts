import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
export const uri = process.env.MONGO_DB_URI || 'no valid uri'
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
connectWithMongoose()