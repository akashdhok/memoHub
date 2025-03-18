const mongoose = require("mongoose")

const imgSchema = new mongoose.Schema({
    image : [String],
     userid : {
            type : mongoose.Schema.ObjectId,
            ref : "user"
        }
})



module.exports = mongoose.model("image" , imgSchema)