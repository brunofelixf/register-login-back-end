import { Request, Response } from "express"


const updateUserController = async ( req: Request, res: Response ) => {
    const { user_id } = req.user 

    const user = await updateUserService( user_id )
    return res.json( user )
}

export { updateUserController }