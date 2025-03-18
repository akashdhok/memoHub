const express = require("express")
const route = express.Router()
const imgController = require("../controller/imgController")
const upload = require("../middleware/imgMiddleware")
route.post("/uploadimage" , upload.array( "image", 10) , imgController.uploadImage)


module.exports = route