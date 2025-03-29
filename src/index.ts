import express, { Express, Request, Response, Application } from "express";

const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("test");
});

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
