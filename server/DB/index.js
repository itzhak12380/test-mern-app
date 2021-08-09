const mongoose = require('mongoose');
const DBURL = process.env.DBURL
mongoose.connect(DBURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
    
})
.then(()=>console.log('mongodb connected ...'))
.catch(error=>{
    console.error('connection error' , error);
})

module.exports = mongoose.connection;