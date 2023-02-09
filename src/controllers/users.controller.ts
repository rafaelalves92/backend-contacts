import { instanceToPlain } from 'class-transformer'
import { Request, Response } from 'express'
import { IUserRequest, IUserUpdateRequest } from '../interfaces/user.interface'
import { AppError } from '../errors/appError'
import createUserService from '../services/users/createUser.service'
import listUsersService from '../services/users/listUsers.service'
import updateUserService from '../services/users/updateUser.service'
import deleteUserService from '../services/users/deleteUser.service'

export const createUserController = async (req: Request, res: Response) => {
    try {
        const user: IUserRequest = req.body
        const createdUser = await createUserService(user)

        return res.status(201).json(instanceToPlain(createdUser))
    } catch (error) {
        if (error instanceof AppError) {
            return res.status(error.statusCode).json({
                message: error.message
            })
        }
    }
}

export const listUsersController = async (req: Request, res: Response) => {
    const users = await listUsersService()

    return res.json(instanceToPlain(users))
}

export const updateUserController = async (req: Request, res: Response) => {
    try {
        const user: IUserUpdateRequest = req.body
        const id: number = +req.user.id
        const updatedUser = await updateUserService(user, id)

        return res.json(instanceToPlain(updatedUser))
    } catch (error) {
        if (error instanceof AppError) {
            return res.status(error.statusCode).json({
                message: error.message
            })
        }
    }
}

export const deleteUserController = async (req: Request, res: Response) => {
    try {
        const id: number = +req.user.id

        await deleteUserService(id)

        return res.status(204).send()
    } catch (error) {
        if (error instanceof AppError) {
            return res.status(error.statusCode).json({
                message: error.message
            })
        }
    }
}
