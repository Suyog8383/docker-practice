import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send({
    name: "Suyog Nagawade",
  });
});

app.listen(5500, () => {
  console.log("server running on 5500 port");
});
