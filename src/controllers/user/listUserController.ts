import { Request, Response } from "express"
import { IQueryUser } from "../../interfaces/user"
import { listUserService } from "../../services/user/listUser.service"


const listUserController = async (req: Request, res: Response) => {
    try {
        const { user_id } : IQueryUser = req.query        
        const user = await listUserService( user_id )
        return res.json( user )
  
    } catch (error) {
        console.log(error);
    }
}

export { listUserController }