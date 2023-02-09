import { Request, Response } from 'express'
import { ISessionRequest } from '../interfaces/session.interface'
import { AppError } from '../errors/appError'
import createSessionService from '../services/sessions/createSession.service'

const createSessionController = async (req: Request, res: Response) => {
    try {
        const data: ISessionRequest = req.body
        const token = await createSessionService(data)

        return res.json({ token })
    } catch (error) {
        if (error instanceof AppError) {
            return res.status(error.statusCode).json({
                message: error.message
            })
        }
    }
}

export { createSessionController }
