import express from "express";
import mongoose from "mongoose";
import router from "./router.js";
// const cors = require('cors')
import cors from 'cors'

const PORT = process.env.PORT || 5001; //http://localhost:5001/api
const DB_URL = 'mongodb+srv://pinkPiglin:Kostya3415@cluster0.dcpwxsg.mongodb.net?retryWrites=true&w=majority';


const whitelist = ['https://pinkpiglin.github.io', 'http://localhost:3000']
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
const app = express()
app.use(cors(corsOptions))
app.use(express.json())
mongoose.set('strictQuery', true);

app.use('/api', router)
const startApp = async ()=>{
    try{
        await mongoose.connect(DB_URL,{dbName:'MyData'});
        app.listen(PORT, ()=>console.log('SERVER STARTED'))
    }catch(e){
        console.error('Error',e)
    }
}

startApp()
