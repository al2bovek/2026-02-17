import {
  getAllBooksM,
  getBookByIDM,
  postNewBookM,
  updateBookM,
  deleteBookByIDM
} from "../models/booksModel.js";
import AppError from "../utils/appError.js";

export const getAllBooks = async (req, res, next) => {
  try {
    const { sort } = req.query;
    const booksList = await getAllBooksM(sort);

    if (booksList.length === 0) {
      throw new AppError("No found", 404);
    }

    res.status(200).json({
      status: "success",
      requestTime: req.requestTime,
      data: booksList,
    });
  } catch (error) {
    next(error);
  }
};

export const getBookByID = async (req, res, next) => {
  try {
    const { id } = req.params;
    const book = await getBookByIDM(id);

    if (!book) {
      throw new AppError("Invalid ID", 404);
    }

    res.status(200).json({
      status: "success",
      data: book,
    });
  } catch (error) {
   next(error)
  }
};

export const postNewBook = async (req, res) => {
  try {
    const newBook = req.body;

    if (!newBook || !newBook.title) {
      res.status(400).json({
        status: "fail",
        message: "Missing information",
      });
      return;
    }

    const tour = await postNewBookM(newBook);

    res.status(201).json({
      status: "success",
      data: book,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};

export const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const newBookData = req.body;

    const bookUpdated = await updateBookM(id, newBookData);

    if (!bookUpdated) {
      res.status(404).json({
        status: "fail",
        message: "Invalid ID",
      });
      return;
    }

    res.status(201).json({
      status: "success",
      data: bookUpdated,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }

  res.status(200).json({
    status: "success",
    data: newBook,
  });
};

export const deleteBookByID = async (req, res) => {
  try {
    const { id } = req.params;

    const tour = await deleteBookByIDM(id);

    if (!tour) {
      res.status(404).json({
        status: "fail",
        message: "Invalid ID",
      });
      return;
    }

    res.status(200).json({
      status: "success",
      data: book,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};

