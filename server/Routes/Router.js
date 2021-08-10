const blog =  require("express").Router()
const controllers = require('../Controllers/studentController')
const { asyncWrapper } = require("../Controllers/utils");

// blog.get('/', asyncWrapper(controllers.getAllStudent))
// blog.get('/:id',controllers.GetById)
// blog.post('/',controllers.CreateStudent)
// blog.delete('/:id',controllers.DeletById)
// blog.put('/:id',controllers.UpdateById)
module.exports = blog