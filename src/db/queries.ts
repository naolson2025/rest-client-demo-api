import type { NewBook } from "../types";
import { db } from "./db";
import { book } from "./schema";
import { eq } from 'drizzle-orm';

export async function createBook(data: NewBook) {
  const [result] = await db.insert(book).values(data).returning();
  return result;
}

export async function getBooks() {
  const result = await db.select().from(book);
  return result;
}

export async function getBookById(id: number) {
  const [result] = await db.select().from(book).where(eq(book.id, id));
  return result;
}

export async function updateBook(id: number, data: Partial<NewBook>) {
  const result = await db
    .update(book)
    .set(data)
    .where(eq(book.id, id));
  return result;
}

export async function deleteBook(id: number) {
  const result = await db.delete(book).where(eq(book.id, id));
  return result;
}

export async function deleteAllBooks() {
  const result = await db.delete(book);
  return result;
}