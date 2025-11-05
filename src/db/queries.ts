import type { NewBook } from "../types";
import { db } from "./db";
import { book } from "./schema";
import { eq } from 'drizzle-orm';

export async function createBook(data: NewBook) {
  const result = await db.insert(book).values(data);
  return result;
}

export async function getBooks() {
  const result = await db.select().from(book);
  return result;
}

export async function getBookById(id: string) {
  const [result] = await db.select().from(book).where(eq(book.id, id));
  return result;
}

export async function updateBook(id: string, data: Partial<NewBook>) {
  const result = await db
    .update(book)
    .set(data)
    .where(eq(book.id, id));
  return result;
}

export async function deleteBook(id: string) {
  const result = await db.delete(book).where(eq(book.id, id));
  return result;
}