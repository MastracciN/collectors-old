// Import Express
const express = require('express');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mydb',
    { useNewUrlParser: true, useUnifiedTopology: true});

// Create app, configure to parse JSON requests
const app = express ();
app.use(express.json());

// Server code
const PORT = process.env.PORT || 3000;

// Listen to specified port
app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
});

app.get("/status", (request, response) =>{
    const status = {
        "Status": "Running"
    };
    response.send(status);
});

app.get('/users', (req, res) =>{
    const users = [
        { id: 1, name: 'Name1'},
        { id: 2, name: 'Name2'},
    ];
    res.json(users);
});

// app.get('/users/:id', (req, res) => {
//     const users = [
//         { id: 1, name: 'Name1'},
//         { id: 2, name: 'Name2'},
//     ];
//     const user = users.find((u) => u.id === parseInt(req.params.id));
//     if (user) {
//         res.json(user);
//     } else {
//         res.status(404).send('User not found');
//     }
// });

app.get('/users/:id', (req, res) => {
    try{
        const user = users.find((u) => u.id === parseInt(req.params.id));
        if (!user) throw new Error('User not found');
        res.json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
})

app.post('/users', (req, res) => {
    const newUser = {
        id: Date.now(),
        name: req.body.name,
    };
    // Normally, you would save this user to a database
    res.status(201).json(newUser);
});

app.put('/users/:id', (req, res) => {
    const users = [
        { id: 1, name: 'Name1'},
        { id: 2, name: 'Name2'},
    ];
    const user = users.find((u) => u.id === parseInt(req.params.id));
    if (user) {
        user.name = req.body.name;
        res.json(user);
    } else {
        res.status(404).send('User not found');
    }
});

app.delete('/users/:id', (req, res) => {
    const users = [
        { id: 1, name: 'Name1'},
        { id: 2, name: 'Name2'},
    ];
    const userIndex = users.findIndex((u) => u.id === parseInt(req.params.id));
    if (userIndex !== -1) {
        users.splice(userIndex, 1);
        res.send('User deleted');
    } else {
        res.status(404).send('User not found');
    }
});
