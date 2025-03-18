const express = require("express")
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
require("dotenv").config()
const Port = process.env.PORT
const userRoute  = require("./routes/userRoute")
const noteRoute = require("./routes/noteRoute")
const imgRoute = require("./routes/imgRoute")
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))

mongoose.connect(process.env.DB_CONNECTION).then(()=>{
    console.log("DB Connected")
})

app.use("/user" , userRoute)
app.use("/note"  ,noteRoute)
app.use("/img" , imgRoute)
app.use("/uploads" , express.static("uploads"))
app.listen(Port , ()=>{
    console.log(`listening at the port of ${Port}`)
})