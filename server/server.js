const dotenv = require('dotenv');
dotenv.config();
const PORT=process.env.PORT||8080;
const path  = require('path')
const db = require('./DB/index')
const exsprees=require('express');
const cors = require('cors');
const mongodbClient = require('mongodb').MongoClient;
const app = exsprees();
app.use(exsprees.json());
app.use(exsprees.urlencoded({extended:true}));
const Blog = require('./Routes/Router');
const { patch } = require('./Routes/Router');
app.use(cors());
db.on('error',()=>{console.log('connection error')})
app.listen(PORT,()=>{
    console.log(`server live on port: ${PORT}`);
})
app.use('/students',Blog)
if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname,'../client/build')))
    
    app.get('*',(req,res)=>{
        res.sendFile(path.join(__dirname,'../client/build','index.html'))
    })
}

