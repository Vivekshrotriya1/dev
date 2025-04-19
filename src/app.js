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

// Get user by email
app.get("/user",async (req,res)=>{
    const userEmail=req.body.emailId;

   try{

    // is two user has same email id so find will return the both users data
//    const users= await User.find({emailId: userEmail});
//    if(users.length===0){
//     res.status(400).send("user not found");
//    }
//    else{
//     res.send(users);
//    }


// to find only one user we use findOne() and return the oldest user
    const user= await User.findOne({emailId: userEmail});

    if(!user){
        res.status(404).send("user not found");
    }
    else{
      res.send(user);
    }
   }
   catch(err){
    res.status(400).send("Some went wrong...");
   }




});

// Feed API -GET/feed -get all the users from the database
app.get("/feed",async (req,res)=>{
   try{
    // it will get the all users data which is present in datbase
        const users =await User.find({});
    res.send(users);
   }
   catch(err){
    res.status(400).send("Some went wrong...");
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
