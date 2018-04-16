var express = require('express');
var router = express.Router();
var Website = require('../models/Website')
var Message = require('../models/Message')
var status = require('http-status');
var Feed = require('rss-to-json');
/** #defines parameters
   * @swagger
   * definitions:
   *   website:
   *     required:
   *       - id
   *     properties:
   *       name:
   *         type: string
   *       url:
   *         type: string
   *       visable:
   *         type: boolean
   *   message:
   *     properties:
   *       message:
   *         type: string
   *       showFrom:
   *         type: string
   *       showTill:
   *         type: string
   */  

  /**
   * @swagger
   * tags:
   *    - name: Website
   *      description: Websites
   *    - name: Message
   *      description: Messages
   */

  /**
   * @swagger
   * /websites/:id:
   *   put:
   *     description: updates a website
   *     tags: [Website]
   *     produces:
   *       - application/json
   *     parameters:
   *       - $ref: '#/parameters/id'
   *       - name: id
   *         description: the documents id to update
   *         in: formData
   *         required: true
   *         type: string
   *     responses:
   *       200:
   *         description: update
   *         schema:
   *           type: object
   *           $ref: '#/definitions/website'
   */
router.put('/websites/:id', function(req,res) {
    
    Website.findOneAndUpdate({name: req.params.id}, req.body,function(err, doc) {
        if(err) {
            res.send(err)
        }
        res.json({ message: 'Successfully updated' })
    })
})
/**
   * @swagger
   * /websites:
   *   get:
   *     description: gets all websites
   *     tags: [Website]
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: recieved array of websites
   *         schema:
   *           type: object
   *           $ref: '#/definitions/website'
   */
router.get('/websites',function(req, res) {
  Website.find(function(err, websites) {
      if (err)
          res.send(err);

      res.json(websites);
      // res.status(200).json({message: 'SUCCESS', websites});
  });
});

/**
   * @swagger
   * /websites/:id:
   *   get:
   *     description: gets a specific website
   *     tags: [Website]
   *     produces:
   *       - application/json
   *     parameters:
   *       - $ref: '#/parameters/id'
   *       - name: id
   *         description: the documents id to GET
   *         in: formData
   *         required: true
   *         type: string
   *     responses:
   *       200:
   *         description: GET
   *         schema:
   *           type: object
   *           $ref: '#/definitions/website'
   */
router.get('/websites/:id', function(req,res) {
        Website.find({name: req.params.id}, function(err, website) {
            if (err)
                res.send(err);
            res.json(website);
        });
    });
    /**
   * @swagger
   * /websites/:id:
   *   delete:
   *     description: deletes a website
   *     tags: [Website]
   *     produces:
   *       - application/json
   *     parameters:
   *       - $ref: '#/parameters/id'
   *       - name: id
   *         description: the documents id to delete
   *         in: formData
   *         required: true
   *         type: string
   *     responses:
   *       200:
   *         description: deleted
   *         schema:
   *           type: object
   */
    router.delete('/websites/:id', function(req, res) {
        Website.remove({
            _id: req.params.id
        }, function(err, website) {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Successfully deleted' });
        })
    })
    /**
   * @swagger
   * /websites:
   *   post:
   *     description: creates a website
   *     tags: [Website]
   *     produces:
   *       - application/json
   *     
   *     responses:
   *       200:
   *         description: created
   *         schema:
   *           type: object
   */
    router.post('/websites',function(req, res) {
        var site = new Website();      
        site.name = req.body.name;  
        site.url = req.body.url;
        site.visable = req.body.visable;
        // save the bear and check for errors
        site.save(function(err) {
            if (err){
                res.send(err);
            }
            res.json({ message: 'site added' });
        });
    });
// MESSAGES
//ALL


/**
   * @swagger
   * /messages/:id:
   *   get:
   *     description: gets a specific message
   *     tags: [Message]
   *     produces:
   *       - application/json
   *     parameters:
   *       - $ref: '#/parameters/id'
   *       - name: id
   *         description: the documents id to Get
   *         in: formData
   *         required: true
   *         type: string
   *     responses:
   *       200:
   *         description: Get
   *         schema:
   *           type: object
   *           $ref: '#/definitions/message'
   */
router.get('/messages/:id',function(req,res) {
    Message.findById(req.params.id, function(err, message) {
        if (err) {
            res.send(err);
        }
       res.json([message])
    })
})

/**
   * @swagger
   * /messages:
   *   get:
   *     description: gets all messages
   *     tags: [Message]
   *     produces:
   *       - application/json

   *     responses:
   *       200:
   *         description: Get
   *         schema:
   *           type: array
   *           $ref: '#/definitions/message'
   */
router.get('/messages',function(req, res) {
    Message.find(function(err, messages) {
        if (err){
            res.send(err);
        }
        res.json(messages);
    });
  });
  /**
   * @swagger
   * /messages:
   *   post:
   *     description: creates a message
   *     tags: [Message]
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: Post
   *         schema:
   *           type: object
   *           $ref: '#/definitions/message'
   */
  router.post('/messages',function(req, res) {
    var mssg = new Message();      // create a new instance of the Bear model
    mssg.message = req.body.message;  // set the bears name (comes from the request)
    mssg.showFrom = req.body.showFrom;
    mssg.showTill = req.body.showTill;
    mssg.imgLink = req.body.imgLink
    mssg.img = req.body.img
    // save the bear and check for errors
    mssg.save(function(err) {
        if (err){
            res.send(err);
        }
        res.json({ message: 'message Created' });
    });

});
/**
   * @swagger
   * /messages/:id:
   *   put:
   *     description: updates a specific message
   *     tags: [Message]
   *     produces:
   *       - application/json
   *     parameters:
   *       - $ref: '#/parameters/id'
   *       - name: id
   *         description: the documents id to Get
   *         in: formData
   *         required: true
   *         type: string
   *     responses:
   *       200:
   *         description: PUT
   *         schema:
   *           type: object
   *           $ref: '#/definitions/message'
   */
router.put('/messages/:id', function(req,res) {
    Message.updateOne({_id: req.params.id}, req.body,function(err, doc) {
        if(err) {
            res.send(err)
        }
        res.send (doc)
    })
})
/**
   * @swagger
   * /messages/:id:
   *   delete:
   *     description: deletes a specific message
   *     tags: [Message]
   *     produces:
   *       - application/json
   *     parameters:
   *       - $ref: '#/parameters/id'
   *       - name: id
   *         description: the documents id to Get
   *         in: formData
   *         required: true
   *         type: string
   *     responses:
   *       200:
   *         description: DELETE
   *         schema:
   *           type: object
   *           $ref: '#/definitions/message'
   */
router.delete('/messages/:id', function(req, res) {
    Message.remove({
        _id: req.params.id
    }, function(err, message) {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Successfully deleted' });
    })
})

router.get('/news', function(req,res) {
    
 
Feed.load('https://www.nu.nl/rss/Algemeen', function(err, rss){
    if (err) {
        res.send(err);
    }
    res.send(rss.items);
});
    
})

module.exports = router;
