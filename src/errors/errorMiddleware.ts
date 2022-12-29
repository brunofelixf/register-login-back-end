import { NextFunction, Request, Response, urlencoded } from 'express';
import { errorApp } from "./errorApp"

const errorMiddleware = (error: Error, req: Request, res: Response, next: NextFunction) => {
    if( error instanceof errorApp ){
        return res.status( error.status )
            .json({ message: error.message })
    }

    return res.status(500).json({
        message: `Internal Server Error: ${error.message}` 
    })
}

export { errorMiddleware }