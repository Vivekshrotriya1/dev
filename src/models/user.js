const mongoose = require("mongoose");
// create a schema
const userSchema = new mongoose.Schema({

    firstName:{
      type:String,
      required:true,
      minLength:4,//firstName will be minimum 4 length
      maxLength:50,//firstName will be maximum 4 length
    },
    lastName:{
       type:String,
    },
    emailId:{
       type:String,
       required:true,//this filed is required
       unique:true, //unique id only
       lowercase:true, //automatically change in lower case
       trim:true,
    },
    password:{
       type:String,
       required:true,
    },
    age:{
       type:Number,
       min:18,
    },
    gender:{
       type:String,
       //how to create a custom validation fuction
      //  this validation run when we create a new id
      // if we run when we update then we have to write in patch user api.
       validate(value){
         if(!["male","female","others"].includes(value)){
            throw new Error("Gender data is not Valid");
         }
       },
    },
    photoUrl:{
      type:String,
      default:"https://cubanvr.com/wp-content/uploads/2023/07/ai-image-generators.webp"
    },
    about:{
     type:String,
     default:"This is a default about of the user!",
    },
    skills:{
      type:[String],
    }
},
{
   // this will tell the when was user register and what is the time
   timestamps:true,
});
// create a model
module.exports=mongoose.model("User",userSchema);