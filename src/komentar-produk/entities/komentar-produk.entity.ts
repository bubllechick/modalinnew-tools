import { JualMobil } from "src/jual-mobil/entities/jual-mobil.entity"
import { JualMotor } from "src/jual-motor/entities/jual-motor.entity"
import { User } from "src/user/entities/user.entity"
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class KomentarProduk {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    komentar: string

    @CreateDateColumn()
    create_at: Date

    @UpdateDateColumn({ onUpdate: "CURRENT_TIMESTAMP(6)" })
    update_at: Date

    @ManyToOne(() => User, usr => usr.komentar_produk, { onUpdate: 'CASCADE', onDelete: 'CASCADE' })
    user: User

    @ManyToOne(() => JualMobil, jmobil => jmobil.komentar_produk, { onUpdate: 'CASCADE', onDelete: 'CASCADE' })
    jualMobil: JualMobil

}
