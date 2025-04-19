LEC-5
// const{adminAuth,userAuth}=require("./middlewares/auth")


// app.use("/route",rH,[rH2 , rH3],rH4,rH5);
// multiple route handlers in one route handlers

// app.use("/user",
//  (req,res,next)=>{
//     console.log("Route1");
// //     res.send("Response 1");
//     next();
//  },
//  (req,res,next)=>{
//    console.log("Route2");
// //    res.send("Response 2");
//    next();
//  },
//  (req,res,next)=>{
//    console.log("Route3");
// //    res.send("Response 3");
//    next();
//   },
//   (req,res)=>{
//     console.log("Route 4");
//     res.send("Response 4");
//   }
// );

// Middlewares and working

// GET/users=>middleware chain =>request handlet

// app.use("/",(req,res,next)=>{
// //    res.send("0 Handling/route");
//    next( );
// });

// app.get("/user",
//   (req,res,next)=>{
//     console.log("Handling /user route");
//     next();
//   },
//   (req,res,next)=>{
//      console.log("1 Handling /user route");
// //      res.send("response 2");
//      next();
//    },
//    (req,res,next)=>{
//      console.log("2 Handling /user route");
//        res.send("3 response");
//     }
// );


// why we use of middleware
//handle Auth middleware for all GET,POST,PATCH,DELETE requests

// app.use("/admin",adminAuth);

// // app.use("/user",userAuth);

// app.get("/user/login",(req,res)=>{
//    res.send("login successfull");
// })

// app.get("/user",userAuth,(req,res)=>{
//    res.send("user data send ");
// })

// app.get("/admin/getdata",(req,res)=>{
//   res.send(" Data send");
// });

// app.get("/admin/deletedata",(req,res)=>{
//   res.send("All Data Deleted");
// });

// Error Handling
// app.use("/",(err,req,res,next)=>{
//   if(err){
//      //log your answer
//      res.status(500).send("Something went wrong");
//   }
// });

// app.get("/getUserData",(req,res)=>{
//     try{
//  // Logic of DB call and get user data
//  throw new Error("hbwc");
//  res.send("User Data sent");
//     }
//     catch(err){
//     res.status(500).send("Some Error contact support team");
//     }
// });

// app.use("/",(err,req,res,next)=>{
//     if(err){
//        //log your answer
//        res.status(500).send("Something went wrong");
//      }
// });


// LEC-4

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

// app.get("/user/:userid/:name/:password", (req, res) => {
// console.log(req.params);
// res.send({ firstName: "Vivek", lastName: "Shrotriya" });
// });



// LEC-3

// app.use("/hello/2",(req,res)=>{
//     res.send("hello from the server Hello2");
//  });

// app.use("/hello",(req,res)=>{
//    res.send("hello from the server Hello");
// });

// app.use( "/test", (req,res)=>{
//    res.send("hello from the server test");
// });