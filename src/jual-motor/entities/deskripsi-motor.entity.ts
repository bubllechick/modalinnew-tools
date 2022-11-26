import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { JualMotor } from "./jual-motor.entity"

@Entity()
export class DeskripsiMotor {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    tipe_mesin: string

    @Column()
    cc: string

    @Column()
    sistem_pembakaran: string

    @Column()
    diameter_langkah: string

    @Column()
    jumlah_silinder: string

    @Column()
    tipe_transmisi: string

    @Column()
    rasio_kompresi: string

    @Column()
    daya_maksimum: string

    @Column()
    torsi_maksimum: string

    @Column()
    tipe_stater: string

    @Column()
    tipe_kopling: string


    @CreateDateColumn()
    create_at: Date

    @UpdateDateColumn({ onUpdate: "CURRENT_TIMESTAMP(6)" })
    update_at: Date

    // @ManyToOne(() => JualMotor, cm => cm.deskripsi, {
    //     onDelete: 'CASCADE', onUpdate: 'CASCADE',
    // })
    // @JoinColumn()
    // jualmotor: JualMotor
}