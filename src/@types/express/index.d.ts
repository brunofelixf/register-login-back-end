import { Request } from 'express';

declare global {
    namespace Express {
        export interface Request {
            user: {
                name: string;
                username: string;
                user_id: string;
            }
        }
    }
}