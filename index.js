
const path = require("path");

const express = require('express');
const app = express();

// The service port. In production the frontend code is statically hosted by the service on the same port.
const port = process.env.PORT || 3000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the frontend static content hosting
app.use(express.static('public'));

// // Router for service endpoints
// const apiRouter = express.Router();
// app.use(`/api`, apiRouter);

// // GetScores
// apiRouter.get('/scores', (_req, res) => {
//   res.send(scores);
// });

// // SubmitScore
// apiRouter.post('/score', (req, res) => {
//   scores = updateScores(req.body, scores);
//   res.send(scores);
// });

// Return the application's default page if the path is unknown

app.get("/", (_req, res)=> {
  res.sendFile(path.join(__dirname, "/public/index.html"));
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

app.get("/api/v1/random-quote", (_req, res) => {
  fetch('https://api.quotable.io/random')
  .then((response) => response.json())
  .then((data) => {console.log(data)
    res.json(data)

  });

})

//app.use((_req, res) => {
//  res.sendFile('index.html', { root: 'public' });
//});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});




