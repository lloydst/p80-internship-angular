// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE.txt in the project root for license information.
var express = require('express');
var router = express.Router();
var authHelper = require('../helpers/auth');
var request = require('request')
/* GET /authorize. */
 /**
   * @swagger
   * /authorize:
   *   get:
   *     description: gets auth token
   *     tags: [Authorize]
   *     produces:
   *       - token
   *     responses:
   *       200:
   *         description: Get
   */
   /**
 * @swagger
 * definitions:
 *  authorize:
 *     properties:
 *       token:
 *         type: string
 *                    
 */
router.get('/', async function(req, res, next) {
  // Get auth code
    var options = {
        url: 'https://login.microsoftonline.com/Poort80.mail.onmicrosoft.com/oauth2/v2.0/token',
        method: "POST",
        form: {
            'grant_type': 'client_credentials',
            'client_id': process.env.APP_ID,
            'client_secret': process.env.APP_PASSWORD,
            'scope': 'https://graph.microsoft.com/.default',
        }
    };
    function callback(error, response, body) {
        if (!error) {
            var info = JSON.parse(body);
            //console.log(info);
            res.send({'access_token':info.access_token})
        }
    }
    //console.log(request(options))
    request(options, callback)
})
  //const code = req.query.code;


/* GET /authorize/signout */
 /**
   * @swagger
   * /authorize/signout:
   *   get:
   *     description: Logs User out
   *     tags: [Authorize]
   *     produces:
   *       - token
   *     responses:
   *       200:
   *         description: Destroys token
   */
router.get('/signout', function(req, res, next) {
  authHelper.clearCookies(res);

  // Redirect to home
  res.redirect(200,'/channels/meeting');
});
/* GET /authorize/admin */
 /**
   * @swagger
   * /authorize/admin:
   *   get:
   *     description: request permissions
   *     tags: [Authorize]
   *     produces:
   *       - token
   *     responses:
   *       200:
   *         description: Destroys token
   */
router.get('/admin', function(req,res,next) {
    res.redirect(authHelper.getConsent())
})
module.exports = router;
