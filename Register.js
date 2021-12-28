const mongoose=require('mongoose')
const RegisterSchema=new mongoose.Schema({
   firstname:{
        type:String
       },
    lastname:{
        type:String
    },
    
    fathername:{
        type:String
    },
    mothername:{
        type:String
    },
    dateofbirth:{
       type:String
    },
    gender:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    phoneno:{
        type:String
    },
    address:{
        type:String
    }

    
})
const Register= mongoose.model("Register",RegisterSchema)
module.exports=Register