var express = require('express');
var router = express.Router();
var Website = require('../models/Website')

var status = require('http-status');
/* GETs home page. full/all websites object*/
router.get('/websites',function(req, res) {
  Website.find(function(err, websites) {
      if (err)
          res.send(err);

      res.json(websites);
      // res.status(200).json({message: 'SUCCESS', websites});
  });
});
router.get('/websites/:id', function(req,res) {

})
    router.get('/messages',function(req,res) {
        return 'messages found'
    })
    router.put('/messages/:id', function(req,res) {

    })
    router.delete('messages/:id', function (req, res) {

    })

module.exports = router;
