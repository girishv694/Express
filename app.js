const express = require('express');


const app = express();


app.get('/', function(req, res) {
    res.send('Welcome to Home page');
});

app.get('/users', function(req, res) {
    res.sendFile(__dirname + '/MOCK_DATA.json')
});



app.listen(1235, () => {
    console.log("listening on port 1235");
});