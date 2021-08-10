const dotenv = require("dotenv");
dotenv.config();

const cors = require('cors');
const express = require('express');
const app = express();
const db = require('./DB');
const blogRouter = require('./Routes/Router')
const path = require('path');
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors())

db.on('error', () => { console.log("connection error") })

app.listen(PORT, () => {
    console.log(`mern server is live and up on port: ${PORT}`);
})

app.use('/api/blogs', blogRouter)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
    app.get('*', (req, res)=>{
        res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
    });
  }
