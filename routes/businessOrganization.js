const express = require('express')
const router = express.Router()
const Organization = require('../models/businessOrganization')

//Getting all
router.get('/', async (req, res) => {
    try {
      const businessOrganizations = await Organization.find()
      res.json(businessOrganizations)
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  })
//Getting one
router.get('/:id',getOrganization,(req,res)=>{
    res.json(res.businessOrganization)
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
router.patch('/:id',getOrganization,async (req,res)=>{
    if(req.body.CompanyName!=null){
        res.businessOrganization.CompanyName = req.body.CompanyName
    }
    try {
        const updatedOrganization = await res.businessOrganization.save()
        res.json(updatedOrganization)
    } catch (err) {
        res.status(400).json({message:err.message})
    }
})

//Deleting one
router.delete('/:id',getOrganization,async(req,res)=>{
    try{
        await res.businessOrganization.remove()
        res.json({message:"Deleted Organization"})
    }catch(err){
        res.status(500).json({message:err.message})
    }
})


async function getOrganization(req, res, next) {
    let businessOrganization
    try {
        businessOrganization = await Organization.findById(req.params.id)
      if (businessOrganization == null) {
        return res.status(404).json({ message: 'Cannot find business organization' })
      }
    } catch (err) {
      return res.status(500).json({ message: err.message })
    }
  
    res.businessOrganization = businessOrganization
    next()
}


module.exports = router