const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json({ type: '*.*' }))

const PORT = process.env.PORT || 3090

app.listen(PORT)

console.log('listening to port ' + PORT)

app.get('/', (req, res, next) => {
    res.send('welcome')
})