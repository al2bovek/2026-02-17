import { query } from "express-validator";

const allowedSortQueries = ["ASC", "DESC"];

const validateSort = [
  query("sort")
    .optional()
    .custom(async (value) => {
      if (!allowedSortQueries.includes(value)) {
        throw new Error(
          "Difficulty mus be one of " + allowedSortQueries.join(", "),
        );
      }
      return true;
    }),
];

export default validateSort;
