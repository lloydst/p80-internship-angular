var express = require('express');
var router = express.Router();
var Website = require('../models/Website')
var Message = require('../models/Message')
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
        Website.findById(req.params.id, function(err, website) {
            if (err)
                res.send(err);
            res.json(website);
        });
    });

// MESSAGES
//ALL


//SINGLE
router.get('/messages/:id',function(req,res) {
    Message.findById(req.params.id, function(err, message) {
        if (err) {
            res.send(err);
        }
       res.json(message)
    })
})
//All
router.get('/messages',function(req, res) {
    Message.find(function(err, messages) {
        if (err){
            res.send(err);
        }
        res.json(messages);
    });
  });
  router.post('/messages',function(req, res) {
    var mssg = new Message();      // create a new instance of the Bear model
    mssg.message = req.body.message;  // set the bears name (comes from the request)
    mssg.showFrom = req.body.showFrom;
    mssg.showTill = req.body.showTill;
    // save the bear and check for errors
    mssg.save(function(err) {
        if (err){
            res.send(err);
        }
        res.json({ message: 'message Created' });
    });

});
// FIND AND UPDATE
router.put('/messages/:id', function(req,res) {
    Message.updateOne(req.params.id, {message:req.body.message},function(err, doc) {
        if(err) {
            res.send(err)
        }
        res.send (doc)
    })
})
// FIND AND DELETE
router.delete('/messages/:id', function(req, res) {
    Message.remove({
        _id: req.params.id
    }, function(err, bear) {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Successfully deleted' });
    })
})

module.exports = router;
