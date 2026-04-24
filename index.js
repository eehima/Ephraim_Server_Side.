// import express from express
const express = require("express");
// create a port
const port = 7070;
//create instance of express
const app = express();

// 
app.use(express.json());

// An array of users
const users = [
    {"id": 1, "name": "Alice", "age": 30},
    {"id": 2, "name": "Bob", "age": 25},
    {"id": 3, "name": "Charlie", "age": 35}
]

// a route of getting all users
app.get('/users', (req, res) => {
    res.status(200).json(users);
});

//get a single user by id
app.get(`/users/:id`, (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    
    if (!user) {
        return res.status(404).json({error: "User not found"});
    }
    res.status(200).json(user);
});


app.get('/', (req, res) => {
    res.send('Server is up and running.');
});

// a route of creating a new user using POST.
app.post('/new-users', (req, res) => {
    const {name, email} = req.body;

    if (!name || !email)  {
        return res.status(400).json({error: "Name and email are required"});
    };
    const newUser = {
        id: users.length + 1,
        name: name,
        email: email
    };

    users.push(newUser);
    res.status(201).json(newUser);
    });

    // Port listening
app.listen(port, () => {
    console.log(`Server is running on port ${port}`); 

});