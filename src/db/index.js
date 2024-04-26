import mongoose from "mongoose";
import express from "express";
import { DB_NAME } from "../constants.js";
import dotenv from "dotenv";

dotenv.config({
    path:"./src/env"
})

const app = express();

const connectDB = async () => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MONGODB connected !! DB host : ${connectionInstance.connection.host}`)
        app.on("error",()=>{
            console.log("express unable to communicate :",error);
            process.exit(1);
        })

        app.listen(process.env.PORT,()=>{
            console.log(`Listening at port ${process.env.PORT}`)
        })
    }
    catch(error){
        console.log("DB connection failed",error);
        process.exit(1);
    }
}

export default connectDB;