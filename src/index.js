const express = require('express')
const swaggerUi = require('swagger-ui-express')
const route = require('./routes/char.Route')
const swggerDocument = require('./documentation.json')

const app = express()

const port = process.env.PORT || 8080

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swggerDocument))

app.use(express.json())
app.use('/' , route)

app.listen(port, () => {
    console.log(`A porta ${port} é minha agora`)
})