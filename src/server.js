import express from "express";

const PORT = 4000;

const app = express();

const home = (req, res) => {
  return res.send("<h1>HELLO</h1>");
}

app.get("/", home);
// app.get("/", (req, res) => res.send("hello"));

const handleListening = () =>
    console.log(`Server listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);
