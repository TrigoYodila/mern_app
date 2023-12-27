const express = require('express')
const { getEmployes,setEmploye, updateEmploye,deleteEmploye } = require("../controllers/employes")
const router = express.Router()

router.get('/', getEmployes)

router.post('/', setEmploye)

router.put('/:id', updateEmploye)

router.delete('/:id', deleteEmploye)

module.exports = router