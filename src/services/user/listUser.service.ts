import { prisma } from "../../server"


const listUserService = async ( user_id: string | undefined ) => {
    const user = await prisma.user
        .findMany({
            where: { user_id }
        })
        .catch((e) => console.log(e)
        )

    return user
}

export { listUserService }