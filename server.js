const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({
    extended: true
}));

require('./src')(app)

app.listen(3000, () => {
    console.log('SERVIDOR INICIADO!')
})
