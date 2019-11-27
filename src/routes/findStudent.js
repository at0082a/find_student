const express = require("express");
const router = express.Router();

const students = require("../redux/db");

router.get("/:lastName", async (req, res) => {
  let { lastName } = req.params;
  try {
    let student = students.find(student => student.lastName === lastName);
    res.status(200).json({
      data: student
    });
  } catch (err) {
    res.status(400).json({
      message: "Some error occured",
      err
    });
  }
});

router.get("/list", async (req, res) => {
  try {
    let total = students;
    res.status(200).json({
      data: total
    });
  } catch (err) {
    res.status(400).json({
      message: "Some error occured",
      err
    });
  }
});

module.exports = router;
