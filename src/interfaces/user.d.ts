export interface ICreateUser {
    name: string;
    email: string;
    password: string;
}

export interface IQueryUser {
    user_id?: string;
}