const imgModel = require("../model/imgModel")


const uploadImage = async(req , res)=>{
const imageUrl = req.files.map(file=>file.path)
const {userid} = req.query;
const imageData = await imgModel.create({
    image : imageUrl,
    userid : userid
})

res.send(imageData)
}



module.exports = {
    uploadImage
}








