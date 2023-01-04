import { User } from "@prisma/client"
import { prisma } from "../../server"
import { hashSync } from 'bcryptjs'
import { NotFoundError, UnauthorizedError } from "../../errors/errorApp"

const updateUserService = async ( 
    user_id: string,
    { name, username, email, password }: User ) => {

    const user = await prisma.user
        .findUnique({ where: { user_id }})
    
    if( !user ){
        throw new NotFoundError('Usuário não encontrado') }  
    if( user.user_id !== user_id ){
        throw new UnauthorizedError('Você não tem autorização para alterar esse usuário')
    }

    if( password ){
        password = hashSync( password, 8 )
    }

    const userUpdated = await prisma.user
    .update({
        where: { user_id: user.user_id },
        data:{
            name: name ?? user.name,
            username: username ?? user.username,
            email: email ?? user.email,
            password: password ?? user.password,
        }
    })
    
    return userUpdated
}

export { updateUserService }