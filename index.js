// implement your API here
const express = require('express');
const db = require('./data/db');
const server = express();
server.use(express.json());

const PORT = process.env.port || 6666;



server.listen(PORT, () => { 
    console.log(`\n*** Server Listening on ${PORT}  *** \n`)
})

server.get('/', (req, res) => {
 res.send("Hewllo World!!!")
    })

//POST TO CREATE USER
server.post('/users', (req, res) => {
    const userInfo = req.body;
    console.log('Request Body Name', userInfo)
db.users
.insert(userInfo)
.then(user => {
    res.status(201).json({success: true, user});
})
.catch(({code, message}) => {
    res.status(code).json({success: false, message });
});
});

//GET THE USER ARRAY

server.get('/users', (req,res) => {
    db.users
    .find()
    .then(users => {
        if(users){
        res.status(200).json(users)
        } else {
            res.status(500).json({error: "The users information could not be retrieved"})
        }
    
    })
    .catch(({code, message}) => {
        res.status(code).json({ message})
    })
})

//GET THE DATE
server.get('/date', (req,res) => {
    const now = new Date().toISOString();
    res.send(now);
});

//GET A SPECIFIC USER OBJECT

//DELETE A SINGLE USER BY ID


//PUT UPDATE A SPECIFIC USER