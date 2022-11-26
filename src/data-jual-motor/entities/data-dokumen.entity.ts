import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { DataJualMotor } from "./data-jual-motor.entity";

@Entity()
export class DokumenMotor {

    @PrimaryGeneratedColumn('uuid')
    id: string
    @Column({ type: 'longtext' })
    stkn_depan: string
    @Column({ type: 'longtext' })
    stkn_belakang: string
    @Column({ type: 'longtext' })
    buku_manual: string
    @Column({ type: 'longtext' })
    buku_service: string
    @Column({ type: 'longtext' })
    kunci_cadangan: string
    @Column({ type: 'longtext' })
    bpkb: string
    @CreateDateColumn()
    create_at: Date

    @UpdateDateColumn({ onUpdate: "CURRENT_TIMESTAMP(6)" })
    update_at: Date

    @ManyToOne(() => DataJualMotor, djm => djm.dokumenmotor, { onUpdate: 'CASCADE', onDelete: 'CASCADE' })
    datajualmotor: DataJualMotor
}