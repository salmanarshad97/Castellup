const express = require("express");
const app = express();


app.get("/",(req,res)=>{
  
    res.send("Server is created successfully..");
})


app.listen(4000,()=>{
    console.log("Server is running on the port number 4000");
})