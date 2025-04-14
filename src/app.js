// strating point of the application
// here we will initialise the app

const express =require("express");

const app=express();





// this will only handle GET API call on User
// app.get("/user",(req,res)=>{
//    res.send("Hello I'm User");
// })

// app.post("/user",(req,res)=>{
// //this willsave the data
//    res.send("Data recieved successfully");
// })

// app.delete("/user",(req,res)=>{
// //this will delete the data
//    res.send("Data delete successfully");
// })

// app.put("/user",(req,res)=>{
// //this will put the data
//   res.send("Data put successfully");
// })

// app.patch("/user",(req,res)=>{
// //this will patch the data
//    res.send("Data patch successfully");
// })

// this will handle all https methods on /test
// app.use("/test",(req,res)=>{
//    res.send("hello from the dashboard");
// });

// Some advanced routing concept
// app.get("/abc",(req,res)=>{
//    res.send({firstName:"Vivek", lastName: "Shrotriya"});
// });




// if in the path 'a' will be there it will work
// app.get("/a/", (req, res) => {
//   res.send({ firstName: "Vivek", lastName: "Shrotriya" });
// });

// any thing in starting but in last fly must be there
// app.get("/.*fly$/", (req, res) => {
//  res.send({ firstName: "Vivek", lastName: "Shrotriya" });
// });

// query parameter
// app.get("/user", (req, res) => {
//     console.log(req.query);
//    res.send({ firstName: "Vivek", lastName: "Shrotriya" });
// });

app.get("/user/:userid/:name/:password", (req, res) => {
console.log(req.params);
res.send({ firstName: "Vivek", lastName: "Shrotriya" });
});



// lec-3

// app.use("/hello/2",(req,res)=>{
//     res.send("hello from the server Hello2");
//  });

// app.use("/hello",(req,res)=>{
//    res.send("hello from the server Hello");
// });

// app.use( "/test", (req,res)=>{
//    res.send("hello from the server test");
// });



app.listen(7777,()=>{
    console.log("Server is succes")
});