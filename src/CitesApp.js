const express = require('express')
const path = require('path')
const morgan = require('morgan')
const bodyParser = require('body-parser')



//Vars
const App = express()

//settings
App.set('port', process.env.PORT || 3000)
App.set('views', path.join(__dirname, 'Views'))
App.use(express.static(path.join(__dirname, 'Publics')))
// App.use(express.static("Public"))
App.set('view engine', 'ejs')
App.use(morgan('dev'))
App.use(bodyParser.urlencoded({ extended: false }))

//Routes
App.use(require('./Routes/Routes'))


//Inits
App.listen(App.get('port'), () => {
    console.log("Server Running on Port", App.get('port'));
    //console.log(path.join(__dirname));
})
