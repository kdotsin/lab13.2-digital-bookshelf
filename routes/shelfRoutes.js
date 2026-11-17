import e from "express";
import { Book } from "../models/Book.js";
import { SchemaTypeOptions } from "mongoose";

const route = e.Router();

route.get('/books', async (req, res) => {
  try {
    const response = await Book.find({});
    console.log('successfully retrieved books');
    res.status(200).json(response)
  } catch (err) {
    console.error('failed to retreive books:', err);
    res.status(400).json({ error: 'failed to fetch books', details: err.message });
  }
});

route.get('/books/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const singBook = await Book.findById(id);
    console.log('successsfully retrived a book');
    res.status(200).json(singBook);
  } catch (err) {
    console.error('failed to retrieve singular book', err);
    res.status(400).json({ error: 'cannot retrieve book', details: err.message });
  }
})

route.post('/books/post', async (req, res) => {
  try {
    const newBook = await Book.create(req.body);
    console.log('successfully created a book');
    res.status(200).json(newBook)
  } catch (err) {
    console.error('failed to create book:', err);
    res.status(400).json({ error: 'could not create book', details: err.message });
  }
});

route.put('/books/post/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const updatedBook = await Book.findByIdAndUpdate(id, body, { returnDocument: 'after' });
    console.log('successfully updated book');
    res.status(200).json(updatedBook);
  } catch (err) {
    console.error('Could not update book:', err);
    res.status(400).json({ error: 'failed to update book', details: err.message });
  }
});

route.delete('/books/delete/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const deletedBook = await Book.findByIdAndDelete(id);
    console.log('successfully deleted book');
    res.status(200).json(deletedBook);
  } catch (err) {
    console.error('could not delete book', err);
    res.status(400).json({ error: 'failed to delete book', details: err.message });
  }
})

export default route;