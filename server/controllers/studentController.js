const studentModel=require('../Models/studentModels')
const mongo = require('mongodb')
async function getAllStudent(req, res) {
    const result = await studentModel.find({});
    return { message:"success", data: result };
}

function CreateStudent(req,res){
    try{
        studentModel.insertMany(req.body.student,(erro, result)=>{
            res.json(result)
        })
    }
    catch(error) {
        res.json({message:"faild",error:error})
    }
}
async function GetById(req,res){
    try{
        studentModel.find(mongo.ObjectID(req.params.id),(error,result)=>{
                if(error) throw error
                res.json(result)
        })
    }
    catch(error){
        res.json({message:"faild",error:error})
    }
}
async function DeletById(req,res){
    try{
        studentModel.deleteOne({_id:mongo.ObjectID(req.params.id)},(error,result)=>{
            if(error) throw error
            res.json(result)
        })
    }
    catch(error){
        res.json({message:"faild",error:error})
    }
}
async function UpdateById(req,res){
    try{
        studentModel.updateOne({_id:mongo.ObjectID(req.params.id)},{$set:req.body.student},(error,result)=>{
            if(error) throw error
            res.json({message:"seccess",data:result})
        })
    }
    catch(error){
        re.json({message:"faild",error:error})
    }
}
module.exports = {
    getAllStudent,
    CreateStudent,
    GetById,
    DeletById,
    UpdateById
}