const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const app = express()

//Settings
app.set('port', process.env.PORT || 3000)
app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, '../app/views'))

//Middleware
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: false}))

module.exports = app;
