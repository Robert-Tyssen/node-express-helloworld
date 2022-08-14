var express = require('express');

// Create express application
var app = express();

// Respond to GET request for homepage
app.get('/', (req, res) => {
    console.log('GET request for homepage');
    res.send('GET Hello World!');
});

// Respond to POST request for homepage
app.post('/', (req, res) => {
    console.log('POST request for homepage');
    res.send('POST Hello World!');
});

// Respond to PUT request for homepage
app.put('/', (req, res) => {
    console.log('PUT request for homepage');
    res.send('PUT Hello World!');
});

// Respond to DELETE request for homepage
app.delete('/', (req, res) => {
    console.log('DELETE request for homepage');
    res.send('DELETE Hello World!');
});

// Listen for requests on port
var server = app.listen(8081, () => {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Hello World app listening at http://%s:%s');
});