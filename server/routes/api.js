//create route
let express = require('express');
let router = express.Router();
router.use(express.json());

//Create a new contact
router.post('/',(req,res)=>{
    res.send(`Create new contact`)
})

//Read a specific contact
router.get('/:name',(req,res)=>{
    res.send(`Get specific contact by name`)
})

//Update a contact by name
router.put('/:name',(req,res)=>{
    res.send(`Update contact by name`)
})

//Delete a contact by name
router.delete('/:name',(req,res)=>{
    res.send(`Deleted contact by name`)
})

//Get all contacts
router.get('/',(req,res)=>{
    res.send(`Get all contacts`)
})

//export route
module.exports = router;
