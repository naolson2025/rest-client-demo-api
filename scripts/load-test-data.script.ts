import { createBook, deleteAllBooks } from "../src/db/queries";

const books = [
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    publishedDate: new Date("1979-10-12"),
  },
  {
    title: "The Restaurant at the End of the Universe",
    author: "Douglas Adams",
    publishedDate: new Date("1980-10-01"),
  },
  {
    title: "Life, the Universe and Everything",
    author: "Douglas Adams",
    publishedDate: new Date("1982-08-01"),
  },
  {
    title: "So Long, and Thanks for All the Fish",
    author: "Douglas Adams",
    publishedDate: new Date("1984-11-01"),
  },
  {
    title: "Mostly Harmless",
    author: "Douglas Adams",
    publishedDate: new Date("1992-10-12"),
  },
];

async function main() {
  console.log("Deleting all books...");
  await deleteAllBooks();
  console.log("Books deleted.");

  console.log("Creating books...");
  for (const book of books) {
    await createBook(book);
  }
  console.log("Books created.");
}

main();