export interface ICreateUser {
    name: string;
    username: string;
    email: string;
    password: string;
}

export interface IQueryUser {
    user_id?: string;
}

export interface IDecodedUser {
    name: string;
    username: string;
    user_id: string;
}