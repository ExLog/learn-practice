import {
  createBookHandler,
  getBooksHandler,
  getBookHandler,
  updateBookHandler,
  deleteBookHandler,
} from "./handler.js";

const routes = [
  {
    method: "POST",
    path: "/books",
    handler: createBookHandler,
  },
  { method: "GET", path: "/books", handler: getBooksHandler },
  { method: "GET", path: "/books/{bookId}", handler: getBookHandler },
  { method: "PUT", path: "/books/{bookId}", handler: updateBookHandler },
  { method: "DELETE", path: "/books/{bookId}", handler: deleteBookHandler },
];

export default routes;
