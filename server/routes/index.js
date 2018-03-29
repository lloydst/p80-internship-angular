var express = require('express');
var router = express.Router();
var Website = require('../models/Website')

/* GETs home page. full/all websites object*/
router.get('/',function(req, res) {
  Website.find(function(err, websites) {
      if (err)
          res.send(err);

      res.json(websites);
  });
});

  
module.exports = router;
