const { validationResult } = require('express-validator')
const Task = require("../modules/taskmodule")
const taskValidationSchema = require("../taskValidation/validation")
const _ = require('lodash')

const tasksCltr = {}

tasksCltr.create = async (req, res)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }
    const body = _.pick(req.body, ['title', 'description', 'status'])
    try{
        const task = new Task(body)
        await task.save()
        res.status(201).json(task)
    }catch(e){
        console.log(e)
        res.status(500).json(e)
    }
}

tasksCltr.list = async (req, res)=>{
    try{
        const task = await Task.find()
        res.json(task)
    }catch(e){
        console.log(e)
        res.status(500).json(e)
    }
}

tasksCltr.listSingleTask = async (req, res)=>{
    const id = req.params.id
    try{
        const task = await Task.findById(id)
        res.json(task)
    }catch(e){
        console.log(e)
        res.status(500).json(e)
    }
}

tasksCltr.update = async (req, res)=>{
    const id = req.params.id
    const body = req.body
    try{
        const task = await Task.findByIdAndUpdate(id, body, {new: true})
        res.json(task)
    }catch(e){
        console.log(e)
        res.status(500).json(e)
    }
}

tasksCltr.delete = async (req, res)=>{
    const id = req.params.id
    try{
        const task = await Task.findByIdAndDelete(id)
        res.json(task)
    }catch(e){
        console.log(e)
    }
}

module.exports = tasksCltr