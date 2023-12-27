const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json({message:"Get employes"})
})

router.post('/', (req,res) => {
    res.status(200).json({message:"Set employe"})
})

router.put('/:id', (req, res) => {
    res.status(200).json({message:`Update empoloye ${req.params.id}`})
})

router.delete('/:id', (req,res)=>{
    res.status(200).json({message:`Delete employe ${req.params.id}`})
})

module.exports = router