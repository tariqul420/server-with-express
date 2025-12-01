import express, { Request, Response } from "express";
import config from "./config";
import db from "./config/db";
const app = express();

// parser
app.use(express.json());

// init db
db();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});
