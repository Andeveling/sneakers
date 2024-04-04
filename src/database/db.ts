import mongoose from "mongoose"
import { config } from "../config"

const { MONGO_URI } = config
export async function connectDB() {
  try {
    console.log(`Connecting to ${MONGO_URI}`)
    await mongoose.connect(MONGO_URI)
    console.log("MongoDB connected")
  } catch (error) {
    console.log(`Error connecting: ${error}`)
  }
}
