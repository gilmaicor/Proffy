import express from "express";
import classesController from "./controllers/classesController";
import ConnectionsController from "./controllers/connectionsController";

const routes = express.Router();
const classesControllers = new classesController();
const ConnectionsControllers = new ConnectionsController();

routes.post("/classes", classesControllers.create);
routes.get("/classes", classesControllers.index);

routes.post("/connections", ConnectionsControllers.create);
routes.get("/connections", ConnectionsControllers.index);

export default routes;
