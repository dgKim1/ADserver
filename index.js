const dotenv = require('dotenv')
const express = require("express");
const app = express();
const port = 8080;
const animal = require("./models/animal.js");
var cors = require("cors");
dotenv.config()
app.use(cors());


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/:name", (req, res) => {
  const { name } = req.params;
  Animal = new animal();

  if (name == "dog") {
    Animal.name = "dog";
    Animal.age = 10;
    Animal.sound = "멍멍";
    res.json({ 'name': Animal.name, 'age': Animal.age, 'sound': Animal.sound })
  }
  else if(name == "cat") {
    Animal.name = "cat";
    Animal.age = 4;
    Animal.sound = "야옹";
    res.json({ 'name': Animal.name, 'age': Animal.age, 'sound': Animal.sound })
  }
  else{
    res.json({ 'name': '이름 없음', 'age': 0, 'sound': '소리 없음' })
  }
});

app.listen(port, () => {
  console.log("start");
});


dotenv.config();
//몽구스 연결
const mongoose = require("mongoose");
mongoose
  .connect(
    `mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.elztngu.mongodb.net/?retryWrites=true&w=majority`,
    {
      // useNewUrlPaser: true,
      // useUnifiedTofology: true,
      // useCreateIndex: true,
      // useFindAndModify: false,
    }
  )
  .then(() => console.log("MongoDB conected"))
  .catch((err) => {
    console.log(err);
  });
