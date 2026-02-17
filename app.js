import express from "express";
import booksRouter from "./routes/bookRoutes.js";
import writerRouter from "./controllers/writerController.js";
import usersRouter from "./routes/userRoutes.js";
import cookieParser from "cookie-parser";
import { apiKeyAuth } from "./middleware/auth.js"; 

import notFound from "./middleware/notFound.js";
import errorHandler from "./middleware/errorHandler.js";
const app = express();

app.use(express.json());

app.use(cookieParser());

app.use(apiKeyAuth);

app.use((req, _, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use(apiKeyAuth);
app.use("/api/v1/users", usersRouter);
app.use("/api/v1/books", booksRouter);
app.use("/api/v1/writer", writerRouter);


app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const errStatus = err.status || "error";
  const errMessage = err.message || "Internal server Error";

  res.status(statusCode).json({
    status: errStatus,
    message: errMessage,
  });
});

app.use(notFound);
app.use(errorHandler);

export default app;
