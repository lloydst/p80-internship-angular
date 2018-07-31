import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../services/ticket.service';

/**
 * support component
 */
@Component({
  selector: 'app-support',
  templateUrl: './support.component.html'
})
export class SupportComponent implements OnInit {
    /**
     * binding
     */
    data
    issues = [
        {
        "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
        "fields": {
            "aggregateprogress": {
                "progress": 0,
                "total": 0
            },
            "aggregatetimeestimate": null,
            "aggregatetimeoriginalestimate": null,
            "aggregatetimespent": null,
            "assignee": null,
            "components": [
                {} // dont know if it gives a object it just doesnt like being empty
            ],
            "created": "2018-06-14T13:49:34.660+0200",
            "creator": {
                "accountId": "5b1e3e6872cf210761d5d133",
                "active": true,
                "avatarUrls": {
                    "16x16": "https://avatar-cdn.atlassian.com/de93e59930b4e8cd7796e7f23b184663?s=16&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2Fde93e59930b4e8cd7796e7f23b184663%3Fd%3Dmm%26s%3D16%26noRedirect%3Dtrue",
                    "24x24": "https://avatar-cdn.atlassian.com/de93e59930b4e8cd7796e7f23b184663?s=24&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2Fde93e59930b4e8cd7796e7f23b184663%3Fd%3Dmm%26s%3D24%26noRedirect%3Dtrue",
                    "32x32": "https://avatar-cdn.atlassian.com/de93e59930b4e8cd7796e7f23b184663?s=32&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2Fde93e59930b4e8cd7796e7f23b184663%3Fd%3Dmm%26s%3D32%26noRedirect%3Dtrue",
                    "48x48": "https://avatar-cdn.atlassian.com/de93e59930b4e8cd7796e7f23b184663?s=48&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2Fde93e59930b4e8cd7796e7f23b184663%3Fd%3Dmm%26s%3D48%26noRedirect%3Dtrue"
                },
                "displayName": "lloyd stumpel",
                "emailAddress": "lloyd.stumpel@gmail.com",
                "key": "admin",
                "name": "admin",
                "self": "https://p80-tool.atlassian.net/rest/api/2/user?username=admin",
                "timeZone": "Europe/Berlin"
            },
            "customfield_10000": "{}",
            "customfield_10001": null,
            "customfield_10002": null,
            "customfield_10006": null,
            "customfield_10007": null,
            "customfield_10008": [
                "com.atlassian.greenhopper.service.sprint.Sprint@4f660440[id=3,rapidViewId=1,state=FUTURE,name=Sample Sprint 3,goal=<null>,startDate=<null>,endDate=<null>,completeDate=<null>,sequence=3]"
            ],
            "customfield_10009": "0|i00053:",
            "customfield_10010": null,
            "customfield_10011": null,
            "customfield_10012": null,
            "customfield_10013": [
                {} // dont know if it gives a object it just doesnt like being empty
            ],
            "customfield_10014": null,
            "customfield_10015": null,
            "customfield_10016": null,
            "customfield_10020": null,
            "customfield_10021": null,
            "description": null,
            "duedate": null,
            "environment": null,
            "fixVersions": [
                {} // dont know if it gives a object it just doesnt like being empty
            ],
            "issuelinks": [
                {} // dont know if it gives a object it just doesnt like being empty
            ],
            "issuetype": {
                "avatarId": 10318,
                "description": "A task that needs to be done.",
                "iconUrl": "https://p80-tool.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10318&avatarType=issuetype",
                "id": "10002",
                "name": "Task",
                "self": "https://p80-tool.atlassian.net/rest/api/2/issuetype/10002",
                "subtask": false,
                "labels": [
                    {} // dont know if it gives a object it just doesnt like being empty
                ],
                "lastViewed": null
            },
            "priority": {
                "iconUrl": "https://p80-tool.atlassian.net/images/icons/priorities/medium.svg",
                "id": "3",
                "name": "Medium",
                "self": "https://p80-tool.atlassian.net/rest/api/2/priority/3"
            },
            "progress": {
                "progress": 0,
                "total": 0
            },
            "project": {
                "avatarUrls": {
                    "16x16": "https://p80-tool.atlassian.net/secure/projectavatar?size=xsmall&avatarId=10324",
                    "24x24": "https://p80-tool.atlassian.net/secure/projectavatar?size=small&avatarId=10324",
                    "32x32": "https://p80-tool.atlassian.net/secure/projectavatar?size=medium&avatarId=10324",
                    "48x48": "https://p80-tool.atlassian.net/secure/projectavatar?avatarId=10324"
                },
                "id": "10000",
                "key": "V1",
                "name": "p80-internship",
                "projectTypeKey": "software",
                "self": "https://p80-tool.atlassian.net/rest/api/2/project/10000"
            },
            "reporter": {
                "accountId": "5b1e3e6872cf210761d5d133",
                "active": true,
                "avatarUrls": {
                    "16x16": "https://p80-tool.atlassian.net/secure/projectavatar?size=xsmall&avatarId=10324",
                    "24x24": "https://p80-tool.atlassian.net/secure/projectavatar?size=small&avatarId=10324",
                    "32x32": "https://p80-tool.atlassian.net/secure/projectavatar?size=medium&avatarId=10324",
                    "48x48": "https://p80-tool.atlassian.net/secure/projectavatar?avatarId=10324"
                },
                "displayName": "lloyd stumpel",
                "emailAddress": "lloyd.stumpel@gmail.com",
                "key": "admin",
                "name": "admin",
                "self": "https://p80-tool.atlassian.net/rest/api/2/user?username=admin",
                "timeZone": "Europe/Berlin"
            },
            "resolution": null,
            "resolutiondate": null,
            "security": null,
            "status": {
                "description": "",
                "iconUrl": "https://p80-tool.atlassian.net/",
                "id": "10000",
                "name": "To Do",
                "self": "https://p80-tool.atlassian.net/rest/api/2/status/10000",
                "statusCategory": {
                    "colorName": "blue-gray",
                    "id": 2,
                    "key": "new",
                    "name": "To Do",
                    "self": "https://p80-tool.atlassian.net/rest/api/2/statuscategory/2"
                }
            },
            "subtasks": [
                {} // dont know if it gives a object it just doesnt like being empty
            ],
            "summary": "a example task",
            "timeestimate": null,
            "timeoriginalestimate": null,
            "timespent": null,
            "updated": "2018-06-14T13:49:34.660+0200",
            "versions": [
                {} // dont know if it gives a object it just doesnt like being empty
            ],
            "votes": {
                "hasVoted": false,
                "self": "https://p80-tool.atlassian.net/rest/api/2/issue/V1-24/votes",
                "votes": 0
            },
            "watches": {
                "isWatching": true,
                "self": "https://p80-tool.atlassian.net/rest/api/2/issue/V1-24/watchers",
                "watchCount": 1
            },
            "workratio": -1
        },
        "id": "10023",
        "key": "V1-24",
        "self": "https://p80-tool.atlassian.net/rest/api/2/issue/10023"
    },
    {
        "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
        "fields": {
            "aggregateprogress": {
                "progress": 0,
                "total": 0
            },
            "aggregatetimeestimate": null,
            "aggregatetimeoriginalestimate": null,
            "aggregatetimespent": null,
            "assignee": null,
            "components": [
                {} // dont know if it gives a object it just doesnt like being empty
            ],
            "created": "2018-06-14T13:49:34.660+0200",
            "creator": {
                "accountId": "5b1e3e6872cf210761d5d133",
                "active": true,
                "avatarUrls": {
                    "16x16": "https://avatar-cdn.atlassian.com/de93e59930b4e8cd7796e7f23b184663?s=16&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2Fde93e59930b4e8cd7796e7f23b184663%3Fd%3Dmm%26s%3D16%26noRedirect%3Dtrue",
                    "24x24": "https://avatar-cdn.atlassian.com/de93e59930b4e8cd7796e7f23b184663?s=24&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2Fde93e59930b4e8cd7796e7f23b184663%3Fd%3Dmm%26s%3D24%26noRedirect%3Dtrue",
                    "32x32": "https://avatar-cdn.atlassian.com/de93e59930b4e8cd7796e7f23b184663?s=32&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2Fde93e59930b4e8cd7796e7f23b184663%3Fd%3Dmm%26s%3D32%26noRedirect%3Dtrue",
                    "48x48": "https://avatar-cdn.atlassian.com/de93e59930b4e8cd7796e7f23b184663?s=48&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2Fde93e59930b4e8cd7796e7f23b184663%3Fd%3Dmm%26s%3D48%26noRedirect%3Dtrue"
                },
                "displayName": "lloyd stumpel",
                "emailAddress": "lloyd.stumpel@gmail.com",
                "key": "admin",
                "name": "admin",
                "self": "https://p80-tool.atlassian.net/rest/api/2/user?username=admin",
                "timeZone": "Europe/Berlin"
            },
            "customfield_10000": "{}",
            "customfield_10001": null,
            "customfield_10002": null,
            "customfield_10006": null,
            "customfield_10007": null,
            "customfield_10008": [
                "com.atlassian.greenhopper.service.sprint.Sprint@4f660440[id=3,rapidViewId=1,state=FUTURE,name=Sample Sprint 3,goal=<null>,startDate=<null>,endDate=<null>,completeDate=<null>,sequence=3]"
            ],
            "customfield_10009": "0|i00053:",
            "customfield_10010": null,
            "customfield_10011": null,
            "customfield_10012": null,
            "customfield_10013": [
                {} // dont know if it gives a object it just doesnt like being empty
            ],
            "customfield_10014": null,
            "customfield_10015": null,
            "customfield_10016": null,
            "customfield_10020": null,
            "customfield_10021": null,
            "description": null,
            "duedate": null,
            "environment": null,
            "fixVersions": [
                {} // dont know if it gives a object it just doesnt like being empty
            ],
            "issuelinks": [
                {} // dont know if it gives a object it just doesnt like being empty
            ],
            "issuetype": {
                "avatarId": 10318,
                "description": "A task that needs to be done.",
                "iconUrl": "https://p80-tool.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10318&avatarType=issuetype",
                "id": "10002",
                "name": "Task",
                "self": "https://p80-tool.atlassian.net/rest/api/2/issuetype/10002",
                "subtask": false,
                "labels": [
                    {} // dont know if it gives a object it just doesnt like being empty
                ],
                "lastViewed": null
            },
            "priority": {
                "iconUrl": "https://p80-tool.atlassian.net/images/icons/priorities/medium.svg",
                "id": "3",
                "name": "Medium",
                "self": "https://p80-tool.atlassian.net/rest/api/2/priority/3"
            },
            "progress": {
                "progress": 0,
                "total": 0
            },
            "project": {
                "avatarUrls": {
                    "16x16": "https://p80-tool.atlassian.net/secure/projectavatar?size=xsmall&avatarId=10324",
                    "24x24": "https://p80-tool.atlassian.net/secure/projectavatar?size=small&avatarId=10324",
                    "32x32": "https://p80-tool.atlassian.net/secure/projectavatar?size=medium&avatarId=10324",
                    "48x48": "https://p80-tool.atlassian.net/secure/projectavatar?avatarId=10324"
                },
                "id": "10000",
                "key": "V1",
                "name": "p80-internship",
                "projectTypeKey": "software",
                "self": "https://p80-tool.atlassian.net/rest/api/2/project/10000"
            },
            "reporter": {
                "accountId": "5b1e3e6872cf210761d5d133",
                "active": true,
                "avatarUrls": {
                    "16x16": "https://p80-tool.atlassian.net/secure/projectavatar?size=xsmall&avatarId=10324",
                    "24x24": "https://p80-tool.atlassian.net/secure/projectavatar?size=small&avatarId=10324",
                    "32x32": "https://p80-tool.atlassian.net/secure/projectavatar?size=medium&avatarId=10324",
                    "48x48": "https://p80-tool.atlassian.net/secure/projectavatar?avatarId=10324"
                },
                "displayName": "lloyd stumpel",
                "emailAddress": "lloyd.stumpel@gmail.com",
                "key": "admin",
                "name": "admin",
                "self": "https://p80-tool.atlassian.net/rest/api/2/user?username=admin",
                "timeZone": "Europe/Berlin"
            },
            "resolution": null,
            "resolutiondate": null,
            "security": null,
            "status": {
                "description": "",
                "iconUrl": "https://p80-tool.atlassian.net/",
                "id": "10000",
                "name": "To Do",
                "self": "https://p80-tool.atlassian.net/rest/api/2/status/10000",
                "statusCategory": {
                    "colorName": "blue-gray",
                    "id": 2,
                    "key": "new",
                    "name": "To Do",
                    "self": "https://p80-tool.atlassian.net/rest/api/2/statuscategory/2"
                }
            },
            "subtasks": [
                {} // dont know if it gives a object it just doesnt like being empty
            ],
            "summary": "a example task",
            "timeestimate": null,
            "timeoriginalestimate": null,
            "timespent": null,
            "updated": "2018-06-14T13:49:34.660+0200",
            "versions": [
                {} // dont know if it gives a object it just doesnt like being empty
            ],
            "votes": {
                "hasVoted": false,
                "self": "https://p80-tool.atlassian.net/rest/api/2/issue/V1-24/votes",
                "votes": 0
            },
            "watches": {
                "isWatching": true,
                "self": "https://p80-tool.atlassian.net/rest/api/2/issue/V1-24/watchers",
                "watchCount": 1
            },
            "workratio": -1
        },
        "id": "10023",
        "key": "V1-24",
        "self": "https://p80-tool.atlassian.net/rest/api/2/issue/10023"
    }
]
    
/**
 * some stuff goes here
 */
  constructor(private ticketservice: TicketService) { }
/**
 * fill
 */
  ngOnInit() {
      this.getTickets()
  }
  getTickets() {
    this.ticketservice.getTickets().subscribe(async (data) => {
        this.data = data
    })
  }
  
}
