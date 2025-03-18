const express = require("express")
const route = express.Router()
const userController = require("../controller/userController")
route.post("/signup" , userController.signUp )
route.post("/login" , userController.Login )
route.get("/shownote" , userController.showData)

module.exports = route