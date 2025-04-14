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