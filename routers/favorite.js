const FavoritesControlles = require("../controlles/favorite")
const {  handleError , idValidator , passport , ApiEndpoints , HandleValidatorError} = require("../common/routersImports")
const router = require("express").Router()
const {FavoriteCreateValidator} = require("../middlewares/validators")

// getall
router.get(ApiEndpoints.favoriteEndpoints.list , passport.authenticate("userOradmin", {session: false}) 
,  FavoritesControlles.getAllFavorites , handleError)

// count
router.get(ApiEndpoints.favoriteEndpoints.count , passport.authenticate("userOradmin", {session: false}) 
,  FavoritesControlles.getFavoriteCount , handleError)

// create
router.post(ApiEndpoints.favoriteEndpoints.create   , passport.authenticate("userOradmin", {session: false}), FavoriteCreateValidator ,  HandleValidatorError , FavoritesControlles.createFavorite , handleError)

// delete
router.delete(ApiEndpoints.favoriteEndpoints.delete , passport.authenticate("userOradmin", {session: false}), idValidator , FavoritesControlles.deleteFavorite , handleError)

 
module.exports = router