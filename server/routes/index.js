var express = require('express');
var router = express.Router();
var Website = require('../models/Website')
var Message = require('../models/Message')
var status = require('http-status');
var Feed = require('rss-to-json');
var YQL = require('yql'); // yahoo query language

var home = require('./home');
var authorize = require('./authorize');
var calendar = require('./calendar');
var content = require('./contents');
var jira = require('./jira')
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
   *       _id:
   *         type: string
   *       identifier:
   *         type: string
   *       img:
   *         type: boolean
   *       imgLink:
   *         type: string
   *       showTill:
   *         type: string
   *       showFrom:
   *         type: string
   *       message:
   *         type: string
   *       __v:
   *         type: string
   *   image:
   *     properties:
   *       _id:
   *         type: string
   *       filename:
   *         type: string
   *       contentType:
   *         type: string
   *       lenth:
   *         type: string
   *       chunkSize:
   *         type: string
   *       uploadDate:
   *         type: string
   *       aliases:
   *         type: string
   *       metadata:
   *         type: string
   *       md5:
   *         type: string
   *   weather:
   *     properties:
   *       title:
   *         type: string
   *       link:
   *         type: string
   *       description:
   *         type: string
   *       language:
   *         type: string
   *       lastBuildDate:
   *         type: string
   *       ttl: 
   *         type: string
   *       units:
   *            type: object
   *            properties:
   *                distance:
   *                    type: string
   *                pressure:
   *                    type: string
   *                speed:
   *                    type: string
   *                temperature:
   *                    type: string
   *       location:
   *            type: object
   *            properties:
   *                city:
   *                    type: string
   *                country:
   *                    type: string
   *                region:
   *                    type: string
   *       wind:
   *            type: object
   *            properties:
   *                chill:
   *                    type: string
   *                direction:
   *                    type: string
   *                speed:
   *                    type: string
   *       atmospere:
   *            type: object
   *            properties:
   *                humidity:
   *                    type: string
   *                pressure:
   *                    type: string
   *                rising:
   *                    type: string
   *                visibility:
   *                    type: string
   *       astronomy:
   *            type: object
   *            properties:
   *                sunrise:
   *                    type: string
   *                sunset:
   *                    type: string
   *       image:
   *            type: object
   *            properties:
   *                title:
   *                    type: string
   *                width:
   *                    type: string
   *                height:
   *                    type: string
   *                link:
   *                    type: string
   *                url:
   *                    type: string
   *       item:
   *            type: object
   *            properties:
   *                title:
   *                    type: string
   *                lat:
   *                    type: string
   *                long:
   *                    type: string
   *                link:
   *                    type: string
   *                pubDate:
   *                    type: string
   *                condition:
   *                    type: object
   *                    properties:
   *                        code:
   *                            type: string
   *                        date:
   *                            type: string
   *                        temp:
   *                            type: string
   *                        text:
   *                            type: string
   *       forecast:
   *            type: array
   *            items:
   *                type: object
   *                properties:
   *                    code:
   *                        type: string
   *                    date:
   *                        type: string
   *                    day:
   *                        type: string
   *                    high:
   *                        type: string
   *                    low:
   *                        type: string
   *                    text:
   *                        type: string
   */ 
  
  /**
   * @swagger
   * tags:
   *    - name: Website
   *      description: Websites
   *    - name: Message
   *      description: Messages
   *    - name: News
   *      description: News
   *    - name: Weather
   *      description: Weather
   *    - name: Image
   *      description: Images
   *    - name: Calendar
   *      description: Calendar
   *    - name: Authorize
   *      description: Authorize
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
    Message.find({identifier: req.params.id,} , function(err, message) {
        if (err) {
            res.send(err);
        }
       res.json(message)
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
    mssg.identifier = req.body.identifier
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
    Message.updateOne({identifier: req.params.id}, req.body,function(err, doc) {
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
        identifier: req.params.id
    }, function(err, message) {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Successfully deleted' });
    })
})
/**
   * @swagger
   * /news:
   *   get:
   *     description: gets the rss feed of nu.nl
   *     tags: [News]
   *     produces:
   *       - feed/rss
   *     responses:
   *       200:
   *         description: GET
   */
router.get('/news', function(req,res) {
    Feed.load('https://www.nu.nl/rss/Algemeen', function(err, rss){
        if (err) {
            res.send(err);
        }
        res.send(rss.items);
    });  
})

  /**
   * @swagger
   * /weather:
   *   get:
   *     description: Gets weather from yahoo's weather api
   *     tags: [Weather]
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: Get
   *         schema:
   *           type: object
   *           $ref: '#/definitions/weather'
   */
router.get('/weather', function(req,res){
    var query = new YQL('select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="amsterdam, nl")and u="c"');
    query.exec(function(err, data) {
        
        
        res.send([data.query.results.channel])
      });
})
router.use('/login', home);
router.use('/authorize', authorize);
router.use('/calendar', calendar);
router.use('/content', content);
router.use('/jira', jira);
module.exports = router;
