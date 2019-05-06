// implement your API here
const express = require ('express');
const db = require('./data/db');
const server = express();
server.use(express.json());

const PORT = process.env.port || 5000;

server.listen(PORT, () => { 
    console.log(`\n*** Server Listening on ${PORT}  *** \n`)
})

server.get("/", (req,res)=> {
    res.send("Hello World!!!")
})