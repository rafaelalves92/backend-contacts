import { AppDataSource } from '../../data-source'
import { User } from '../../entities/user.entity'
import { IUserResponse } from '../../interfaces/user.interface'

const listUsersService = async (): Promise<IUserResponse[]> => {
    const userRepository = AppDataSource.getRepository(User)
    const users = await userRepository.find()

    return users
}

export default listUsersService
