const express = require("express")
const route = express.Router()

const noteController = require("../controller/noteController")


route.post("/createnote" , noteController.createNote)


module.exports = route