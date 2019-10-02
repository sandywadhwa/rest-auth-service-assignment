const express = require('express')
const app = express()
const port = 3000


// /css --- >REQ
// public/css/.... --> SEARCH
app.use(express.static('public'))
app.get('/', (req, res) => res.sendFile(__dirname+'/public/views/index.html'))
app.get('/index', (req, res) => res.sendFile(__dirname+'/public/views/index.html'))
app.get('/login', (req, res) => res.sendFile(__dirname+'/public/views/login.html'))
app.get('/register', (req, res) => res.sendFile(__dirname+'/public/views/register.html'))

// API
app.get('/api/hello', function(req, res){
        res.json({'message' : 'hello', 'username': 'test'});

        // Spawn C++ process
        // Get its output
        // Send that output back using res.json()
    }
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))