import { JualMotor } from "src/jual-motor/entities/jual-motor.entity"
import { User } from "src/user/entities/user.entity"
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class KomentarProdukMotor {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    komentar: string

    @CreateDateColumn()
    create_at: Date

    @UpdateDateColumn({ onUpdate: "CURRENT_TIMESTAMP(6)" })
    update_at: Date

    @ManyToOne(() => User, usr => usr.komentarmotor, { onUpdate: 'CASCADE', onDelete: 'CASCADE' })
    user: User

    @ManyToOne(() => JualMotor, jmotor => jmotor.komentarmotor, { onUpdate: 'CASCADE', onDelete: 'CASCADE' })
    jualMotor: JualMotor
}
