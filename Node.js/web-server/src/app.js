const express = require("express");
const path = require("path");

const app = express();

// console.log(path.join(__dirname,"../public"));;

const publicDirPath = path.join(__dirname,"../public");

app.use(express.static(publicDirPath)); // index.html file will load here

app.get("",(req,res)=>{
    res.send("Hello Express..!!");
})

app.get("/about",(req,res)=>{
    res.send("about page");
})

app.get("/weather",(req,res)=>{
    res.send({
        forecast:"forecast",
        location:"location"
    });
})

app.listen(3000,()=>{
    console.log("listening on port 3000");
})