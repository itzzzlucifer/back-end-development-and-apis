const express = require('express');
const PORT = 3000;

const app = express();
app.use(express.json());

app.get('/', (req, res)=>{
    res.send("Welcome to Camper Bot's homepage!");
});

app.get('/hobbies', (req, res)=>{
    res.send("I cycle, go boating, and play guitar.");
});

app.get('/skills', (req, res)=>{
    res.send("JavaScript, Node.js, and Express.js!");
});

app.get('/api/profile', (req, res)=>{
    let result = {
        'name': 'Camper Bot',
        'hobbies': ['cycling', 'boating', 'guitar'],
        'skills': ['JavaScript', 'Node.js', 'Express.js']
    }
    res.json(result);
});

app.listen(PORT, ()=>{
    console.log("Server is listening at http://localhost:3000")
});