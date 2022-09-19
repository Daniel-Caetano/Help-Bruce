import { Router } from "express";
import UserController from "./controllers/UserController";
import PostController from "./controllers/PostController";
import CategoryController from "./controllers/CategoryController";
import CommentController from "./controllers/CommentController";

const routes = Router();

//Users
routes.post("/users", UserController.store); //criar
routes.get("/users", UserController.index); //listar todos
routes.get("/users/:id", UserController.show); //pesquisar
routes.put("/users/:id", UserController.update); //atualizar
routes.delete("/users/:id", UserController.delete); //deletar

//Post
routes.post("/post", PostController.store); //criar
routes.get("/post", PostController.index); //listar todos
routes.put("/post/:id", PostController.update); //atualizar
routes.delete("/post/:id", PostController.delete); //deletar

//Category
routes.get("/category", CategoryController.index); //listar todos

//Comment
routes.post("/comment", CommentController.store); //criar
routes.get("/comment", CommentController.index); //listar todos
routes.put("/comment/:id", CommentController.update); //atualizar
routes.delete("/comment/:id", CommentController.delete); //deletar

export default routes;
