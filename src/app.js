// strating point of the application
// here we will initialise the app

const express =require("express");
const connectDB = require("./config/database");
const User=require("./models/user");
const app=express();

// postman se jo body se json data bhejte hai usko read karne ke liye ye middle ware use krte hai or har method ke liye chalega
app.use(express.json());

// Create POST /signup API
// to make signup dynamic
app.post("/signup",async(req,res)=>{

// create instance/object of the User Model
// because of req.body our sign up is dynamic
    const user=new User(req.body);

    try{
        await user.save()
   res.send("User added successfully");
    } catch(err){
        res.send("errro");
    }

});

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
