import { Router } from "express";
import { createUserController } from "../controllers/user/createUser.controller";

const routerApp = Router()

routerApp.post('/user', createUserController)

export { routerApp }