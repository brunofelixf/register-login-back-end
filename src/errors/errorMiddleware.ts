import { NextFunction, Request, Response } from 'express';
import { ErrorApp } from "./errorApp"

const errorMiddleware = (
    error: Error & Partial<ErrorApp>, 
    req: Request, res: Response, next: NextFunction) => {

    const statusCode = error.status ?? 500;
    const message = error.status ? error.message : 'Internal Server Error';

    console.log( error );
    
    return res.status( statusCode ).json({
        error:  message 
    })
}

export { errorMiddleware }