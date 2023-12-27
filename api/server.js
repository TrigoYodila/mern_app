const express = require("express")
const employesRouter = require("./routes/employes")
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000


const app = express()

app.use('/api/employes', employesRouter)

app.listen(port, () => console.log(`Server started on port ${port}`)) 