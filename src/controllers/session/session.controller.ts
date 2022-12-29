import { User } from "@prisma/client";
import { Request, Response } from "express"
import { authenticateUserService } from "../../services/session/session.service";

const authenticateUserController = 
    async ( req: Request, res: Response ) => {
        const { username, password }: User = req.body;
        const token = await authenticateUserService( username, password );        
        return res.json({ token: token } );
}

export { authenticateUserController }