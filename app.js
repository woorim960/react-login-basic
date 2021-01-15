const express = require("express");
const app = express();
const PORT = 3000;

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://woorim960:zx1zx1zx1@woorim-it-blog.gqsrm.mongodb.net/<dbname>?retryWrites=true&w=majority",
    {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("MongoDB 연결 완료"))
  .catch(console.error);

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(PORT, () => console.log(`서버가동 ${PORT}`));
