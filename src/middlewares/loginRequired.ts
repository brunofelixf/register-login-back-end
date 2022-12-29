import { IDecodedUser } from './../interfaces/user.d';
import { errorApp } from './../errors/errorApp';
import { RequestHandler } from "express";
import { verify } from 'jsonwebtoken';

export const loginRequired: RequestHandler = async ( req, res, next ) => {
    const { authorization } = req.headers;

    if( !authorization ){ 
        throw new errorApp('Login Required', 401)
    }

    const token = authorization.split(' ')[1];

    try {
        const data = verify( token, process.env.KEY_TOKEN ) as IDecodedUser
        
        const { name, username, user_id } = data;

        req

        req.user = {
            name,
            username,
            user_id
        }

        return next();
    } catch (error) {
        return res.status(401).json( { error: error.message } )
    }
}