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
router.post('/',function(req,res){
    Content.create(req.body)
})
router.put('/',function(req,res){
    check()
    setTimeout(() => {
        updateCreateGet()
    }, 200);
    /**
     * checks for the existence of a 'channel' by searching for the _id send with the request
     */
    function check() { 
        // search
        Content.find({_id: req.body._id}, function(err,doc){
            // sees if the returned document has fields
            if(doc.length == 0){
                Content.create(
                    {channel: req.body.channel,
                    path:req.body.path}
                    )
                return exists = false // default is false already but setting it here again makes it saver.
            }else if (doc[0].channel === req.body.channel){
                exists = true
                return exists
            }
        })
    }
    // if it exists it will update
    function updateCreateGet() {
        if(exists){
           
            Content.findOneAndUpdate({_id: req.body._id}, req.body , function(err, doc){
                if (err) {
                    console.log(err)
                }
                res.send({ message: 'attempted to update' });
            })
            // if it doesn't it wil create
        } else if(!exists){
            Content.create(req.body, function(err,doc){
                if (err){
                    res.send(err)
                }
                res.send({ message: 'channel created' });
            })
        }
    }
})

router.delete('/:channel', function(req,res) {
    Content.findOneAndRemove({channel: req.params.channel}, function(err,doc){
        if (err) {
            console.log(err)
        }
        
        res.json({ message: ' removed' });
    })
})
module.exports = router;