//create route
let express = require('express');
let router = express.Router();
router.use(express.json());

//import model
let ContactCollection = require('../models/ContactSchema');

//Create a new contact
router.post('/',(req,res)=>{
    // res.send(`Create new contact`)
    ContactCollection.create(req.body,(errors,results)=>{
        errors ? res.send(errors) : res.send(results);
    })
})

//Read a specific contact
router.get('/:contact_name',(req,res)=>{
    // res.send(`Get specific contact by name`)
    ContactCollection.findOne({contactName:req.params.contact_name},(errors,results)=>{
        errors ? res.send(errors) : res.send(results);
    })
})

//Update a contact by name
router.put('/:contact_name',(req,res)=>{
    // res.send(`Update contact by name`)
    ContactCollection.findOneAndUpdate({contactName:req.params.contact_name}, req.body, (errors,results)=>{
        errors ? res.send(errors) : res.send(results);
    })
})

//Delete a contact by name
router.delete('/:contact_name',(req,res)=>{
    // res.send(`Deleted contact by name`)
    ContactCollection.findOneAndDelete({contactName:req.params.contact_name}, (errors,results)=>{
        errors ? res.send(errors) : res.send(results);
    })
})

//Get all contacts
router.get('/',(req,res)=>{
    // res.send(`Get all contacts`)
    ContactCollection.find({},(errors,results)=>{
        errors ? res.send(errors) : res.send(results);
    })
})

//export route
module.exports = router;
