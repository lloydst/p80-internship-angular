// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE.txt in the project root for license information.
var express = require('express');
var router = express.Router();
var authHelper = require('../helpers/auth');
var graph = require('@microsoft/microsoft-graph-client');


 /**
 * @swagger
 * definitions:
 *  calendar:
 *     properties:
 *       title:
 *         type: string
 *       active:
 *         type: boolean
 *       user:
 *         type: string
 *       events:
 *         type: array
 *         items:
 *                type: object
 *                properties:
 *                    unknown:
 *                        type: string
 *                    
 */
/* GET /calendar */
/**
  * @swagger
  * /calendar:
  *   get:
  *     description: gets auth token
  *     tags: [Calendar]
  *     produces:
  *       - application/json
  *     responses:
  *       200:
  *         description: Get
  *         schema:
  *           type: object
  *           $ref: '#/definitions/calendar'
  */
router.get('/', async function(req, res, next) {
  
  let parms = { title: 'Calendar', active: { calendar: true } };

  const accessToken = await authHelper.getAccessToken(req.cookies, res);
  const userName = req.cookies.graph_user_name;

  if (accessToken && userName) {
    parms.user = userName;

    // Initialize Graph client
    const client = graph.Client.init({
      
      authProvider: (done) => {
        done(null, accessToken);
      }
    });

    // Set start of the calendar view to today at midnight
    const start = new Date(new Date().setHours(0,0,0));
    // Set end of the calendar view to 7 days from start
    const end = new Date(
      new Date(start).setDate(start.getDate() + 7)
      
    );
    
    try {
      // Get the first 10 events for the coming week
      console.log(start.toISOString())
      console.log(start)
      const result = await client
      
      .api(`/me/calendarView?startDateTime=${start.toISOString()}&endDateTime=${end.toISOString()}`)
      .top(10)
      
      //.select('subject,start,end,attendees')
      // gives full object if commented out or can prefilter
      .orderby('start/dateTime DESC')
      .get();

      parms.events = result.value;
      res.send(parms);
    } catch (err) {
      parms.message = 'Error retrieving events';
      parms.error = { status: `${err.code}: ${err.message}` };
      parms.debug = JSON.stringify(err.body, null, 2);
      res.send('error',parms);
    }
    
  } else {
    // Redirect to home
    res.redirect('/');
  }
});

module.exports = router;