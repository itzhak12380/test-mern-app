const dotenv = require('dotenv');
dotenv.config();
const path  = require('path')
const db = require('./DB/index')
const exsprees=require('express');
const cors = require('cors');
const mongodbClient = require('mongodb').MongoClient;
const Blog = require('./Routes/Router');
// const { patch } = require('./Routes/Router');
const PORT=process.env.PORT||8080;
const app = exsprees();
app.use(exsprees.json());
app.use(exsprees.urlencoded({extended:true}));
app.use(cors());
db.on('error',()=>{console.log('connection error')})
app.listen(PORT,()=>{
    console.log(`server live on port: ${PORT}`);
})

/* comment */
app.use('/students',Blog)
if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname,'../client/build')))
    
    app.get('*',(req,res)=>{
        res.sendFile(path.join(__dirname,'../client/build','index.html'))
    })
}

