const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const DBURL = process.env.DBURL
mongoose.connect("mongodb+srv://ItzhakUser:ItzhakUser@cluster0.zpcar.mongodb.net/myFirstDatabase?retryWrites=true&w=majority ",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>console.log('mongodb connected ...'))
.catch(error=>{
    console.error('connection error' , error);
})

module.exports = mongoose.connection;