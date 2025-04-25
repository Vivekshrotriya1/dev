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
        res.send("error");
    }

});

// Get user by email
app.get("/user",async (req,res)=>{
    const userEmail=req.body.emailId;
//   console.log(userEmail);
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

// delete api
app.delete("/user",async (req,res)=>{
   const userId=req.body.userId;

   try{
    //   const user =await User.findByIdAndDelete({_id:userId})
    // or same
      const user =await User.findByIdAndDelete(userId);
      res.send("User deleted successfully");
   }
   catch(err){
    res.status(400).send("Some went wrong...");
   }

})

// Create a API to upadte data of the user
// isme me agar kuch new filed add karna chaunga nhi hoga jab tak vo filed schema me add nhi ho jati
app.patch("/user/:userId",async (req,res)=>{
    // const userId=req.body.userId;
    // user id allowed upadte me nahi dalni to ye karenge or route me bhi change karnege
    const userId=req.params?.userId;
    const  data =req.body;
    try{

    //   unwanted updates ko rokna hai
      const ALLOWED_UPDATES =["photoUrl","about","gender","age","skills"];
      const isUpdateAllowed = Object.keys(data).every((k)=>
        ALLOWED_UPDATES.includes(k)
      );
      if(!isUpdateAllowed){
        throw new Error("Upadte Not Allowed");
      }

      if(data?.skills.length>10){
        throw new Error("Skills cannot be more then 10");
      }
      const user = await User.findByIdAndUpdate({_id:userId},data,{
        returnDocument:"after",
        runValidators:true,
      });
      console.log(user);
      res.send("User updated successfully");
    }
    catch(err){
        res.status(400).send("Upadte fail:"+ err.message );
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

