import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column({ nullable: false, unique: true })
  email: string

  @Column({ nullable: false })
  password: string

  @Column({ type: 'datetime', default: Date.now() })
  createdAt: Date
}