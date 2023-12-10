// START importing packages

const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const express = require('express');
const app = express();
const DB = require('./database.js');
const path = require("path");
const {peerProxy} = require("./peerProxy.js")

// END importing packages

// Function for setting Authentication Cookie, modifies the header to add authentication cookie
function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
} // END setAuthCookie (Not Choco Chip)

const authCookieName = 'token';

const port = process.argv.length > 2 ? process.argv[2] : 4000;  // Declare express Server port #

app.use(express.json());

app.use(cookieParser());  

app.use(express.static('public'));

app.set('trust proxy', true);



// 

// START user API Routes
var userRoutes = express.Router();
app.use('/api/v1/user', userRoutes);

/*
    {/api/v1/user/create} ENDPOINT
    Purpose: 
    Requirements:
        email(string) - useremail for database checking
        password(string) - user password to authenicate
    Returns: 
        Success - Creates a new user/token
        Failure - Gives 409 and doesn't duplicate user

*/
userRoutes.post("/create", async (_req, res) => {
    // Get email and password from req.body
    const { email, password } = _req.body;
    // Check if user exists in database
    if(await DB.getUser(email)) {
      // Send 409 status that user already exists in database
        res.status(409).send({ msg: "Existing User" });
    } else {
        // Creates new user using email and poasword from req.body
        const user = await DB.createUser(email, password);
        // Setting Authentication token for user session
        setAuthCookie(res, user.token);
        // Send the user id to the frontend 
        res.send({
            id: user._id
        })

    }
}) // END /api/v1/user/create

/*
    {} ENDPOINT
    Purpose: 
    Requirements:
    Returns: 

*/
userRoutes.post("/login", async (_req, res) => {
    // Getting email and password values from req.body
    const { email, password } = _req.body
    // Getting the user from the DB using the email
    const user = await DB.getUser(email);
    // Checking to see if the database sent back user information
    if(user) {
        // Checking to see if provided password is the same as the password stored in the database
        if(await bcrypt.compare(password, user.password)) {
            // set Auth Cookie header using user.token
            setAuthCookie(res, user.token);
            // return id to front end
            return res.send({ id: user._id });
        }

    }
    // User info didn't exist so there is no authentication for credentials provided
    res.status(401).send({ msg: "Not Anthenticated" });

}); // END /api/v1/user/login

/*  DO IN OWN TIME
    {Login} ENDPOINT
    Purpose: 
    Requirements:
    Returns: 

*/

userRoutes.delete('/logout', (_req, res) => {
      // Auth cookie is cleared
      res.clearCookie(authCookieName);
      // Server indicates process is completed and won't return anything aka (204)
      res.status(204).end();
}); // End /apit/v1/user/delete


/*
    {} ENDPOINT
    Purpose: 
    Requirements:
    Returns: 

*/
userRoutes.get("/:email", async (_req, res) => {
    // Getting user email from request parameters
    const { email } = _req.params;
    // Get user from DB using email from request
    const user = await DB.getUser(email);
    // Check if user exist
    if(user) {
        // Gets the token from the request
        const token = _req?.cookies.token;
        // Sends back the email or token from authenticated results
        return res.send({ email: user.email, authenticated: token === user.token });
    }
    // Sending an error for DB or Server error
    res.status(404).send({ msg: "Unknown" });
}); // END /api/v1/user/:email 

// END user api routes


// START website page ROUTES

app.get("/", (_req, res)=> {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/Register", (_req, res)=> {
  res.sendFile(path.join(__dirname, "/public/Create User.html"));
});

app.get("/device_details", (_req, res)=> {
  res.sendFile(path.join(__dirname, "/public/device_details.html"));
});

app.get("/Inventory", (_req, res)=> {
  res.sendFile(path.join(__dirname, "/public/Inventory.html"));
});

app.get("/User Settings", (_req, res)=> {
  res.sendFile(path.join(__dirname, "/public/User Settings.html"));
});


// END website page ROUTES

app.get("/api/v1/random-quote", (_req, res) => {
    fetch('https://api.quotable.io/random')
    .then((response) => response.json())
    .then((data) => {
      res.json(data)
  
    });
  
  })

app.use(function (err, req, res, next) {
  res.status(500).send({ type: err.name, message: err.message });
});


app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});


const httpService = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

peerProxy(httpService)


