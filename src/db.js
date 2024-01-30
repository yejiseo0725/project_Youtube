import mongoose from "mongoose";

// '/' 뒤에 database 이름 넣어주기
mongoose.connect("mongodb://127.0.0.1:27017/project_Youtube");

const db = mongoose.connection;

const handleOpen = () => console.log("Connected to DB :D");
const handleError = () => console.log("DB error", error);

db.on("error", handleError);
db.once("open", handleOpen)



