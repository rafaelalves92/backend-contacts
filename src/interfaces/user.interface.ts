export interface IUserRequest {
    fullname: string
    email: string
    password: string
    phone: number
}

export interface IUserUpdateRequest {
    fullname?: string
    email?: string
    password?: string
    phone?: number
}

export interface IUserResponse {
    id: number
    fullname: string
    email: string
    phone: number
    createdAt: Date
}
