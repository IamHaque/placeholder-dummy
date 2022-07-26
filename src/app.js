const express = require("express");
const app = express();
const port = process.env.PORT || 1337;

app.get("/", (_, res) => {
  res.sendFile("./index.html", { root: __dirname });
});

app.listen(port, () => console.log("Server started"));
