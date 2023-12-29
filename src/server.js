import express from "express";

const PORT = 4000;

const app = express();

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
}
const privateMiddleware = (req, res, next) => {
  const url = req.url;
  if (url === "/protected") {
    return res.send("<h1>허용되지 않아요. Not Allowed!</h1>")
  }
  console.log("You may continue. 당신은 통과에요! ^_^");
  next();
}
const handleHome = (req, res) => {
  return res.send("I love you :D");
};

const handledProtected = (req, res) => {
  return res.send("Welcome to the private lounge...:3");
}

app.use(logger);
app.use(privateMiddleware);

app.get("/", handleHome);
app.get("/protected", handledProtected);

const handleListening = () => console.log(`Listening on port http://localhost:${PORT}🧀`);

app.listen(4000, handleListening);

