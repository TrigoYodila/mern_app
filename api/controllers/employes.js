const asyncHandler = require("express-async-handler");
const Employe = require("../models/employes");

const getEmployes = asyncHandler(async (req, res) => {
  const employes = await Employe.find();
  res.status(200).json(employes);
});

const setEmploye = asyncHandler(async (req, res) => {
 
    const {name,lastname,age} = req.body

    if(!req.body.name){
        res.status(400)
        throw new Error('Please, add a name')
    }
    
    const employe = await Employe.create({
        name,
        lastname,
        age
    })
    res.status(200).json(employe)
});

const updateEmploye = asyncHandler(async (req, res) => {
  const employe = await Employe.findById(req.params.id)

  if(!employe){
    res.status(400)
    throw new Error('Employe not found')
  }

  const updateEmploye = await Employe.findByIdAndUpdate(req.params.id, req.body,{
    new:true
  })

  res.status(200).json(updateEmploye)
});

const deleteEmploye = asyncHandler(async (req, res) => {
    const employe = await Employe.findById(req.params.id)
   
    if(!employe){
      res.status(400)
      throw new Error('Employe not found')
    }

    await employe.remove()

  res.status(200).json({ id: req.params.id});
});

module.exports = {
  getEmployes,
  setEmploye,
  updateEmploye,
  deleteEmploye,
};
