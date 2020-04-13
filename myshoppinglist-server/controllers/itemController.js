const express = require('express');
var router = express.Router();

const Item  = require('../models/item');
const User  = require('../models/user');

//url/list/
router.get('/', (req,res) =>{
    Item.findAll()
        .then(items => {
            res.json(items)
        })
        .catch(err => {
            res.send('error: ' + err)
        })
    }
)
router.get('/:uid', (req,res) =>{
        Item.findOne({
            where: {
                user_user_id: req.params.uid
            }
        })
            .then(items => {
                res.json(items)
            })
            .catch(err => {
                res.send('error: ' + err)
            })
    }
)

router.post('/:uid/new', (req, res) => {
    const today = new Date();
    const newItem = {
        item_product: req.body.item_product,
        item_quantity: req.body.item_quantity,
        item_priority: req.body.item_priority,
        item_deleted: req.body.item_deleted,
        item_purchased: req.body.item_purchased,
        user_user_id: req.params.uid,
        item_modified: today,
        item_created: today
    }

    console.log(req.params.item_purchased)
    Item.create(newItem)
        .then(item => {
            res.json({ item })
        })
        .catch(err => {
        res.send('error: ' + err)
    })
})

module.exports = router;
