const express = require('express')
const controller = require('../controller/char.controller')

const route = express.Router()

route.get('/v1/public/characters', controller.listAllChar)
route.get('/v1/public/characters/:id', controller.listChar)
route.get('/v1/public/characters/:id/comics', controller.listCharComic)
route.get('/v1/public/characters/:id/events', controller.listCharEvents)
route.get('/v1/public/characters/:id/series', controller.listCharSeries)
route.get('/v1/public/characters/:id/stories', controller.listCharStories)

module.exports = route