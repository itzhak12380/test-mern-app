const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const studentSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: Date.now,
  },
  Email: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});
module.exports=mongoose.model('blog',studentSchema)