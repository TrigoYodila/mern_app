const express = require('express')
const { getEmployes,setEmploye, updateEmploye,deleteEmploye } = require("../controllers/employes")
const router = express.Router()
const { protect } = require('../middleware/auth')

router.route('/').get(protect,getEmployes).post(protect,setEmploye)
// router.get('/', getEmployes)
// router.post('/', setEmploye)

router.route('/:id').put(protect,updateEmploye).delete(protect,deleteEmploye)
// router.put('/:id', updateEmploye)
// router.delete('/:id', deleteEmploye)

module.exports = router