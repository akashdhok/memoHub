const express = require("express")
const route = express.Router()

const noteController = require("../controller/noteController")


route.post("/createnote" , noteController.createNote)
route.post("/editdata" , noteController.editData)



module.exports = route