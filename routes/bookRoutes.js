import express from "express";
import validateID from "../validators/id.js";
import validateNewBook from "../validators/newBook.js";
import validate from "../validators/validate.js";
import validateSort from "../validators/filterquery.js";
import { protect } from "../controllers/authController.js";
import { allowAccessTo } from "../controllers/authController.js";

import {
  getAllBooks,
  getBookByID,
  postNewBook,
  updateBook,
  deleteBookByID,
} from "../controllers/booksController.js";

const booksRouter = express.Router();

booksRouter
  .route("/:id")
  .get(validateID, validate, getBookByID)
  .patch(updateBook)
  .delete(deleteBookByID);;
booksRouter
  .route("/")
  .get(protect, allowAccessTo("admin"), validateSort, validate, getAllBooks)
  .post(validateNewBook, validate, postNewBook);

export default booksRouter;
