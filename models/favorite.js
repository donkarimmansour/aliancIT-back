const mongoose = require("mongoose")

const FavoriteSchema = mongoose.Schema({
    articleId: {
        type: mongoose.Schema.Types.ObjectId,
        required : true , 
        ref : "article"
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required : true , 
        ref : "user"
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

const FavoritesRquest = mongoose.model("favorite", FavoriteSchema)

module.exports =  FavoritesRquest