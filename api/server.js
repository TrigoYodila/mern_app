const express = require("express")
const employesRouter = require("./routes/employes")
const usersRouter = require("./routes/user")
const { errorHandler } = require("./middleware/error")
const colors = require('colors')
const connectDB = require('./config/db')

const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000


connectDB()
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/employes', employesRouter)
app.use('/api/users', usersRouter)

//app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`)) 