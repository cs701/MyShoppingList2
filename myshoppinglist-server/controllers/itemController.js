const express = require('express');
var router = express.Router();

const Item  = require('../models/item');
const User  = require('../models/user');

//url/list/
router.get('/', (req,res) =>{
    Item.findAll()
        .then(items => {
            res.json(items);
            console.log(items);
        })
        .catch(err => {
            res.send('error: ' + err)
        })
    }
)
router.get('/:uid', (req,res) =>{
        Item.findAll({
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
});

router.put('/:id/purchased',(req,res)=>{
  const today=new Date();
  Item.update({item_purchased:1,item_modified:today},{
    where:{item_id:req.params.id}
  })
  .then(num => {
    if (num == 1) {
      res.send({
        message: "Tutorial was updated successfully."
      });
    } else {
      res.send({
        message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message: "Error updating Tutorial with id=" + id
    });
  });
})；

router.put('/:id/deleted',(req,res)=>{
  const today=new Date();
  Item.update({item_deleted:1,item_modified:today},{
    where:{item_id:req.params.id}
  })
  .then(num => {
    if (num == 1) {
      res.send({
        message: "Item was updated successfully."
      });
    } else {
      res.send({
        message: `Cannot update Item with id=${id}. Maybe Tutorial was not found or req.body is empty!`
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message: "Error updating item with id=" + id
    });
  });
});

router.put('/:id/change',(req,res)=>{
  const today=new Date();
  Item.update({item_product:req.body.item_product,
    item_quantity:req.body.item_quantity,
    item_priority:req.body.item_priority,
    item_modified:today},{
    where:{item_id:req.params.id}
  })
  .then(num => {
    if (num == 1) {
      res.send({
        message: "Item was updated successfully."
      });
    } else {
      res.send({
        message: `Cannot update Item with id=${id}. Maybe Tutorial was not found or req.body is empty!`
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message: "Error updating Item with id=" + id
    });
  });
})

module.exports = router;
