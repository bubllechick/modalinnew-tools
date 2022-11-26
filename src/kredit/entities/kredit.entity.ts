import { User } from "src/user/entities/user.entity"
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class Kredit {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    leasing: string

    @Column()
    jenis_angsuran: string

    @Column()
    asuransi: string

    @Column()
    dp: string

    @Column()
    tenor: string

    @Column()
    no_hp: string

    @CreateDateColumn()
    create_at: Date

    @UpdateDateColumn({ onUpdate: "CURRENT_TIMESTAMP(6)" })
    update_at: Date

    @ManyToOne(() => User, usr => usr.kredit, { onUpdate: 'CASCADE', onDelete: 'CASCADE' })
    user: User
}
