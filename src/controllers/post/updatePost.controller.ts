import { Request, Response } from "express"
import { Post, User } from '@prisma/client';
import { updatePostService } from "../../services/post/updatePost.service";


const updatePostController = async (req: Request, res: Response) => {
        const { text, like }: Partial<Post> = req.body;
        const { user_id } = req.user;
        const { post_id } = req.params

        const data: Partial<Post> = { text, like, user_id, post_id }

        const post = await updatePostService( data )
        return res.status(201).json( post )
}

export { updatePostController }