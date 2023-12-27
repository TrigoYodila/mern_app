const express = require("express")
const employesRouter = require("./routes/employes")
const { errorHandler } = require("./middleware/error")

const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/employes', employesRouter)

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`)) 