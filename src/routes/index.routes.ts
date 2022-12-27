import { Router } from "express";
import { createUserController } from "../controllers/user/createUser.controller";

const routerApp = Router()

routerApp.post('/user', createUserController)
routerApp.post('/user', listUserController)

export { routerApp }