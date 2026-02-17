import { body } from "express-validator";

const allowedDifficulties = ["easy", "medium", "hard"];

const validateNewBook = [
  body().notEmpty().withMessage("Request body must conatin data"),

  //validate name field

  body("title")
    .isString()
    .withMessage("Name must be a string")
    .isLength({ min: 3, max: 10 })
    .withMessage("name must be between 3 and 10 symbols")
    .notEmpty()
    .withMessage("Name is required"),
];

export default validateNewBook;
