import { Router } from "express";
import UserController from "./controllers/UserController";

const routes = Router();

routes.get("/users", UserController.index); //listar todos
routes.get("/users/:id", UserController.show); //pesquisar
routes.post("/users", UserController.store); //criar
routes.put("/users/:id", UserController.update); //atualizar
routes.delete("/users/:id", UserController.delete); //deletar

export default routes;
