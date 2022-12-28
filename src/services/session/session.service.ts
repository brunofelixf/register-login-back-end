import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { prisma } from './../../server';

const authenticateUserService =
    async ( username: string, password: string ) => {
    const user = await prisma.user
        .findUniqueOrThrow({ where: {username} })
        .catch( () => { throw new Error('Usuário não encontrado')})
    
    const passwordIsCorrect = await compare( password, user.password );

    if( !passwordIsCorrect ){
        throw new Error('Username ou Senha inválidos')
    }

    const token = sign(
        {
            name: user.name,
            username: user.username,
            user_id: user.user_id
        },
            process.env.KEY_TOKEN,
        {
            expiresIn: "12h"
        }
    )    

    return token
}

export { authenticateUserService }