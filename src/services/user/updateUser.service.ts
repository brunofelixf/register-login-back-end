import { User } from "@prisma/client"
import { prisma } from "../../server"

const updateUserService = async ( 
    user_id: string,
    { name, email, password }: User ) => {

    const user = await prisma.user
        .findUniqueOrThrow({ where: { user_id }})
        .catch( (e) => { console.log(e) })
    
    if( user ){
        const userUpdated = await prisma.user
        .update({
            where: { user_id: user.user_id },
            data:{
                name: name ? name : user.name,
                email: email ? email : user.email,
                password: password ? password : user.password,
            }
        })
        return userUpdated
    }
 
}

export { updateUserService }