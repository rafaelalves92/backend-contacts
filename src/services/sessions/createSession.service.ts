import { AppDataSource } from '../../data-source'
import { User } from '../../entities/user.entity'
import { ISessionRequest } from '../../interfaces/session.interface'
import { compare } from 'bcrypt'
import { AppError } from '../../errors/appError'
import jwt from 'jsonwebtoken'
import 'dotenv/config'

const createSessionService = async ({ email, password }: ISessionRequest) => {
    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOneBy({ email: email })

    if (!user || !user.isActive) {
        throw new AppError("Invalid email or password", 401)
    }

    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
        throw new AppError("Invalid email or password", 401)
    }

    const token = jwt.sign(
        { email: user.email },
        process.env.SECRET_KEY as string,
        { expiresIn: "24h", subject: `${user.id}` }
    )

    return token
}

export default createSessionService
