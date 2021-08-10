const mongoose = require("mongoose");

const Schema = mongoose.Schema;
////////////////no reqired////////////////
const studentSchema = new Schema({
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  Email: {
    type: String,
    require: true,
  },
  age: {
    type: Number,
    require: true,
  }
});
module.exports = mongoose.model("Student", studentSchema);
