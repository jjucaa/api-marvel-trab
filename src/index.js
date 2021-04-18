const express = require('express')
const route = require('./routes/charRoute')

const app = express()

app.use(express.json())
app.use('/' , route)

const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`A porta ${port} é minha agora`)
})