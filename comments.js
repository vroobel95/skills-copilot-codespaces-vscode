// Create web server
var express = require("express");
var app = express();
var fs = require("fs");
// Create server
app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
// Read comments
app.get("/comments", function (req, res) {
  fs.readFile("comments.json", function (error, data) {
    var comments = JSON.parse(data);
    res.send(comments);
  });
});
// Write comments
app.post("/comments", function (req, res) {
  fs.readFile("comments.json", function (error, data) {
    var comments = JSON.parse(data);
    comments.push(req.body);
    fs.writeFile(
      "comments.json",
      JSON.stringify(comments, null, 2),
      function (error) {
        res.send("Comment added");
      }
    );
  });
});
