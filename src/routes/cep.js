const express = require('express')
const router = express.Router()
const buscaCep = require('node-correios')

const cepcorreios = new buscaCep()

router.post('/', (request, response) => {
    const { cep } = request.body

    cepcorreios.consultaCEP({ cep }).then(result => {
        return response.json(result)
    }).catch(error => {
        return response.json(error)
    })
})

module.exports = router

