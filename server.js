const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const porta = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.set('json spaces',4)
//rotas
var routes = require('./routes/route.js') //importando a rota
routes(app)// registrano a rota. Então podemos usar o app em routes

//app.use('/', require('./routes/index')(express));
//require('./routes')(app)


app.listen(porta,()=>{

    console.log("Tudo OK!")

})






// app.get('/', (req, res) => {
//     res.send('Tudo OK!')
// })