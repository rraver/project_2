
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory
app.use(express.static("public"));


var jira = require("./routes/jira.js");
jira.getProjects();

// Routes
// =============================================================
require("./routes/html_router.js")(app);
require("./routes/api_router.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
//});