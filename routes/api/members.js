const express = require ('express');
const router= express.Router();
const members = require('../../Members');



//get all memebers
router.get('/', function(req, res){
    res.json(members);
});

//get single memeber
router.get('/:id', function(req, res){
    const found = members.some(member => member.id === parseInt(req.params.id));
    if(found){
        res.json(members.filter(member => member.id === parseInt(req.params.id)));
    }else{
        res.status(400).json({msg:`id: ${req.params.id} does not exist`})
    }

    
    //res.send(req.params.id);
});


module.exports=router;