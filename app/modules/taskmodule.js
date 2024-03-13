const mongoose = require('mongoose')

const {Schema, model} = mongoose
const taskSchema = new Schema({
    title: String,
    description: String,
    status: {
        type: String,
        enum: ['To Do', 'In Progress', 'Done'],
        default: 'To Do'
    }
})

const Task = model('Task', taskSchema)

module.exports = Task