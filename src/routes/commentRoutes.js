const express = require("express");
const routes = express.Router();
const commentController = require("../controllers/commentController");

const auth = require("../middlewares/auth");

const commentCreateValidation = require("../validations/comment/create");
const commentUpdateValidation = require("../validations/comment/update");

//Comments
routes.post(
  "/comments",
  auth,
  commentCreateValidation,
  commentController.store
);
routes.get("/comments", auth, commentController.index);
routes.get("/comments/:id", auth, commentController.show);
routes.put(
  "/comments/:id",
  auth,
  commentUpdateValidation,
  commentController.update
);
routes.delete("/comments/:id", auth, commentController.delete);

module.exports = routes;
