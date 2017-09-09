var jira = require("../routes/jira.js");

//The createIssue function expects these parameters (Issue ID, Project ID, Summary, Parent Issue, Epic Name, and callback)
module.exports = function(app) {
	var projectid = "10000";

	app.post("/submitIssue", function(req, res) {
		if (req.body.project_selection === "Charlie\'s Angels Project") { 
			projectid = "10003"
		}	
		else if (req.body.project_selection === "Rob\'s Project") { 
			projectid = "10000"
		}	
		else if (req.body.project_selection === "Limor\'s project") { 
			projectid = "10001"
		}	
		else if (req.body.project_selection === "JP\'s awesome project") { 
			projectid = "10002"
		}	

		jira.createIssue("10001", projectid, req.body.epic, null, null, function(err, data) {
			jira.createIssue("10002", projectid, req.body.story, null, data.key, function(err, data) {
				jira.createIssue("10000", projectid, req.body.sub_task1, data.key, null, function(err, data){});
			});	
		});
		jira.createIssue("10003", projectid, req.body.task, null, null, function(err, data) {
			jira.createIssue("10000", projectid, req.body.sub_task2, data.key, null, function(err, data){});
			});
	res.redirect("/createIssue");
	});
};