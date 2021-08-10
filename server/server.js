const dotenv = require("dotenv");
dotenv.config();
const studentRouter = require("./Routers/studentsRouter");
const PORT = process.env.PORT || 8080;
const db = require("./DB/index");
const express = require("express");
const cors = require("cors");
const path = require("path")
// const mongodbClient = require("mongodb").mongoClient;
const connections = require("./DB");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
db.on("error", () => {
  console.log("connection error");
});

app.listen(PORT, () => {
  console.log(`server live on port: ${PORT}`);
});



app.use("/students", studentRouter);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
  app.get('*', (req, res) => {
    res, sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}
