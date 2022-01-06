const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layout')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')