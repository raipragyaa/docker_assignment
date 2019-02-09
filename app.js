const express = require('express');
const request = require('request');
const app = express();
const PORT = 3000;


app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/todo', (req, res) => {
    request.get('http://todo:8080/todo', (error, response, body) => {
        if(err){
            console.log(err);
            res.status(500);
            res.end();
        }
        res.status(200);
        res.send(body);
    });
})
app.listen(PORT, () => console.log(`listening on port ${PORT}`));