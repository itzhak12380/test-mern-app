const validator = require("validator");
const isEmpty = require('is-empty');
module.exports = function validateStudentData(data){
    let errors = {};
    data.firstName = isEmpty(data.firstName) ? "":data.firstName;
    data.lastName = isEmpty(data.lastName) ? "":data.lastName;
    data.Email = isEmpty(data.Email) ? "":data.Email;
    data.age = isEmpty(data.age) ? "":data.age;
    if (validator.isEmpty(data.firstName)) {
        errors.firstName = "first name field is required";
    }
   else if (validator.isEmail(data.Email)) {
        errors.Email = "the email is invalid";
    }
   else if (validator.isEmpty(data.lastName)) {
        errors.lastName = "the  last name field is required";
    }
   else if (validator.isEmpty(data.lastName)) {
        errors.age = "the age field is required";
    }
    return{
        errors,
        isValid:isEmpty(errors)
    }
}