import { AppDataSource } from '../../data-source'
import { Contact } from '../../entities/contact.entity'
import { User } from '../../entities/user.entity'
import { AppError } from '../../errors/appError'
import { IContactRequest } from '../../interfaces/contact.interface'

const createContactService = async ({ fullname, email, phone }: IContactRequest, id: number): Promise<Contact> => {
    const userRepository = AppDataSource.getRepository(User)
    const contactRepository = AppDataSource.getRepository(Contact)

    const user = await userRepository.findOneBy({ id })

    if (!user) {
        throw new AppError("User not found", 401)
    }

    const contact = contactRepository.create({
        fullname,
        email,
        phone,
        user: user!
    })

    await contactRepository.save(contact)

    return contact
}

export default createContactService
