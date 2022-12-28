import { Router } from "express";
import { authenticateUserController } from "../controllers/session/session.controller";
import { createUserController } from "../controllers/user/createUser.controller";
import { listUserController } from "../controllers/user/listUserController";
import { updateUserController } from "../controllers/user/updateUser.controller";

const routerApp = Router()

routerApp.post('/user', createUserController)
routerApp.get('/user', listUserController)
routerApp.patch('/user', updateUserController)

routerApp.post('/session', authenticateUserController)

export { routerApp }