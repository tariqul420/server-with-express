import express, { Request, Response } from "express";
import config from "./config";
const app = express();

// parser
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});
