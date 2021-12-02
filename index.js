var express = require('express')
var app = express()

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.sendFile("pocetna.html", { root: __dirname })
})

app.get('/igra', function (req, res) {
    res.sendFile("igra.html", { root: __dirname })
})
app.get('/onama', function (req, res) {
    res.sendFile("onama.html", { root: __dirname })
})
app.get('/highscore', function (req, res) {
    res.sendFile("highscore.html", { root: __dirname })
})


app.get('/post-zahtev', function (req, res) {
 res.status(500)
})

app.get('/users/:name', function (req, res) {
    res.send('Hello user ' + req.params.name)
   })
app.listen(8000)

