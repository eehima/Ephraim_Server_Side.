//import express
const express = require('express');
//create app
const app = express();

// body parser
app.use(express.json());

const studentInfo = [
    {name: "alice", age: 20, grade: "A"},
    {name: "bob", age: 22, grade: "B"},
    {name: "charlie", age: 21, grade: "C"}
];
 
app.get("/all-data", (req, res) => {
    res.json(studentInfo[0]);
});

// define a route
app.get('/', (req, res) => {
   res.send('Hello, World! Welcome to my server.');
});

app.get('/about', (req, res) => {
    res.send('This is the about page of my server.');
});

app.get('/contact', (req, res) => {
    res.send('This is the contact page of my server.');
});

// listen for requests
app.listen(3000, () => {
    console.log('Server is up and running');
});