const express = require("express");
const https = require("https");
const fs = require("fs");

const options = {
  key: fs.readFileSync("./key/private.key"),
  cert: fs.readFileSync("./key/private.crt"),
};

const app = express();
console.log(__dirname);
app.use(express.static(__dirname + "/dist"));

const PORT = process.env.PORT || 3500;

https.createServer(options, app).listen(PORT, function() {
  console.log("HTTPS server running on port" + PORT);
});

app.get(/.*/, function(req, res) {
  console.log("HTTPS server running on port" + PORT);
  res.sendFile(__dirname + "/dist/index.html");
});