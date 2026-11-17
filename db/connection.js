import mongoose from "mongoose";

const URI = process.env.MONGODB_URI;

export async function connectDB() {
  try {
    await mongoose.connect(URI)
    console.log('connected to mongoDB');
  } catch (err) {
    console.error('could not connect to mongo:', err);
  }
}