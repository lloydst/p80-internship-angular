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
    Message.findByIdAndRemove(req.param.id)
})
// MESSAGES
//ALL

// post to create messages 9or keep the websocket variant

//SINGLE
router.get('/messages/:id',function(req,res) {
    Message.find(req.param.id, function(err, message) {
        if (err) {
            res.send(err);
        }
       res.send(message)
    })
})
// FIND AND UPDATE
router.put('/messages/:id', function(req,res) {
    Message.updateOne(req.param.id, {message:req.body.message},function(err, doc) {
        if(err) {
            res.send(err)
        }
        res.send (doc)
    })
})
// FIND AND DELETE
router.delete('messages/:id', function(req, res) {
    Message.remove(req.param.id, function(err, page){
        if (err) {
            console.log(page)
            res.send(err)
            
        }
    })
})
module.exports = router;
