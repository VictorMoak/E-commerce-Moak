const express = require('express')
const routes = express.Router()

let db = [
    { Nome: 'Joao', Email: 'Joao@gmail.com', Tipo: '1', Senha: '123' },
    { Nome: 'Maria', Email: 'Maria@gmail.com', Tipo: '2', Senha: '1234' },
    { Nome: 'José', Email: 'José@gmail.com', Tipo: '2', Senha: '123568' }
]

routes.get('/', (req, res) => {
    return res.json(db)
})

routes.post('/api/addUsuarios', (req, res) => {

    const body = req.body

    //if (!body)
    //    return res.status(400).end()

    db.push(body)

    return res.status(200).end()
})

module.exports = routes