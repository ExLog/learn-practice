import { nanoid } from "nanoid";
import { fail } from "./utils.js";
import { books } from "./books.js";

export function createBookHandler(request, h) {
  const {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
  } = request.payload;

  if (!name) {
    return fail(h, { message: "Gagal menambahkan buku. Mohon isi nama buku" });
  }

  if (readPage > pageCount) {
    return fail(h, {
      message:
        "Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount",
    });
  }

  const id = nanoid();
  const finished = pageCount === readPage;
  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;

  const book = {
    id,
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    finished,
    reading,
    insertedAt,
    updatedAt,
  };

  books.push(book);

  return h
    .response({
      status: "success",
      message: "Buku berhasil ditambahkan",
      data: { bookId: id },
    })
    .code(201);
}

export function getBooksHandler(request) {
  const { name, reading, finished } = request.query;

  let result = books;
  // filter by name
  if (name) {
    result = result.filter((book) =>
      book.name.toLowerCase().includes(name.toLowerCase()),
    );
  }

  // filter by reading
  if (reading) {
    result = result.filter((book) => {
      if (reading === "1") {
        return book.reading;
      } else if (reading === "0") {
        return !book.reading;
      } else {
        return book;
      }
    });
  }

  // filter by finished
  if (finished) {
    result = result.filter((book) => {
      if (finished === "1") {
        return book.finished;
      } else if (finished === "0") {
        return !book.finished;
      } else {
        return book;
      }
    });
  }

  return {
    status: "success",
    data: {
      books: result.map((book) => {
        return {
          id: book.id,
          name: book.name,
          publisher: book.publisher,
        };
      }),
    },
  };
}

export function getBookHandler(request, h) {
  const { bookId } = request.params;
  const book = books.find((book) => book.id === bookId);
  if (!book) {
    return fail(h, { message: "Buku tidak ditemukan" }, 404);
  }

  return {
    status: "success",
    data: { book },
  };
}

export function updateBookHandler(request, h) {
  const { bookId } = request.params;
  const {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
  } = request.payload;

  if (!name) {
    return fail(h, { message: "Gagal memperbarui buku. Mohon isi nama buku" });
  }

  if (readPage > pageCount) {
    return fail(h, {
      message:
        "Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount",
    });
  }

  const bookIdx = books.findIndex((book) => book.id === bookId);
  if (bookIdx === -1) {
    return fail(
      h,
      { message: "Gagal memperbarui buku. Id tidak ditemukan" },
      404,
    );
  }

  books[bookIdx] = {
    ...books[bookIdx],
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
    updatedAt: new Date().toISOString(),
  };

  return {
    status: "success",
    message: "Buku berhasil diperbarui",
  };
}

export function deleteBookHandler(request, h) {
  const { bookId } = request.params;
  const bookIdx = books.findIndex((book) => book.id === bookId);
  if (bookIdx === -1) {
    return fail(h, { message: "Buku gagal dihapus. Id tidak ditemukan" }, 404);
  }

  books.splice(bookIdx, 1);

  return {
    status: "success",
    message: "Buku berhasil dihapus",
  };
}
