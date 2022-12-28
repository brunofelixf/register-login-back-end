import { prisma } from '../../server';
import { ICreateUser } from './../../interfaces/user.d';
import { hashSync } from 'bcryptjs'


const createUserService = async ({
    name,
    username,
    email,
    password
}: ICreateUser ) => {
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

     return user
}

export { createUserService }