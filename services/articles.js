const ArticlesRquest = require("../models/articles")



// getAllArticles
const getAllArticles = (sort = '{"updatedAt" : 1}', limit = 0, skip = 0, filter = '{"name" : { "$ne": "xxxlxxx" }}', select = null) => {
    return new Promise((resolve, reject) => {

        ArticlesRquest.find({}, (errFind, Articles) => {

            if (errFind) {
                reject(errFind)
                return
            }

            if (Articles.length <= 0) {
                reject("there are no Articles")
                return
            }

            resolve(Articles)


        })
            .populate("image")
            .select(select)
            .sort(JSON.parse(sort))
            .limit(parseInt(limit))
            .skip(parseInt(skip))
            .setQuery({ ...JSON.parse(filter) })



    })
}





// getAll Distinct
const getAllDistinct = (distinct) => {

    return new Promise((resolve, reject) => {

        ArticlesRquest.find({}, (errFind, Articles) => {

            if (errFind) {
                reject(errFind)
                return
            }

            if (Articles.length <= 0) {
                reject("there are no Categories")
                return
            }

            resolve(Articles)


        }).distinct(distinct)


    })
}



// create Article
const createArticle = (title, description, status, image, category) => {
    return new Promise((resolve, reject) => {

        //create
        ArticlesRquest.create({
            title, description, status, image, category
        }, (errCreate, doc) => {
            if (errCreate) {
                reject(errCreate)
                return
            }

            resolve("created")
        })

    })
}


// get Articles Count
const getArticlesCount = (filter) => {

    return new Promise((resolve, reject) => {

        ArticlesRquest.find({}, (errFind, Articles) => {

            if (errFind) {
                reject(errFind)
                return
            }

            if (Articles.length <= 0) {
                reject("there are no Articles")
                return
            }

            resolve(Articles)


        }).count({ ...JSON.parse(filter) })

    })
}


// update Article
const editArticle = (id, title, description, status, image, category) => {

    return new Promise((resolve, reject) => {

        // check id
        ArticlesRquest.findOne({}, (errFind, prdct) => {
            if (errFind)
                reject(errFind)

            if (!prdct) {
                reject("id not exist")

            } else {

                //update

                ArticlesRquest.updateOne({}, {
                    title, description, status, image, category
                    , updatedAt: Date.now()
                }, (errUpdate, doc) => {
                    if (errUpdate) {
                        reject(errUpdate)
                        return
                    }

                    if (doc.modifiedCount > 0) {
                        resolve("modified")

                    } else {
                        reject("something went wrong")
                    }

                }).where("_id").equals(id)

            }//else
        }).where("_id").equals(id)

    })
}



// review Article
const reviewArticle = (id, comment, fullname, email, user_id) => {

    return new Promise((resolve, reject) => {

        // check id
        ArticlesRquest.findOne({}, (errFind, prdct) => {
            if (errFind)
                reject(errFind)

            if (!prdct) {
                reject("id not exist")

            } else {

                //update


                let reviews = prdct._doc.reviews
                reviews.push({ id: user_id, comment, fullname, email, date: Date.now() })


                ArticlesRquest.updateOne({}, {
                    reviews, updatedAt: Date.now()
                }, (errUpdate, doc) => { 
                    if (errUpdate) {
                        reject(errUpdate)
                        return
                    }

                    if (doc.modifiedCount > 0) {
                        resolve("modified")

                    } else {
                        reject("something went wrong")
                    }

                }).where("_id").equals(id)

            }//else
        }).where("_id").equals(id)

    })
}


// update Like
const updateLike = (id, user_id) => {

    return new Promise((resolve, reject) => {

        // check id
        ArticlesRquest.findOne({}, (errFind, artcl) => {
            if (errFind)
                reject(errFind)

            if (!artcl) {
                reject("id not exist")

            } else {

                //update

                let likes = artcl._doc.likes

                likes.includes(user_id) ? likes.splice(likes.findIndex(u => u === user_id), 1) : likes.push(user_id)

                ArticlesRquest.updateOne({}, {
                    likes, updatedAt: Date.now()
                }, (errUpdate, doc) => {
                    if (errUpdate) {
                        reject(errUpdate)
                        return
                    }

                    if (doc.modifiedCount > 0) {
                        resolve("modified")

                    } else {
                        reject("something went wrong")
                    }

                }).where("_id").equals(id)

            }//else
        }).where("_id").equals(id)

    })
}


// delete Article
const deleteArticle = (id) => {

    return new Promise((resolve, reject) => {

        // check id
        ArticlesRquest.findOne({}, (errFind, prdct) => {
            if (errFind)
                reject(errFind)

            if (!prdct) {
                reject("id not exist")

            } else {
                //delete
                ArticlesRquest.deleteOne({}
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




// duplicate Article
const duplicateArticle = (id) => {

    return new Promise((resolve, reject) => {

        // check id
        ArticlesRquest.findOne({}, (errFind, artcl) => {
            if (errFind)
                reject(errFind)

            if (!artcl) {
                reject("id not exist")

            } else {

                if (delete artcl._doc._id) {


                    ArticlesRquest.create({ ...artcl._doc, updatedAt: Date.now(), createdAt: Date.now() }, (errCreate, doc) => {
                        if (errCreate) {
                            reject(errCreate)
                            return
                        }

                        resolve("duplicated")
                    })

                } else {
                    reject("something went wrong")

                }


            }//else
        }).where("_id").equals(id)

    })
}


// update Views
const updateViews = (id) => {

    return new Promise((resolve, reject) => {

        // check id
        ArticlesRquest.findOne({}, (errFind, artcle) => {
            if (errFind)
                reject(errFind)

            if (!artcle) {
                reject("id not exist")

            } else {


                //update
                ArticlesRquest.updateOne({}, {
                    viewcount: artcle._doc.viewcount + 1, updatedAt: Date.now()
                }, (errUpdate, doc) => {
                    if (errUpdate) {
                        reject(errUpdate)
                        return
                    }

                    if (doc.modifiedCount > 0) {
                        resolve("modified")

                    } else {
                        reject("something went wrong")
                    }

                }).where("_id").equals(id)

            }//else
        }).where("_id").equals(id)

    })
}

module.exports = {
    getAllArticles, deleteArticle, editArticle, createArticle,
    duplicateArticle, reviewArticle, updateLike
    , getAllDistinct, getArticlesCount, updateViews
}
