import express from "express";
import cors from "cors"
import welcome from "./controllers/welcome.js"
import  action1 from "./controllers/action.js"
import articles from "./routes/articles.js"
import mongoose from "mongoose"






const app=express()
app.use(cors())





app.get("/api/v1",welcome)
app.use("/api/v1/action",action1)
app.use("/api/v1/articles",articles)


const port=5300
const connectToMongodb=()=>{
    mongoose.connect("mongodb+srv://keynesbizimana:KEN12345@cluster0.bhe3e81.mongodb.net/?retryWrites=true&w=majority")

    .then(()=>{
        console.log("database connected succesuflly")
    }).catch((err)=>{
        console.log("failed to cennerct")
    })
}

app.listen(port,()=>{
        console.log("server is running on 3000")
        connectToMongodb()
    })
    