import {app} from './app'
import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient()

const port = process.env.PORT || 3000

app.listen( port, () => console.log( 'Server running (Port): ' + port ) )