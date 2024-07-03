const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://admin:<password>@cluster0.tyrszwn.mongodb.net/')

const todoSchema = mongoose.Schema({
    title:String,
    desc:String,
    completed:Boolean
})

const todo = mongoose.model('todos',todoSchema)

module.exports = {
    todo
}