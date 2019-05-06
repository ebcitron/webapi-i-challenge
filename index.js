// implement your API here
const express = require('express');
const db = require('./data/db');
const server = express();
server.use(express.json());

const PORT = process.env.port || 5000;



server.listen(PORT, () => { 
    console.log(`\n*** Server Listening on ${PORT}  *** \n`)
})

server.get('/', (req, res) => {
 res.send("Hewllo World!!!")
    })

//POST TO CREATE USER


//GET THE USER ARRAY

server.get('/date', (req,res) => {
    const now = new Date().toISOString();
    res.send(now);
});

//GET A SPECIFIC USER OBJECT

//DELETE A SINGLE USER BY ID


//PUT UPDATE A SPECIFIC USER