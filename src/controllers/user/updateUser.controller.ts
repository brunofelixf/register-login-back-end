import { IQueryUser } from './../../interfaces/user.d';
import { User } from "@prisma/client"
import { Request, Response } from "express"
import { updateUserService } from "../../services/user/updateUser.service";


const updateUserController = async ( req: Request, res: Response ) => {
    const { user_id }: IQueryUser = req.query;
    const data: User = req.body;    

    const user = await updateUserService( user_id, data )
    return res.json( user )
}

export { updateUserController }