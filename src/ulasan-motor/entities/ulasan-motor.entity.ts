import { JualMotor } from "src/jual-motor/entities/jual-motor.entity"
import { User } from "src/user/entities/user.entity"
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class UlasanMotor {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    rating: string

    @CreateDateColumn()
    create_at: Date

    @UpdateDateColumn({ onUpdate: "CURRENT_TIMESTAMP(6)" })
    update_at: Date

    @ManyToOne(() => User, usr => usr.ulasanMotor, { onUpdate: 'CASCADE', onDelete: 'CASCADE' })
    user: User

    @ManyToOne(() => JualMotor, jmtr => jmtr.ulasanMotor, { onUpdate: 'CASCADE', onDelete: 'CASCADE' })
    jualMotor: JualMotor
}
