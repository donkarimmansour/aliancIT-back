const FavoritesModel = require("../services/favorite")
const codes = require("../common/codes")



// get All Favorites 
const getAllFavorites = (req, res) => { 
    const { sort , limit , skip , filter ,  select , expend} = req.query ;

    FavoritesModel.getAllFavorites( sort , limit , skip , filter ,  select , expend).then(result => {
        res.status(codes.ok).json({err: false, msg : result})
    }).catch(result => {
        res.status(codes.badRequest).json({err: true, msg : result})
    })
}

// get Favorite Count
const getFavoriteCount = (req, res) => { 
    const { filter} = req.query ;

    FavoritesModel.getFavoriteCount(filter).then(result => {
        res.status(codes.ok).json({err: false, msg : result})
    }).catch(result => {
        res.status(codes.badRequest).json({err: true, msg : result})
    })
}


// create Favorite
const createFavorite = (req, res) => {
    const {userId , articleId } = req.body ;
    FavoritesModel.createFavorite(userId , articleId).then(result => {
        res.status(codes.ok).json({err: false, msg : result})
    }).catch(result => {
        res.status(codes.badRequest).json({err: true, msg : result})
    })
}



// delete Favorite
const deleteFavorite = (req, res) => {
    const {id} = req.params ;

    FavoritesModel.deleteFavorite(id).then(result => {
        res.status(codes.ok).json({err: false, msg : result})
    }).catch(result => {
        res.status(codes.badRequest).json({err: true, msg : result})
    })
}

module.exports = {
   getAllFavorites , deleteFavorite  , createFavorite  , getFavoriteCount
}