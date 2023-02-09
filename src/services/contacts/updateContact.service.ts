import { AppDataSource } from '../../data-source'
import { IContactUpdateRequest } from '../../interfaces/contact.interface'
import { Contact } from '../../entities/contact.entity'
import { AppError } from '../../errors/appError'

const updateContactService = async ({ fullname, email, phone }: IContactUpdateRequest, id: number) => {
    const contactRepository = AppDataSource.getRepository(Contact)
    const findContact = await contactRepository.findOneBy({ id })

    if (!findContact) {
        throw new AppError("Contact not found", 401)
    }

    await contactRepository.update(id, {
        fullname: fullname ? fullname : findContact.fullname,
        email: email ? email : findContact.email,
        phone: phone ? phone : findContact.phone
    })

    const contact = await contactRepository.findOneBy({ id })

    return contact!
}

export default updateContactService
