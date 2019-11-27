const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const port = process.env.PORT || 3001;

const findStudentRouter = require("../routes/findStudent");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static('redux'));
app.use(bodyParser.json());
app.use('/students', findStudentRouter);

app.listen(port, function() {
  console.log("Runnning on " + port);
});