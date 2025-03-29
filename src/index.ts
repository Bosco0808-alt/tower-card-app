import express, { Express, Request, Response, Application } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("test");
});
