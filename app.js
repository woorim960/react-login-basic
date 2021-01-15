const express = require("express");
const bodyParser = require("body-parser");
const User = require("./models/User");
const KEY = require("./config/dev");

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const mongoose = require("mongoose");
const { userInfo } = require("os");
mongoose
  .connect(KEY.mongoURI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB 연결 완료"))
  .catch(console.error);

app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/register", (req, res) => {
  const user = new User(req.body);

  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

app.listen(PORT, () => console.log(`서버가동 ${PORT}`));
