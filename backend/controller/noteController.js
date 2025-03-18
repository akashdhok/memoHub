const noteModel = require("../model/noteModel")



const createNote = async(req , res)=>{
    try {
        let{head , text , userid}  =req.body;
        const data  =await noteModel.create({
            head : head,
            text  :text,
            userid : userid
        })
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send(error)
    }
}
const editData = async(req  ,res)=>{
    console.log(req.query)
    res.send("okk")
}


module.exports = {
    createNote,
    editData 
}