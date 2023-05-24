import mongoose from "mongoose"

const signUpSchema=new mongoose.Schema({

    email:{
        type:String,
       
    },
    password:{
        type:String,
        
    }

})
export default mongoose.model("SignUpModel",signUpSchema)