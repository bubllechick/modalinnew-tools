import { User } from "src/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Komunita {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    chat: string

    @CreateDateColumn()
    create_at: Date

    @UpdateDateColumn({ onUpdate: "CURRENT_TIMESTAMP(6)" })
    update_at: Date

    @ManyToOne(() => User, usr => usr.komunitas, { onUpdate: 'CASCADE', onDelete: 'CASCADE' })
    user: User

    // @ManyToOne(() => User, usr => usr.komunitas)
    // user2: User

}
