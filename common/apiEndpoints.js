const Host = {
  ROOT: "http://localhost:3001",
  PREFIX: "/v1/api",
  FRONTEND: "http://localhost:3000",
}

const ApiEndpoints = {
    UserEndpoints: {
    route: `${Host.PREFIX}/user`,
    list: `/list`,
    login: `/login`,
    signup: `/signup`,  
    edit: `/edit/:id`,
    image: `/image/:id`,
    delete: `/delete/:id`,
    count: `/count`,
    suspension: `/suspension/:id`,
    forgotPassword: `/forgot-password`,
    confirmEmail: `/confirm-email/:id`,
  },
  ArticlesEndpoints: {
    route: `${Host.PREFIX}/articles`,
    list: `/list`,
    create: `/create`,
    edit: `/edit/:id`,
    delete: `/delete/:id`,
    duplicate: `/duplicate/:id`,
    distinct: `/distinct`,
    count: `/count`,
    review: `/review/:id`,
    views: `/views/:id`,
    like: `/like/:id`,
  },

  FileEndpoints: {
    route: `${Host.PREFIX}/file`,
    getSingleImageView: `/get-single-image/:id/view`,
    getSingleImageDownload: `/get-single-image/:id/download`,
    createSingleImage: `/create-single-image`,
  },
  favoriteEndpoints: {
    route: `${Host.PREFIX}/favorite`,
    list: `/list`,
    create: `/create`,
    delete: `/delete/:id`,
    count: `/count`,
  },
  SubscribeEndpoints: {
    route: `${Host.PREFIX}/subscribe`,
    list: `/list`,
    create: `/create` ,
    count: `/count` ,
    delete: `/delete/:id`
  },
  ContactEndpoints: {
    route: `${Host.PREFIX}/contact`,
    list: `/list`,
    create: `/create` ,
    count: `/count` ,
    delete: `/delete/:id`
  },
};

module.exports = {ApiEndpoints , Host}