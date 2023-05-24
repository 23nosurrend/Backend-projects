import mongoose from "mongoose"

const signInSchema=new mongoose.Schema({

    email:{
        type:String,
       
    },
    password:{
        type:String,
        
    }

})
export default mongoose.model("SignInModel",signInSchema)