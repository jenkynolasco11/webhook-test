var express = require('express')
var body = require('body-parser')
var route = express.Router()

var app = express()

route.post('/webhook/twilio', function(req, res) {
    console.log(req.body)
})


app
    .use(body.urlencoded({ extended : true }))
    .use(route)

app.listen(process.env.PORT || 8000, function() {
    console.log('Listening on port ' + (process.env.PORT || 8000))
})
