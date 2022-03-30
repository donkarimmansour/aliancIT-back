const {check} = require("express-validator");

const emailValidator = [
   check("email").notEmpty().withMessage("email field is required") ,
   check("email").isEmail().withMessage("email must be email") , ]

const ContactValidator = [
   check("firstname").notEmpty().withMessage("firstname field is required") ,
   check("lastname").notEmpty().withMessage("lastname field is required") ,
   check("comment").notEmpty().withMessage("comment field is required") ,
   check("email").notEmpty().withMessage("email field is required") ,
   check("email").isEmail().withMessage("email must be email") ,
]

const FavoriteCreateValidator = [
   check("articleId").notEmpty().withMessage("article Id field is required") ,
   check("userId").notEmpty().withMessage("user Id field is required") , 
]

const SginupValidator= [
   check("firstname").notEmpty().withMessage("firstname field is required") ,
   check("lastname").notEmpty().withMessage("lastname field is required") ,
   check("email").notEmpty().withMessage("email field is required") ,
   check("email").isEmail().withMessage("email must be email") ,
   check("password").notEmpty().withMessage("password field is required") ,
   check("confirmpassword").notEmpty().withMessage("confirm password field is required") ,
   check("confirmpassword").custom((value , {req}) => {
       if(value != req.body.password) throw new Error("confirm password must be the same as password")
       else return  true
   }) ,
   check("gender").isIn(["male" , "femail"]).withMessage("gender is required"),
]

const EditValidator= [
    check("firstname").notEmpty().withMessage("firstname field is required") ,
    check("lastname").notEmpty().withMessage("lastname field is required") ,
    check("email").notEmpty().withMessage("email field is required") ,
    check("email").isEmail().withMessage("email must be email") ,
    check("gender").isIn(["male" , "femail"]).withMessage("gender is required"),
 ]

 const ImageValidator= [
   check("image").notEmpty().withMessage("image field is required") ,
]


const LoginValidator = [
    check("email").notEmpty().withMessage("email field is required") ,
    check("email").isEmail().withMessage("email must be email") ,
    check("password").notEmpty().withMessage("password field is required") ,
]

 const AccountSuspendedValidator = [
    check("isAccountSuspended").notEmpty().withMessage("type is required"),
 ]

const CreateArticleValidator= [
   check("title").notEmpty().withMessage("title field is required") ,
   check("description").notEmpty().withMessage("description field is required") ,
   check("image").notEmpty().withMessage("image field is required") ,
   check("category").notEmpty().withMessage("category is required"),
]

const ReviewArticleValidator= [
   check("comment").notEmpty().withMessage("comment field is required") ,
   check("fullname").notEmpty().withMessage("fullname field is required") ,
   check("user_id").notEmpty().withMessage("user id field is required") ,
   check("email").notEmpty().withMessage("email field is required") ,
   check("email").isEmail().withMessage("email must be email") ,
]

const DistinctValidator= [
   check("distinct").notEmpty().withMessage("distinct field is required") ,
]

const LikeValidator = [
   check("user_id").notEmpty().withMessage("user_id field is required") ,
]

module.exports = {
    SginupValidator ,
    LoginValidator ,
    emailValidator ,
    AccountSuspendedValidator ,
    EditValidator ,
    FavoriteCreateValidator ,
    ContactValidator , 
    ImageValidator ,
    DistinctValidator , 
    CreateArticleValidator , 
    ReviewArticleValidator ,
    LikeValidator 
}