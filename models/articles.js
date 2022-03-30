const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const ArticleSchema = mongoose.Schema({
    title: {
        type: String,
        required : true , 
        trim : true
    },
    description: {
        type: String,
        required : true , 
        trim : true
    },
    status: {
        type: String,
        required : false , 
        trim : true ,
        enum : ["published" , "draft"] ,
        default : "published"
    },
    reviews: {
        type: Array, // { comment , fullname , email ,  date ,  user_id }
        required : false 
    },
    likes: {
        type: Array, // { user_id }
        required : false 
    },
    image: {
        type: mongoose.Schema.Types.ObjectId, 
        required : true ,
        ref : "file"
    }, 
    category: {
        type: String, 
        required : true ,
        trim : true ,
    },
    viewcount: {
        type: Number,
        required : false ,
        default : 0
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    }
})

const ArticlesRquest = mongoose.model("article", ArticleSchema)

module.exports =  ArticlesRquest