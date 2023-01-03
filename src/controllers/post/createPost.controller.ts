import { Request, Response } from "express"
import { createPostService } from '../../services/post/createPost.service';
import { Post, User } from '@prisma/client';


const createPostController = async (req: Request, res: Response) => {
        const { text }: Partial<Post> = req.body;
        const { user_id }: Partial<User> = req.user;

        const post = await createPostService( { text, user_id } )
        return res.status(201).json( post )
}

export { createPostController }