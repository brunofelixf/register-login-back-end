import { User } from "@prisma/client";
import { Request, Response } from "express"
import { authenticateUserService } from "../../services/session/session.service";

const authenticateUserController = async ( req: Request, res: Response) => {
    try {
        const { username, password }: User = req.body;
        const token = await authenticateUserService( username, password );        
        return res.json({ token: token } );
    } catch (e) {
        throw new Error('Não foi possível autenticar o usuário')
    }
   
}

export { authenticateUserController }