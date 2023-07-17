export type Role = 'Admin' | 'Teacher'
export interface User {
    email?: string,
    password?: string,
    fullname?: string,
    roles?: Role

}
export interface LoginUser {
    email: string,
    password: string,

}
export interface UserResponse {
    user: User,
    iat: any,
    exp: any

}

