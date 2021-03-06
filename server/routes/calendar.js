// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE.txt in the project root for license information.
var express = require('express');
var router = express.Router();
var authHelper = require('../helpers/auth');
var graph = require('@microsoft/microsoft-graph-client');
var request = require('request')

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
router.get('/', function(req, res, next) {
    //console.log(req.query.accesstoken)
  const start = new Date(
      Date.now()
      );
    // Set end of the calendar view to 7 days from start
    const end = new Date(
      new Date(start).setDate(start.getDate() + 7)
    );
    //console.log(req.signedCookies[])
    // Get auth code
    var options = {
        url: 'https://graph.microsoft.com/v1.0/users/Vergaderruimte@poort80.nl/calendarview?startdatetime=' + start.toISOString() + '&enddatetime=' + end.toISOString() +'',
        headers:{
            Authorization: 'Bearer ' + req.query.accesstoken,
            Prefer: `outlook.timezone = "Europe/Paris"`
    }};
    function callback(error, response, body) {
        if (!error) {
            var info = JSON.parse(body);
            res.send(info)
        }
    }

    request(options, callback)

});

module.exports = router;