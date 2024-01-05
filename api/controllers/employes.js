const asyncHandler = require("express-async-handler");
const Employe = require("../models/employes");
const User = require("../models/user")

const getEmployes = asyncHandler(async (req, res) => {
  const employes = await Employe.find({user:req.user.id});
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
        age,
        user:req.user.id
    })
    res.status(200).json(employe)
});

const updateEmploye = asyncHandler(async (req, res) => {
  const employe = await Employe.findById(req.params.id)

  if(!employe){
    res.status(400)
    throw new Error('Employe not found')
  }

  //get connected user
  const user = await User.findById(req.user.id)

  // Check for user
  if(!user){
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the goal user
  if(employe.user.toString() !== user.id){
    res.status(401)
    throw new Error('User not found')
  }

  const updatedEmploye = await Employe.findByIdAndUpdate(req.params.id, req.body,{
    new:true
  })

  res.status(200).json(updatedEmploye)
});

const deleteEmploye = asyncHandler(async (req, res) => {
    const employe = await Employe.findById(req.params.id)
   
    if(!employe){
      res.status(400)
      throw new Error('Employe not found')
    }

    //get connected user
  const user = await User.findById(req.user.id)

  // Check for user
  if(!user){
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the goal user
  if(employe.user.toString() !== user.id){
    res.status(401)
    throw new Error('User not found')
  }
  
  await employe.deleteOne()

  res.status(200).json({ id: req.params.id});
});

module.exports = {
  getEmployes,
  setEmploye,
  updateEmploye,
  deleteEmploye,
};
