const express = require('express');
var router = express.Router();

const Item  = require('../models/item');
const User  = require('../models/user');

//url/list/
router.get('/', (req,res) =>{
    Item.findAll()
        .then(item => {
            res.json(item)
        })
        .catch(err => {
            res.send('error: ' + err)
        })
    }


)
module.exports = router;


