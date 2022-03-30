const ArticlesModel = require("../services/articles")
const codes = require("../common/codes")



// get All Articles 
const getAllArticles = (req, res) => { 
    const { sort , limit , skip , filter ,  select} = req.query ;

    ArticlesModel.getAllArticles( sort , limit , skip , filter ,  select).then(result => {
        res.status(codes.ok).json({err: false, msg : result})
    }).catch(result => {
        res.status(codes.badRequest).json({err: true, msg : result})
    })
}

// get Articles Count
const getArticlesCount = (req, res) => { 
    const { filter} = req.query ;

    ArticlesModel.getArticlesCount( filter).then(result => {
        res.status(codes.ok).json({err: false, msg : result})
    }).catch(result => {
        res.status(codes.badRequest).json({err: true, msg : result})
    })
}



// get All Distinct
const getAllDistinct = (req, res) => {
    const {distinct} = req.body ;

    ArticlesModel.getAllDistinct(distinct).then(result => {
        res.status(codes.ok).json({err: false, msg : result})
    }).catch(result => {
        res.status(codes.badRequest).json({err: true, msg : result})
    })
}



// update Like
const updateLike = (req, res) => {
    const {user_id} = req.body ;
    const {id } = req.params ;

    ArticlesModel.updateLike(id , user_id).then(result => {
        res.status(codes.ok).json({err: false, msg : result})
    }).catch(result => {
        res.status(codes.badRequest).json({err: true, msg : result})
    })
}


// create Article
const createArticle = (req, res) => {
    const {title, description, status, image , category} = req.body ;

    ArticlesModel.createArticle(title, description, status, image , category).then(result => {
        res.status(codes.ok).json({err: false, msg : result})
    }).catch(result => {
        res.status(codes.badRequest).json({err: true, msg : result})
    })
}

// edit Article
const editArticle = (req, res) => {
    const {title, description, status, image , category} = req.body ;
    const {id} = req.params ;

    ArticlesModel.editArticle(id ,title, description, status, image , category).then(result => {
        res.status(codes.ok).json({err: false, msg : result})
    }).catch(result => {
        res.status(codes.badRequest).json({err: true, msg : result})
    })
}

// review Article
const reviewArticle = (req, res) => {
    const { comment , fullname , email  ,  user_id} = req.body ;
    const {id} = req.params ;

    ArticlesModel.reviewArticle(id, comment , fullname , email  ,  user_id).then(result => {
        res.status(codes.ok).json({err: false, msg : result})
    }).catch(result => {
        res.status(codes.badRequest).json({err: true, msg : result})
    })
}

// delete Article
const deleteArticle = (req, res) => {
    const {id} = req.params ;

    ArticlesModel.deleteArticle(id).then(result => {
        res.status(codes.ok).json({err: false, msg : result})
    }).catch(result => {
        res.status(codes.badRequest).json({err: true, msg : result})
    })
}

// duplicate Article
const duplicateArticle = (req, res) => {
    const {id} = req.params ;

    ArticlesModel.duplicateArticle(id).then(result => {
        res.status(codes.ok).json({err: false, msg : result})
    }).catch(result => {
        res.status(codes.badRequest).json({err: true, msg : result})
    })
}


// update Views
const updateViews = (req, res) => {
    const {id} = req.params ;

    ArticlesModel.updateViews(id).then(result => {
        res.status(codes.ok).json({err: false, msg : result})
    }).catch(result => {
        res.status(codes.badRequest).json({err: true, msg : result})
    })
}


module.exports = {
   getAllArticles , deleteArticle , editArticle , createArticle ,
    duplicateArticle , reviewArticle  , getAllDistinct ,
    getArticlesCount , updateViews , updateLike
}