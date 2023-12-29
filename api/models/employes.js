const mongoose = require('mongoose')

const employeSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    name:{
        type:String,
        required:[true, 'Please add a name']
    },
    lastname:{
        type:String
    },
    age:{
        type:Number
    }
},{
    timestamps:true
})

module.exports = mongoose.model('Employe', employeSchema)