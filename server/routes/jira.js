JiraApi = require('jira-client')
var express = require('express');
var router = express.Router();
// jia client setup

 
var jira = new JiraApi({

    protocol: 'https',
    
    host: process.env.JIRA_HOST,
    
    username: process.env.JIRA_USER,
    
    password: process.env.JIRA_PASS,
    
    apiVersion: '2',
    
    strictSSL: true});
router.get('/',function (err,res){
    jira.searchJira().then(function(issue) {

        res.send(issue)
    })
        
        .catch(function(err) { console.error(err);});
    });

  module.exports = router