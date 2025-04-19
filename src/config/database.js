const mongoose=require("mongoose");

const connectDB=async()=>{
    await mongoose.connect(
      "mongodb+srv://vivekshrotriyas123:t3fX6Ehn0C5Gyfip@namastedev.woya6rb.mongodb.net/devTinder"
    )
};
module.exports=connectDB;