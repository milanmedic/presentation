const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()

const DEVELOPMENT = process.env.NODE_ENV != 'production'

app.set('port', process.env.PORT || 5000)

app.use(express.static(path.resolve(__dirname)))
app.use(bodyParser.json())

app.get('*', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'index.html'))
})

app.listen(app.get('port'), () => {
    console.log("Listening on " + app.get('port'))
})

/*var express = require("express");
var app = express();
app.use("/", express.static(__dirname));

let server_host = "0.0.0.0";
app.listen(process.env.PORT || 5000, server_host, function() {
  console.log("Listening on " + port);
});*/