import express, { Request, Response } from "express";
import config from "./config";
import db from "./config/db";
import { errorHandler } from "./middleware/error.middleware";
import userRoutes from "./routes/user.route";

// Express app initialization
const app = express();
app.use(express.json());

// initializing DB
db();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
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

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});
