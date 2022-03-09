const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

// middleware
app.use(express.json())

app.use(express.urlencoded({ extended: true }))

// routers
const portfolioRouter = require('./routes/portfolioRouter.js')
app.use('/api/portfolios', portfolioRouter)

const photoRouter = require('./routes/photoRouter.js')
app.use('/api/photos', photoRouter)


//static Images Folder
app.use('/Images', express.static('./Images'))


//port
const PORT = process.env.PORT || 8080

//server
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})