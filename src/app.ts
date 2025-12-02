import express, { Request, Response } from "express";
import db from "./config/db";
import todoRoutes from "./features/todo/todo.route";
import userRoutes from "./features/user/user.route";
import { errorHandler } from "./middlewares/error.middleware";

// Express app initialization
const app = express();
app.use(express.json());

// initializing DB
db();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Next Level Developers!");
});

// routes
app.use("/api/users", userRoutes);
app.use("/api/todos", todoRoutes);

// Unhandled Routes
app.use((req, res, next) => {
  const error: any = new Error(`Can't find ${req.originalUrl} on this server!`);
  error.status = 404;
  next(error);
});

// Global error handler
app.use(errorHandler);

export default app;
