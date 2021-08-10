const studentModel = require("../Models/studentModels");
const studentValidation = require('../validation/StudentValidation')
/////////////////getAll////////////////////////////////
async function getAllStudent(req, res) {
  try {
    await studentModel.find({}, (error, result) => {
      if (error) throw error;
      res.json({ massage: "success", data: result });
    });
  } catch (err) {
    res.json({ massage: "database problem", error: err });
  }
}
/////////////////////////////add////////////////////////////////
async function createNewStudent(req, res) {
  const {errors,isValid} = studentValidation(req.body.students)
  if(!isValid){
   return res.status(400).json(errors)
  }
  try {
    await studentModel.insertMany(req.body.students, (error, result) => {
      if (error) throw error;
      res.json({
        massage: "success, added successfully",
        data: req.body.students,
      });
    });
  } catch (err) {
    res.json({ massage: "database problem", error: err });
  }
}
///////////////////////delete//////////////////////////////
async function deleteStudent(req, res) {
  try {
    await studentModel.findByIdAndDelete(
      req.params.student.id,
      (error, result) => {
        if (error) throw error;
        res.json({});
      }
    );
  } catch (err) {
    res.json({ massage: "database problem", error: err });
  }
}
/////////////////////////////update/////////////////////////
async function updateStudent(req, res) {
  try {
    await studentModel.findByIdAndUpdate(
      req.body.student.id,
      req.body.student,
      (error, result) => {
        if (error) throw error;
        res.json({
          masssage: `${req.body.student.firstName} success,added successfully`,
          data: req.body.student,
        });
      }
    );
  } catch (err) {
    res.json({ massage: "database problem", error: err });
  }
}
////////////////////update///////////////////////////////

module.exports = {
  getAllStudent,
  createNewStudent,
  deleteStudent,
  updateStudent,
};
