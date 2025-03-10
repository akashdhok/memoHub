const mongoose = require("mongoose")

const noteSchema  = new mongoose.Schema({
    head : String,
    text : String,
    userid : {
        type : mongoose.Schema.ObjectId,
        ref : "user"
    }
})


module.exports = mongoose.model("note" , noteSchema)