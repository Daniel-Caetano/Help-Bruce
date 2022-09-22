const express = require("express");
const routes = express.Router();
const usuariosController = require("../controllers/userController");
const greenStarController = require("../controllers/greenStarController");

const auth = require("../middlewares/auth");

const userCreateValidation = require("../validations/user/create");
const userUpdateValidation = require("../validations/user/update");

//Users
routes.post("/users", userCreateValidation, usuariosController.store);
routes.get("/users", auth, usuariosController.index);
routes.get("/users/:id", auth, usuariosController.show);
routes.put("/users/:id", auth, userUpdateValidation, usuariosController.update);
routes.delete("/users/:id", auth, usuariosController.delete);

routes.post(
  "/users/registerstar/:comment_id",
  auth,
  greenStarController.register
);

module.exports = routes;
