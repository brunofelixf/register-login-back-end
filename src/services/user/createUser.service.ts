import { prisma } from '../../server';
import { ICreateUser } from './../../interfaces/user.d';


const createUserService = async ({
    name,
    email,
    password
}: ICreateUser) => {
     const user = await prisma.user.create({
        data: {
            name,
            email,
            password
        }
     })

     return user
}

export { createUserService }