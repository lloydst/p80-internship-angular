var JiraApi = require('jira-client')
var express = require('express');
var router = express.Router();



var jira = new JiraApi({
    protocol: 'https',
    host: process.env.JIRA_HOST,
    username: process.env.JIRA_USER,
    password: process.env.JIRA_PASS,
    apiVersion: '2',
    strictSSL: true
});

router.get('/', function (err, res) {
    // placing a string in the search jira function makes it look for it
    // (seems to default to status done so depending on what it is on the p80 jira this has to be changed)
    jira.searchJira()
        .then(issue => {
            res.send(issue)
        })
        .catch(err => {
            console.error(err);
        });
});


module.exports = router