const functions = require('firebase-functions')
const express = require('express')
const cors = require('cors')

// var projectId = 'shellhacks20'
// var location = 'us-central1'
// var modelId = 'ICN4666382323862732800'

const app = express()
app.use(cors({origin:true}))

app.get('/timestamp',(request,response)=>{
    response.send(`${Date.now()}`)
})

exports.app  = functions.https.onRequest(app)