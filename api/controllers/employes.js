const getEmployes = (req, res) => {
    res.status(200).json({message:"Get employes"})
}

const setEmploye = (req, res) => {
    res.status(200).json({message:"Set employe"})
}

const updateEmploye = (req, res) => {
    res.status(200).json({message:`Update empoloye ${req.params.id}`})
}

const deleteEmploye = (req, res) => {
    res.status(200).json({message:`Delete employe ${req.params.id}`})
}

module.exports = {
    getEmployes,
    setEmploye,
    updateEmploye,
    deleteEmploye
}