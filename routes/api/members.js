const express = require ('express');
const uuid = require('uuid');
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

//creat new member 
router.post('/', function(req, res){
    const newMember = {
        id: uuid.v4(), 
        name:req.body.name,
        status: 'active'

    }
    if(!newMember.name ){
        return res.status(400).json({msg: 'Please include a name'})
    }
    menubars.push(newMember);
    res.json(members);
    //https://www.youtube.com/watch?v=L72fhGm1tfE
    //time on video 49:41
});


module.exports=router;