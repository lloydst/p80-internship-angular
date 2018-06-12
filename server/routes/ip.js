var express = require('express');
var router = express.Router();
var Ip = require('../models/Ip');

router.get('/',function (req,res){
    Ip.find(function(err, allIps) {
        if (err) {
            console.log(err)
        }
        res.send(allIps)
    })
    
});
router.post('/',function (req,res){
    Ip.create({
        ip: req.body.ip, 
        name: req.body.name, 
        channel: req.body.channel
    },function(err, singleIp) {
        if (err) {
            console.log(err)
        }
        res.send(singleIp)
    })
    
});
router.get('/:ip',function (req,res){
    Ip.findOne({ip: req.params.ip},function(err, singleIp) {
        if (err) {
            console.log(err)
        }
        res.send(singleIp)
    })
    
});
router.delete('/:ip',function (req,res){
    Ip.findOneAndRemove({ip: req.params.ip},function(err, res) {
        if (err) {
            console.log(err)
        }
        
    })
    res.send("deleted")
});
router.put('/:ip',function (req,res){
    Ip.findOneAndUpdate({ip: req.params.ip},{
        ip: req.body.ip, 
        name: req.body.name, 
        channel: req.body.channel
    },function(err, singleIp) {
        if (err) {
            console.log(err)
        }
        res.send(singleIp + "updated")
    })
    
});

module.exports = router