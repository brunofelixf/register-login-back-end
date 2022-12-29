import { Router } from "express";
import { authenticateUserController } from "../controllers/session/session.controller";
import { createUserController } from "../controllers/user/createUser.controller";
import { listUserController } from "../controllers/user/listUserController";
import { updateUserController } from "../controllers/user/updateUser.controller";
import { loginRequired } from "../middlewares/loginRequired";

const routerApp = Router()

routerApp.post('/user', createUserController)
routerApp.get('/user', loginRequired, listUserController)
routerApp.patch('/user', updateUserController)

routerApp.post('/login', authenticateUserController)

export { routerApp }