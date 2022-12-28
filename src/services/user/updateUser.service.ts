import { User } from "@prisma/client"
import { prisma } from "../../server"
import { hashSync } from 'bcryptjs'

const updateUserService = async ( 
    user_id: string,
    { name, username, email, password }: User ) => {

    const user = await prisma.user
        .findUniqueOrThrow({ where: { user_id }})
        .catch( () => { throw new Error('Usuário não encontrado') })

        const passwordHash = hashSync( password, 8 )
        const userUpdated = await prisma.user
        .update({
            where: { user_id: user.user_id },
            data:{
                name: name ? name : user.name,
                username: username ? username : user.username,
                email: email ? email : user.email,
                password: password ? passwordHash : user.password,
            }
        })
        return userUpdated
}

export { updateUserService }