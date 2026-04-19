//import express
const express = require('express');
//create app
const app = express();

// define a route
app.get('/', function(req, res)  {
   res.send('Hello, World! Welcome to my server.');
});

// listen for requests
app.listen(3000, function()  {
    console.log('Server is up and running');
});