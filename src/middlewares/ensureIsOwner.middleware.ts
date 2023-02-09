import { Response, Request, NextFunction } from 'express'
import { AppDataSource } from '../data-source'
import { User } from '../entities/user.entity'
import { AppError } from '../errors/appError'

const ensureIsOwnerMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const id: number = +req.user.id
    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOne({
        where: {
            id: id
        },
        relations: {
            contacts: true
        }
    })

    if (user) {
        const findContact = user.contacts.find(contact => contact.id == +req.params.id)

        if (!findContact) {
            return res.status(401).json({
                message: "User is not owner of this contact"
            })
        }
    }

    return next()
}

export default ensureIsOwnerMiddleware
