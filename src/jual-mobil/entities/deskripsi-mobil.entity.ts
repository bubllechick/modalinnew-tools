import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { JualMobil } from "./jual-mobil.entity";

@Entity()
export class DeskripsiMobil {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    cc: string

    @Column()
    diameter_pistion: string

    @Column()
    langkah_mesin: string

    @Column()
    jumlah_silinder: string

    @Column()
    tipe_mesin: string

    @Column()
    torisi_maksimum: string

    @Column()
    type: string

    @Column()
    sistem_pendinginan: string

    @Column()
    sistem_pembakaran: string

    @CreateDateColumn()
    create_at: Date

    @UpdateDateColumn({ onUpdate: "CURRENT_TIMESTAMP(6)" })
    update_at: Date

    // @ManyToOne(() => JualMobil, cmb => cmb.deskripsimobil, {
    //     onDelete: 'CASCADE', onUpdate: 'CASCADE',
    // })
    // @JoinColumn()
    // jualmobil: JualMobil

    // @ManyToOne(() => JualMobil, jm => jm.deskripsi)
    // @JoinColumn()
    // jualmobil: JualMobil
}