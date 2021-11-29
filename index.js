var express = require('express')
var app = express()

app.get('/', function (req, res) {
    res.sendFile("pocetna.html", { root: __dirname })
})

app.get('/igra', function (req, res) {
    res.sendFile("igra.html", { root: __dirname })
})


app.get('/post-zahtev', function (req, res) {
 res.status(500)
})

app.get('/users/:name', function (req, res) {
    res.send('Hello user ' + req.params.name)
   })
app.listen(8000)

