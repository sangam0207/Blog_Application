const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser=require('cookie-parser')
require("./db/conn.js");
const authRouter = require("./routes/authRouter.js");
const postRouter = require("./routes/postRouter.js");
dotenv.config();
const port = process.env.PORT || 8080;
const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser())
app.use(authRouter);
app.use(postRouter);
app.get("/", (req, res) => {
  res.send("I am from server");
});
app.listen(port, () => {
  console.log(`server is running on port number ${port}`);
});
