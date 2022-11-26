import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { DataJualMobil } from "./data-jual-mobil.entity";

@Entity()
export class DokumenMobil {

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

    @ManyToOne(() => DataJualMobil, djm => djm.dokumenMobil, { onUpdate: 'CASCADE', onDelete: 'CASCADE' })
    datajualmobil: DataJualMobil

    @CreateDateColumn()
    create_at: Date

    @UpdateDateColumn({ onUpdate: "CURRENT_TIMESTAMP(6)" })
    update_at: Date
}