import { Request, Response } from "express"


const listUserController = (req: Request, res: Response) => {
    try {
        const { user_id } = req.query
        const user = listUserService( user_id )
        return res.json( user )
        
    } catch (error) {
        console.log(error);
    }
}

export { listUserController }