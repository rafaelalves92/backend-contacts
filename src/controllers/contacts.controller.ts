import { Request, Response } from 'express'
import { IContactRequest, IContactUpdateRequest } from '../interfaces/contact.interface'
import { instanceToPlain } from 'class-transformer'
import { AppError } from '../errors/appError'
import createContactService from '../services/contacts/createContact.service'
import listContactsUserService from '../services/contacts/listContacts.service'
import updateContactService from '../services/contacts/updateContact.service'
import deleteContactService from '../services/contacts/deleteContact.service'

export const createContactController = async (req: Request, res: Response) => {
    try {
        const contact: IContactRequest = req.body
        const id: number = +req.user.id
        const createdContact = await createContactService(contact, id)

        return res.status(201).json(instanceToPlain(createdContact))
    } catch (error) {
        if (error instanceof AppError) {
            return res.status(error.statusCode).json({
                message: error.message
            })
        }
    }
}

export const listContactsUserController = async (req: Request, res: Response) => {
    try {
        const id: number = +req.user.id
        const contacts = await listContactsUserService(id)

        return res.json(instanceToPlain(contacts))
    } catch (error) {
        if (error instanceof AppError) {
            return res.status(error.statusCode).json({
                message: error.message
            })
        }
    }
}

export const updateContactController = async (req: Request, res: Response) => {
    try {
        const id: number = +req.params.id
        const contact: IContactUpdateRequest = req.body
        const updatedContact = await updateContactService(contact, id)

        return res.json(updatedContact)
    } catch (error) {
        if (error instanceof AppError) {
            return res.status(error.statusCode).json({
                message: error.message
            })
        }
    }
}

export const deleteContactController = async (req: Request, res: Response) => {
    try {
        const id: number = +req.params.id

        await deleteContactService(id)

        return res.status(204).send()
    } catch (error) {
        if (error instanceof AppError) {
            return res.status(error.statusCode).json({
                message: error.message
            })
        }
    }
}
