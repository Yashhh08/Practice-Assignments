const express = require("express");

const app = express();

const port = 3001;

app.get("/",(req,res)=>{
    res.send("using express");
});

app.get("/about",(req,res)=>{
    res.send("about page");
});

app.listen(port,()=>{
    console.log("listening on port 3000");
})