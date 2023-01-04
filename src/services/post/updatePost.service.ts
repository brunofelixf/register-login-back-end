import { Post } from "@prisma/client"
import { ErrorApp, NotFoundError, UnauthorizedError } from "../../errors/errorApp";
import { prisma } from "../../server"

const updatePostService = async (
    { text, like, user_id, post_id }: Partial<Post>, 
) => 
{
    const user = await prisma.user.findUnique({
        where: { user_id }
    })

    if( !user ){ throw new NotFoundError('O usuário não existe');
    }

    const post = await prisma.post.findUnique({
        where: { post_id }
    })

    if(  post.user_id !== user_id ){
        throw new UnauthorizedError('Você não tem permissão para alterar essa postagem')
    }

    const newPost = await prisma.post.update({
        where: { post_id },
        data: {
            text: text ?? post.text,
            like: ( like === 1) ? ++post.like : post.like,
        }
    })

    if( !newPost ){
        throw new ErrorApp('Não foi possível atualizar a postagem', 400 );     
    }
      
    return newPost;  
}

export { updatePostService }