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
    Content.findOneAndUpdate({_id: req.body._id}, req.body,{new: true}, function(err,doc){
        if (err) {
            console.log(err)
        }
        return res.send(doc)
    })

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