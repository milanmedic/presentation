var express = require("express");
var app = express();
app.use("/", express.static(__dirname));

let server_host = "0.0.0.0";
app.listen(process.env.PORT || 5000, server_host, function() {
  console.log("Listening on " + port);
});