// strating point of the application
// here we will initialise the app

const express =require("express");
const connectDB = require("./config/database");
const User=require("./models/user");
const app=express();

// Create POST /signup API
app.post("/signup",async(req,res)=>{
    // create instance/object of the User Model
    const user=new User({
        firstName:"Lalo",
        lastName:"Shrotriya",
        emailId:"rahul@.com",
        password:"r123",
        age:27,
        gender:"Male",
    })
    // then save the data in the User Model
    // save() give me promise so we use await and async
    // generally we use try catch block for save()
    try{
        await user.save()
   res.send("User added successfully");
    } catch(err){
        res.send("errro");
    }

})

connectDB()
.then(()=>{
    console.log("Database connection successfull");
    app.listen(7777,()=>{
    console.log("Server is succes")
});
})
.catch((err)=>{
    console.log("Database connection is not successfull");
});
