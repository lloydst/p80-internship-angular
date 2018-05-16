var express = require('express');
var router = express.Router();
var Content = require('../models/Content')
var exists= false
/**
 * ENTRANCE CONTENTS
 */
router.get('/',function(req,res){
    Content.find( function(req,channel){
        res.send(channel)
    })
})
router.get('/:channel',function(req,res){
    
    Content.find({channel: req.params.channel}, function(err,channelRoutes){
        if(err){
            console.log(err)
        }
        
        res.send(channelRoutes)
    })
})
router.put('/',function(req,res){
    // checks if channel already exists
    check()
    setTimeout(() => {
        updateCreateGet()
    }, 200);
    function check() {
        // check if "channel exists"
        
        Content.find({channel: req.body.channel}, function(err,doc){
            if(doc.length == 0){
                console.log(doc +'!='+req.body.channel)
                console.log(doc !== req.body.channel)
                console.log('nope')
                exists=false
                return exists
                //res.send(doc)
            }else if (doc[0].channel === req.body.channel){
                console.log(doc[0].channel +'='+req.body.channel)
                console.log(doc[0].channel === req.body.channel)
                console.log('jup')
                exists = true
                return exists
            }
            
        })
    }
    // if it exists it will update
    function updateCreateGet() {
        console.log(req.body.channel)
        if(exists){
            Content.findOneAndUpdate({channel: req.body.channel}, req.body , function(err,doc){
                if (err) {
                    console.log(err)
                }
                res.json({ message: 'channel updated' });
            })
            // if it doesn't it wil create
        } else if(!exists){
            Content.create(req.body, function(err,doc){
                console.log(req.body + 'i am called in create')
                if (err){
                    res.send(err)
                }
                res.json({ message: 'channel created' });
            })
        }
    }
    
})

module.exports = router;