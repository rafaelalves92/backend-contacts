import { hash } from 'bcrypt'
import { AppDataSource } from '../../data-source'
import { User } from '../../entities/user.entity'
import { IUserRequest } from '../../interfaces/user.interface'
import { AppError } from '../../errors/appError'

const createUserService = async ({ fullname, email, password, phone }: IUserRequest): Promise<User> => {
    const userRepository = AppDataSource.getRepository(User)

    if (!password) {
        throw new AppError("Password is missing", 401)
    }

    const hashedPassword = await hash(password, 10)

    const user = userRepository.create({
        fullname,
        email,
        password: hashedPassword,
        phone
    })

    await userRepository.save(user)

    return user
}

export default createUserService
