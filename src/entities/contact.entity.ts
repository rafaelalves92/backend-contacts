import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { User } from './user.entity'
import { Exclude } from 'class-transformer'

@Entity('contacts')
class Contact {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ length: 127 })
    fullname: string

    @Column({ length: 127, unique: true })
    email: string

    @Column({ unique: true })
    phone: number

    @CreateDateColumn()
    createdAt: Date

    @ManyToOne(() => User)
    @Exclude()
    user: User

}

export { Contact }
