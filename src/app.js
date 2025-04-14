// strating point of the application
// here we will initialise the app

const express =require("express");

const app=express();

app.use("/hello/2",(req,res)=>{
    res.send("hello from the server Hello2");
 });

app.use("/hello",(req,res)=>{
   res.send("hello from the server Hello");
});

app.use( "/test", (req,res)=>{
   res.send("hello from the server test");
});

app.use("/",(req,res)=>{
   res.send("hello from the dashboard");
});

app.listen(7777,()=>{
    console.log("Server is succes")
});