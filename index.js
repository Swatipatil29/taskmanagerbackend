const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())
const PORT = 3050

const {checkSchema} = require('express-validator')
const configureDB = require("./configuration/config")
const taskValidationSchema = require("./app/taskValidation/validation")
const tasksCltr = require("./app/controller/taskCtrl")
configureDB()

app.post('/api/tasks', checkSchema(taskValidationSchema), tasksCltr.create)
app.get('/api/getAlltasks', tasksCltr.list)
app.get('/api/tasks/:id', tasksCltr.listSingleTask)
app.put('/api/tasks/:id', tasksCltr.update)
app.delete('/api/tasks/:id', tasksCltr.delete)

app.listen(PORT, ()=>{
    console.log('server running on port', PORT)
})