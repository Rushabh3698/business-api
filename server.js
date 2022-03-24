require("dotenv").config()

const express = require("express")
const app = express()
const mongoose = require("mongoose")

mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser:true}).then(()=>{
    console.log("connectec to atlas")
})
const db = mongoose.connection
db.on('error',(error)=>console.error(error))
db.once('open',()=>console.log("Connected to Database"))

app.use(express.json())

const businessOrganizationRoutes = require("./routes/businessOrganization")
app.use("/business",businessOrganizationRoutes) 

app.listen(3000,()=>console.log("server started"))