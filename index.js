import express from "express";
import mongoose from "mongoose";
import router from "./router.js";
// import cors from 'cors'
const cors = require('cors')

const PORT = process.env.PORT || 5001; //http://localhost:5001/api
const DB_URL = 'mongodb+srv://pinkPiglin:Kostya3415@cluster0.dcpwxsg.mongodb.net?retryWrites=true&w=majority';
const app = express()
app.use(cors())
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
