LEC-3
-create a repository
-initilaise the repository
-node_modules,package.json,package-lock.json
-install express
-create a server
-listen to posr 7777
-write request handlers for /test,/hello
-intsll nodemon and update scripts inside     pacakge.json
-what are dependencies
-what is the use of "-g" while npm install is
-differenece between caret and tidle (^ vs ~)

LEC-4
-initialise git
-create .gitignore
-create a remote repo on github
-push all code to remote origin
-play with routes and route extensions ex. /hello, / , hello/2, /xyz
-order of the routes matter a lot
-Install Postman app and make a workspace/collection > test API call
-Write logic to handle GET,POST,PATCH,DELETE PI Calls and test them on Postman
-Explore routing and use of ?,*,(),+ in the routes
-Use of regex in routes /a/,/*fly$/
-Reading the query params in the routes
-Readibg the dynamic routes

LEC-5
-Multiple Route Handlers - Play with the code
-next()
-next function and errors along with res.send()
-app.use("/route",rH,[rH2 , rH3],rH4,rH5);
-what is middleware, why do we need it?
-how express JS basically handles request behind the scenes(middleware chain)
-Difference between app.use() vs app.all()
-Write a dummy auth middleware for admin
-Write a dummy auth middleware for all user routes, except /user/login
-Error Handling using  app.use("/",(err,req,res,next)=>{});

LEC-6
-create a free cluster on mongodb official website(mongodb atlas)
-install mongoose library
-connext your application to the database "Connection-url"/devTinder not the cluster
-Call the connectDB function and connect to database before starting application on 7777 server
-create a user Schema and user Model
-Create a POST /signup API to add data to database
-Push some documents using API calls from postman
-Error handling using try,catch

LEC-7
-what is the difference between JS object and JSON.
-Add the express.json middleware to your app
-Make your signup API dynamic to recive data from  the end user(postman,browser etc).
-User.findOne with duplicate email ids, which object returned first.
-API -Get user by email
-API- Feed API - GET/Feed - get all the users from the database.
-Api - get user by id(homework);
-Create a delete user API
-difference between patch and put
-API- create a update API for update a user
-Explore the Mongoose Documentation for Model Methods
-What are options in a Model.findOneAndUpdate method, explore more about  it.
- API - update the user with email id

LEC-8
-explore schema options from the documentation.
-add required,unique,lowercase,min,minlength,max,maxlength,trim
-Add default value
-Create a custom validation function for gender
-Improve the DB Schema validation- put all validation on each filed in schema
-Add timestamps to the userSchema
-Add API Level validation on Patch request and sign up Post API
-DATA Sanitizing - Add API validation for each field
-Install validator
-explore validator libraray function ans Use validator function for email,photoUrl,password
-NEVER TRUST req.body

LEC9
-Validate daat in Signup API(using helper function)
-Install bcrypt package
-Create a passwordHash using bcrypt.hash and save the user is encrypted password
-Create login APi
-Comapre the passwords and throw errors if email or password is invalid
