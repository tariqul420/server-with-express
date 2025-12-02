import express, { Request, Response } from "express";
import db from "./config/db";
import { errorHandler } from "./middleware/error.middleware";
import userRoutes from "./routes/user.route";

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

// Unhandled Routes
app.use((req, res, next) => {
  const error: any = new Error(`Can't find ${req.originalUrl} on this server!`);
  error.status = 404;
  next(error);
});

// Global error handler (should be after routes)
app.use(errorHandler);

export default app;
