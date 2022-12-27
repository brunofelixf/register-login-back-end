import { Router } from "express";
import { createUserController } from "../controllers/user/createUser.controller";
import { listUserController } from "../controllers/user/listUserController";

const routerApp = Router()

routerApp.post('/user', createUserController)
routerApp.get('/user', listUserController)

export { routerApp }