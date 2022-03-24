const express = require('express')
const router = express.Router()
const Organization = require('../models/businessOrganization')

//Getting all
router.get('/', async (req, res) => {
    try {
      const businessOs = await Organization.find()
      res.json(businessOrganizations)
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  })
//Getting one
router.get('/:id',(req,res)=>{
    
})
//Adding one
router.post('/',async (req,res)=>{
    const businessOrganization = new Organization({
        CompanyName: req.body.CompanyName,
        CEOName: req.body.CEOName,
        Managers: req.body.Managers,
        netWorth: req.body.netWorth,
        Products: req.body.Products,
        profitByYear: req.body.profitByYear
    })
    try {
        const newBusinessOrganization = await businessOrganization.save()
        res.status(201).json(newBusinessOrganization)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})
//Updating one
router.patch('/',(req,res)=>{
    
})
//Deleting one
router.delete('/:id',(req,res)=>{
    
})
module.exports = router