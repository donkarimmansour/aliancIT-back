const ArticlesControlles = require("../controlles/articles")
const {  handleError , idValidator , passport , ApiEndpoints , HandleValidatorError} = require("../common/routersImports")
const router = require("express").Router()
const {CreateArticleValidator , ReviewArticleValidator , DistinctValidator , LikeValidator} = require("../middlewares/validators")

// getall
router.get(ApiEndpoints.ArticlesEndpoints.list //, passport.authenticate("userOradmin", {session: false}) 
,  ArticlesControlles.getAllArticles , handleError)

// count
router.get(ApiEndpoints.ArticlesEndpoints.count //, passport.authenticate("userOradmin", {session: false}) 
,  ArticlesControlles.getArticlesCount , handleError)

// Distinct
router.get(ApiEndpoints.ArticlesEndpoints.distinct //, passport.authenticate("userOradmin", {session: false}) 
, DistinctValidator , HandleValidatorError , ArticlesControlles.getAllDistinct , handleError)

// create
router.post(ApiEndpoints.ArticlesEndpoints.create   , passport.authenticate("admin", {session: false}), CreateArticleValidator ,  HandleValidatorError , ArticlesControlles.createArticle , handleError)

// update
router.put(ApiEndpoints.ArticlesEndpoints.edit , passport.authenticate("admin", {session: false}) , CreateArticleValidator , idValidator, HandleValidatorError , ArticlesControlles.editArticle , handleError)

// reviews
router.put(ApiEndpoints.ArticlesEndpoints.review , passport.authenticate("admin", {session: false}) 
, ReviewArticleValidator , idValidator, HandleValidatorError , ArticlesControlles.reviewArticle , handleError)

// delete
router.delete(ApiEndpoints.ArticlesEndpoints.delete , passport.authenticate("admin", {session: false}), idValidator , ArticlesControlles.deleteArticle , handleError)

// duplicate
router.post(ApiEndpoints.ArticlesEndpoints.duplicate, passport.authenticate("admin", {session: false}) , idValidator , ArticlesControlles.duplicateArticle , handleError)

// update Views
router.put(ApiEndpoints.ArticlesEndpoints.views , idValidator, HandleValidatorError , ArticlesControlles.updateViews )

//like
router.put(ApiEndpoints.ArticlesEndpoints.like , LikeValidator , idValidator, HandleValidatorError , ArticlesControlles.updateLike )


module.exports = router