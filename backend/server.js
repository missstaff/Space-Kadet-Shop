import express from "express";
import data from "./data.js";

const Port = process.env.PORT || 5000;
const app = express();

app.get("/", (req, res) => {
  res.send("Server is ready!");
});

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.listen(Port, () => {
  console.log(`Serve at http://localhost:${Port}`);
});
