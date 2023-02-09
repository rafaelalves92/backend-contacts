export interface IContactRequest {
    fullname: string
    email: string
    phone: number
}

export interface IContactUpdateRequest {
    fullname?: string
    email?: string
    phone?: number
}

export interface IContactResponse extends IContactRequest {
    createdAt: Date
    id: number
}