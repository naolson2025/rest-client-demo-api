import Database from 'better-sqlite3';
import { join } from 'path';

const dbPath = join('.', 'books.sqlite');

let db: Database.Database;

export const dbConn = () => {
  if (!db) {
    db = new Database(dbPath);

    applyMigrations(db);
  }

  return db;
};

export const applyMigrations = (db: Database.Database) => {};
