const FavoritesRquest = require("../models/favorite")



// getAllFavorites
const getAllFavorites = (sort = '{"updatedAt" : 1}', limit = 0 , skip = 0, filter = '{"name" : { "$ne": "xxxlxxx" }}', select = null , expend = null) => {
    return new Promise((resolve, reject) => {

        const newExpend = 
        (expend == "userId") ? 
        {path : "userId" , model : "user" , populate:{ path: 'image' , model: 'file'}} : 
        (expend == "articleId") ?
        {path : "articleId" , model : "article" ,  populate:{ path: 'image' , model: 'file'}} : 
         expend
         
        FavoritesRquest.find({}, (errFind, Favorites) => {

            if (errFind) {console.log(errFind);
                reject(errFind)
                return
            }

            if (Favorites.length <= 0) {
                reject("there are no Favorites")
                return
            }

            resolve(Favorites)


        })
            .populate(newExpend)
            .select(select)
            .sort(JSON.parse(sort))
            .limit(parseInt(limit))
            .skip(parseInt(skip))
            .setQuery({ ...JSON.parse(filter) })



    })
}



// get Favorite Count
const getFavoriteCount = (filter) => {
    return new Promise((resolve, reject) => {

        FavoritesRquest.find({}, (errFind, Favorite) => {

            if (errFind) {
                reject(errFind)
                return
            }

            if (Favorite.length <= 0) {
                reject("there are no Favorite")
                return
            }

            resolve(Favorite)
 

        }).count({ ...JSON.parse(filter) })

    })
}




// create Favorite
const createFavorite = (userId , articleId) => {
    return new Promise((resolve, reject) => {
        //create
        FavoritesRquest.create({
            userId , articleId ,
        }, (errCreate, doc) => {
            if (errCreate) {
                reject(errCreate)
                return
            }

            resolve(doc.populate({path : "articleId" , model : "article" ,  populate:{ path: 'image' , model: 'file'}}))
          //  resolve(doc.populate({path : "articleId" , model : "article" ,  populate:{ path: 'image' , model: 'file'}}))
        })

    })
}



// delete Favorite
const deleteFavorite = (id) => {

    return new Promise((resolve, reject) => {

        // check id
        FavoritesRquest.findOne({}, (errFind, fvrt) => {
            if (errFind)
                reject(errFind)

            if (!fvrt) {
                reject("id not exist")

            } else {
                //delete
                FavoritesRquest.deleteOne({}
                    , (errUpdate, doc) => {
                        if (errUpdate) {
                            reject(errUpdate)
                            return
                        }

                        if (doc.deletedCount > 0) {
                            resolve("deleted")

                        } else {
                            reject("something went wrong")
                        }

                    }).where("_id").equals(id)
            }//else
        }).where("_id").equals(id)

    })
}



module.exports = {
    getAllFavorites, deleteFavorite,  createFavorite, getFavoriteCount
}
