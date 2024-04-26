import mongoose from "mongoose";
import express from "express";
import { DB_NAME } from "../constants.js";
import dotenv, { config } from "dotenv";

dotenv.config({
    path:"./env"
})

const app = express();

const connectDB = async () => {
    try{
        const connectionInstance = await mongoose.connect(`mongodb+srv://Tarun:Tarun11@tarun123.cdy04dh.mongodb.net/${DB_NAME}`)
        console.log(`\n MONGODB connected !! DB host : ${connectionInstance.connection.host}`)
        app.on("error",()=>{
            console.log("express unable to communicate :",error);
            process.exit(1);
        })

        app.listen(8000,()=>{
            console.log(`Listening at port 8000`)
        })
    }
    catch(error){
        console.log("DB connection failed",error);
        process.exit(1);
    }
}

export default connectDB;