import { Exclude } from 'class-transformer'
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { Contact } from './contact.entity'

@Entity('users')
class User {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ length: 127 })
    fullname: string

    @Column({ length: 127, unique: true })
    email: string

    @Column({ length: 127 })
    @Exclude()
    password: string

    @Column({ unique: true })
    phone: number

    @Column({ default: true })
    isActive: boolean

    @CreateDateColumn()
    createdAt: Date

    @OneToMany(() => Contact, contact => contact.user)
    contacts: Contact[]

}

export { User }

