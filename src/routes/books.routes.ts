import { Hono } from 'hono';
import { authMiddleware } from '../middleware/auth.middleware';
import { createBook, getBooks } from '../db/queries';
import type { HonoEnv } from '../types';
import { createBookValidator } from '../validators/create-book.validator';

export const bookRoutes = new Hono<HonoEnv>();

bookRoutes.get('/', async (c) => {
  try {
    const books = await getBooks();
    return c.json(books);
  } catch (error) {
    console.error('Error fetching books:', error);
    return c.json({ error: 'Failed to get books' }, 500);
  }
})

bookRoutes.post('/', authMiddleware, createBookValidator, async (c) => {
  const bookData = c.req.valid('json');

  try {
    const newBook = await createBook(bookData);
    return c.json(newBook, 201);
  } catch (error) {
    console.error('Error creating book:', error);
    return c.json({ error: 'Failed to create book' }, 500);
  }
})