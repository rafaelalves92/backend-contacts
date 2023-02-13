import { AppDataSource } from '../../data-source'
import { User } from '../../entities/user.entity'
import { AppError } from '../../errors/appError'

const listContactsUserService = async (id: number): Promise<User> => {
    const userRepository = AppDataSource.getRepository(User)
    const user = await userRepository.findOne({
        where: {
            id: id
        },
        relations: {
            contacts: true
        }
    })

    if (!user) {
        throw new AppError("User not found", 401)
    }

    return user!
}

export default listContactsUserService
