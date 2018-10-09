// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE.txt in the project root for license information.
var express = require('express');
var router = express.Router();
var authHelper = require('../helpers/auth');

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
  const code = req.query.code;

  // If code is present, use it
  if (code) {
    let token;

    try {
      token = await authHelper.getTokenFromCode(code, res);
    } catch (error) {
      res.send({ title: 'Error', message: 'Error exchanging code for token', error: error });
    }

    // Redirect to home
    res.redirect('/');
  } else {
    // Otherwise complain
    res.send( { title: 'Error', message: 'Authorization error, check the Redirect uri in .env to see if it matches  ', error: { status: 'Missing code parameter' } });
  }
});

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
