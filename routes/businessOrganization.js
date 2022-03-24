const express = require('express')
const router = express.Router()
const organization = require('../models/businessOrganization')

//Getting all
router.get('/', async (req, res) => {
    try {
      const businessOrganizations = await organization.find()
      res.json(businessOrganizations)
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  })
//Getting one
router.get('/:id',(req,res)=>{
    
})
//Adding one
router.post('/',(req,res)=>{
    
})
//Updating one
router.patch('/',(req,res)=>{
    
})
//Deleting one
router.delete('/:id',(req,res)=>{
    
})
module.exports = router