import mongoose from "mongoose"

const articleSchema=new mongoose.Schema({

    title:{
        type:String,
        required:"Title is required"
    },
    content:{
        type:String,
        required:"provide your content"
    },
    author:{
        type:String,
        required:"provide name of author"
    },
    image:{
        type:String,
        

    }

})
export default mongoose.model("ArticleModel",articleSchema)