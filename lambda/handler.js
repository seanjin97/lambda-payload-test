const serverless = require("serverless-http");
const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from root!",
  });
});

app.get("/hello", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from path!",
  });
});

app.post("/test", (req, res) => {
  const body = JSON.parse(req.body)
  console.log("payload has been processed")
  return res.status(200).json({
    message: "Hello from test!",
    length: body.length,
    glimpse: body.slice(0, 1),
    requestSize: req.socket.bytesRead
  });
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

module.exports.handler = serverless(app);
