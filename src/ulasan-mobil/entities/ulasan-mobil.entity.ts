import { JualMobil } from "src/jual-mobil/entities/jual-mobil.entity"
import { User } from "src/user/entities/user.entity"
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class UlasanMobil {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    rating: string

    @ManyToOne(() => User, usr => usr.ulasanMotor, { onUpdate: 'CASCADE', onDelete: 'CASCADE' })
    user: User

    @ManyToOne(() => JualMobil, jmbl => jmbl.ulasanMobil, { onUpdate: 'CASCADE', onDelete: 'CASCADE' })
    jualMobil: JualMobil

    @CreateDateColumn()
    create_at: Date

    @UpdateDateColumn({ onUpdate: "CURRENT_TIMESTAMP(6)" })
    update_at: Date
}
