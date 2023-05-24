import signUpModel from "../models/signUpModel.js";
import signInModel from "../models/signInModel.js";

const signUp=async(req,res)=>{
 try{
    const data=req.body
    const checker= await signUpModel.findOne({email:data.email})
    if(checker){
        res.status(404).json({
            message:"same credentials in our website"
        })
    }
    let signUpInstance= new signUpModel({
        email:data.email,
        password:data.password
    })
    
    signUpInstance.save()
    .then((data)=>{
        res.send(data)

    })

 }
 
 catch(err){
    console.log("some error foiund")
    res.send("collect your error")
 }


    
}



const signIn=async(req,res)=>{

    try{
        const data=req.body
        const checker= await signUpModel.findOne({email:data.email})
        if(checker){
            res.status(404).json({
                message:"Welcome to our services"
            })
        }else{
            res.send("kindly go back to register your account ")
        }
        let signUpInstance= new signUpModel({
            email:data.email,
            password:data.password
        })
        
        signUpInstance
        .then((data)=>{
            res.send(data)
    
        })
        
     }
     
     catch(err){
        console.log("some error was found")
        res.send("collect your error")
     }
    










    
}










export {signUp,signIn};