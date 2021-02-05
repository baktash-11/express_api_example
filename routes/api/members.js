const express = require ('express');
const router= express.Router();

const members = require('../../Members');

router.get('/api/mems', function(req, res){
    res.json(members);
});

module.exports=router;