const asyncHandler = require('express-async-handler')

const getEmployes = asyncHandler(async(req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({message:"Get employes"})
})

const setEmploye = asyncHandler(async(req, res) => {
    res.status(200).json({message:"Set employe"})
})

const updateEmploye = asyncHandler(async(req, res) => {
    res.status(200).json({message:`Update empoloye ${req.params.id}`})
}
)
const deleteEmploye = asyncHandler(async(req, res) => {
    res.status(200).json({message:`Delete employe ${req.params.id}`})
})

module.exports = {
    getEmployes,
    setEmploye,
    updateEmploye,
    deleteEmploye
}