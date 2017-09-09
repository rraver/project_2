var path = require("path");

module.exports = function(app) {
 
  app.get("/", function(req, res) {
    console.log("in dir");
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/select", function(req, res) {
    console.log("in select");
    res.sendFile(path.join(__dirname, "../public/selection.html"));
  });

  app.get("/createIssue", function(req, res) {
    console.log("in create issue");
    res.sendFile(path.join(__dirname, "../public/createIssue.html"));
  });

};