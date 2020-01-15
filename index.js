const express = require("express");
const app = express();
app.get("/welcome", (request, response) => {
  response.send({ hi: "Hello" });
});
app.get("/", (req, res) => {
  res.send({ node: "V10.11.0" });
});
app.listen(5000, () => console.log("server running at 5000 port"));
