import { prisma } from '../../server';
import { ICreateUser } from './../../interfaces/user.d';
import { hashSync } from 'bcryptjs'
import { BadRequestError } from '../../errors/errorApp';


const createUserService = async ({
    name,
    username,
    email,
    password
}: ICreateUser ) => {

    const alreadyExists = prisma.user.findUnique({ where: { email } })
    if( alreadyExists ){ throw new BadRequestError( 'Usuário já existe' ) }

    const passwordHash = hashSync( password, 8 )

    const user = await prisma.user.create({
        data: {
            name,
            username,
            email,
            password: passwordHash
        },
        select: {
            name: true,
            username: true,
            email: true,
        }
     })

     if( !user ){
        throw new BadRequestError('Não foi possível criar o usuário')
     }

     return user
}

export { createUserService }