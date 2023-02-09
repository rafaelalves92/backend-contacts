import { hash } from 'bcrypt'
import { AppDataSource } from '../../data-source'
import { User } from '../../entities/user.entity'
import { AppError } from '../../errors/appError'
import { IUserUpdateRequest } from '../../interfaces/user.interface'

const updateUserService = async ({ fullname, email, password, phone }: IUserUpdateRequest, id: number): Promise<User> => {
    const userRepository = AppDataSource.getRepository(User)

    const findUser = await userRepository.findOneBy({ id })

    if (!findUser) {
        throw new AppError("User not found", 401)
    }

    await userRepository.update(id, {
        fullname: fullname ? fullname : findUser.fullname,
        email: email ? email : findUser.email,
        password: password ? await hash(password, 10) : findUser.password,
        phone: phone ? phone : findUser.phone
    })

    const user = await userRepository.findOneBy({ id })

    return user!
}

export default updateUserService
