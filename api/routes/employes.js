const express = require('express')
const { getEmployes,setEmploye, updateEmploye,deleteEmploye } = require("../controllers/employes")
const router = express.Router()

router.route('/').get(getEmployes).post(setEmploye)
// router.get('/', getEmployes)
// router.post('/', setEmploye)

router.route('/:id').put(updateEmploye).delete(deleteEmploye)
// router.put('/:id', updateEmploye)
// router.delete('/:id', deleteEmploye)

module.exports = router