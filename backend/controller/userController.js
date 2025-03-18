const userModel = require("../model/userModel")
const bcrypt = require("bcrypt")
const noteModel = require("../model/noteModel")
const imgmodel = require("../model/imgModel")
const signUp = async(req ,res)=>{
   try {
    let{name , email , password} = req.body;
    let salt = await bcrypt.genSalt(10);
    let hashPassword  =await bcrypt.hash(password , salt)
    const Data = await userModel.create({
        name : name,
        email : email,
        password : hashPassword
    })
    res.send(Data)
   } catch (error) {
    console.log(error)
   }
   
}
const Login  =async(req ,res)=>{
try {
    let{email , password} = req.body
    const data = await userModel.findOne({email :email})
    const hashPassword = await bcrypt.compare(password , data.password)
    if(!data)
    {
        return res.status(400).send("Invalid Email")
    }
    if(!hashPassword)
    {
        return res.status(400).send("Invalid Password")

    }
    return res.status(200).send(data)
} catch (error) {
    return res.status(400).send(error)

}
}
const showData = async(req , res)=>{
   const{userid} = req.query
  let data = await noteModel.find({userid : userid})
  let image = await imgmodel.find({userid : userid})
  
  res.status(200).send({ notes: data, images: image });
}


module.exports = {
    signUp,
    Login,
    showData,
   
}