import { IDecodedUser } from './../interfaces/user.d';
import { errorApp } from './../errors/errorApp';
import { NextFunction, Request, Response } from "express";
import { verify } from 'jsonwebtoken';

export async function loginRequired( req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;

    if( !authorization ){ 
        throw new errorApp('Login Required', 401)
    }

    const token = authorization.split(' ')[1];

    try {
        const data = verify( token, process.env.KEY_TOKEN ) as IDecodedUser
        console.log( data );
        
        const { name, username, user_id } = data;

        req

        req.user = {
            name,
            username,
            user_id
        }

        return next();
    } catch (error) {
        return res.status(401).json( error.message )
    }
}