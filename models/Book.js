import mongoose, { Schema } from "mongoose";

const bookSchema = new Schema({
  title: {
    type: String,
    requred: true,
  },
  author: {
    type: String,
    required: true,
  },
  isbn: {
    type: String,
    unique: true,
  },
  publishedDate: Date,
  inStock: {
    type: Boolean,
    default: true,
  },
})

export const Book = mongoose.model('Book', bookSchema);