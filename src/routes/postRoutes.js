const express = require("express");
const routes = express.Router();
const postController = require("../controllers/postController");

const auth = require("../middlewares/auth");

const postCreateValidation = require("../validations/post/create");
const postUpdateValidation = require("../validations/post/update");

//Posts
routes.post("/posts", auth, postCreateValidation, postController.store);
routes.get("/posts", auth, postController.index);
routes.get("/posts/:id", auth, postController.show);
routes.put("/posts/:id", auth, postUpdateValidation, postController.update);
routes.delete("/posts/:id", auth, postController.delete);

module.exports = routes;
