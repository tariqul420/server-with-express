import express, { Request, Response } from "express";
const app = express();
const port = 5000;

// parser
// for json
app.use(express.json());
// for form data
app.use(express.urlencoded());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.post("/", (req: Request, res: Response) => {
  console.log(req.body);

  res.status(201).json({
    success: true,
    message: "API is working.",
  });
});

app.listen(port, () => {
  console.log(`"Server with express app" listening on port ${port}`);
});
