const express=require('express');
const mongoose=require("mongoose");
const dotenv=require("dotenv");
const authRoute=require("./routes/authRoutes.js")
const foodRoute=require("./routes/foodRoutes.js")

const path=require("path")
const app=express();

dotenv.config();

mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true}).then(()=>{
    console.log("Mongo db connected")
}).catch((err)=>console.log(err));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth",authRoute);
app.use("/api/food",authRoute);

app.listen(8800,()=>{
    console.log("backend server is running")
})