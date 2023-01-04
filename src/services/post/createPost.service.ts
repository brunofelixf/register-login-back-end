import { prisma } from '../../server';
import { BadRequestError } from '../../errors/errorApp';
import { ICreatePost } from '../../interfaces/post';

const createPostService = async ({
    text,
    user_id
}: ICreatePost) => {    

    const alreadyExists = await prisma.user.findUnique({ where: { user_id } })
    
    if( !alreadyExists ){ throw new BadRequestError( 'Usuário não existe' ) }

    const post = await prisma.post.create({
        data: {
            text,
            user_id,
        }
    })
 
    if( !post ){
    throw new BadRequestError('Não foi possível criar a postagem')
    }

    return post
}

export { createPostService }