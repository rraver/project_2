//import of node-rest-client NPM package
var Client = require('node-rest-client').Client;
//Establishing service account credentials to pass into the rest client
var options_auth = { user: "admin", password: "T67AoB" };
//Creating the client with the username/password above
var client = new Client(options_auth);

var project = require("../models/project.js");

function sendProjectsDB(projs) {
    projs.forEach(function(proj) {
        console.log(proj.id);
    project.create({project_id: proj.id,
                    name: proj.name,
                    project_key: proj.key,
                    self: proj.self
                    }).then(function(result) {
                        console.log("projects enetered into DB");
                    });
        });
}

//**********Start of getProjects function, this will return a list of all projjects in Jira**********
var jira = {
    getProjects: function getProjects() { 
    client.get("http://107.170.208.114:8080/rest/api/2/project", function (data, response) {
         if (response.statusCode == 200) {
            console.log('Succesfully received projects');
            sendProjectsDB(data);
         }
         else {
            console.log(data);            
            throw "Problem with getting projects"
         }
    });
},

checkMeta: function checkMeta() { 

    client.get("http://107.170.208.114:8080/rest/api/2/issue/createmeta", function (data, response) {
    console.log(data);
    });

},
//**********End of getProjects function**********




//**********Start of createIssue function, this will create Jira issues of different types**********
createIssue: function createIssue(sIssueType, sProject, sSummary, sParentIssue, sEpicName, cb) {
    var issueType = sIssueType;
    var args = {
        headers: { "Content-Type": "application/json" },
        data: { 
            "fields": {
                "project": {
                    "id": sProject
                },
                "summary": sSummary,
                "issuetype": {
                    "id": sIssueType
                },
                "assignee": {
                    "name": "admin"
                },
                "reporter": {
                    "name": "admin"
                },
                "parent": {
                },
                "description": sSummary,
                "components": [
                    {
                    "id": "10000"
                    }
                ],
            }
        },
  
    };

//**********Start of if statements that add extra arguments depending on issue type**********
//First if statement addes the Epic Name if issue type is an Epic
    if (issueType === "10001") { 
        args.data.fields.customfield_10002 = sSummary;
        console.log(args.data.fields);
    }
//Second if type will add the parent key if the issue type is a sub task 
    else if (issueType === "10000") { 
        args.data.fields.parent.key = sParentIssue;
        console.log(args.data.fields.parent);
    }
    else if(issueType === "10002") {
        args.data.fields.customfield_10000 = sEpicName;
    }
//**********End of if statements that add extra arguments depending on issue type**********

//Execution of POST command to generate the Issue 
    client.post("http://107.170.208.114:8080/rest/api/2/issue", args, function (data, response) {
         if (response.statusCode == 201) {
            console.log('Succesfully created issue, session:');
            console.log(data);
            cb(null, data);
         }
         else {
            throw "Problem with creating issue, HTTP status code"
            console.log(response);
         }
    });
//End of POST command to generate the Issue
}
//**********End of createIssue function**********
}
//createIssue("10001", "10000", "Summarize this epic up yo", "RP-38");

module.exports = jira;