const express = require('express')
const Router = express.Router()
const {GetIndex, PostIndex} = require('../actions/API')

Router.get("/", GetIndex)

Router.post("/new", PostIndex)

module.exports = Router