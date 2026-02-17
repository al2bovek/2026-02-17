 import { body, param, query } from "express-validator";

export const createTopicValidators = [
  body("title").isLength({ min: 3 }),
  body("description").optional().isLength({ max: 500 }),
  body("options").isArray({ min: 2, max: 5 }),
  body("options.*").isString().notEmpty(),
];

export const voteValidators = [
  param("id").isInt(),
  body("option").isString().notEmpty(),
];

export const topicIdParamValidators = [param("id").isInt()];

export const listTopicsValidators = [
  query("search").optional().isString(),
  query("limit").optional().isInt({ min: 1, max: 100 }),
  query("offset").optional().isInt({ min: 0 }),
];
