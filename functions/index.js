const functions = require('firebase-functions')
const express = require('express')
const cors = require('cors')

// var projectId = 'shellhacks20'
// var location = 'us-central1'
// var modelId = 'ICN4666382323862732800'
const accountSid = "AC2e0e2fba7ed459ce28d9e238f5e3554a";
const authToken = "c4edae95a0ff160cbee46cedef5d6e19";
const client = require('twilio')(accountSid, authToken);

const app = express()
app.use(cors({origin:true}))

app.get("/getM",(req,res)=>{
    // console.log("in here")
    res.send("in here")
    // return "In here"
})


app.post('/sendMessage',(request,response)=>{
    // response.send(`${Date.now()}`)
// response.send(request.body)
    var number = request.body.numbers
    for (var i=0;i<number.length;i++) {
        client.messages
        .create({
          to: number[i],
          from: '+12143607497',
          body: request.body.message,
        })
        .then(message => console.log(message.sid));
    }

 
response.send("success")

})

exports.app  = functions.https.onRequest(app)