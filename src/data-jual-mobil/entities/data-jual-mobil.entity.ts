import { JualMobil } from "src/jual-mobil/entities/jual-mobil.entity"
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { DokumenMobil } from "./data-dokumen-mobil.entity"
import { GaleriMobil } from "./data-galeri-mobil.entity"

@Entity()
export class DataJualMobil {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @CreateDateColumn()
    create_at: Date

    @UpdateDateColumn({ onUpdate: "CURRENT_TIMESTAMP(6)" })
    update_at: Date

    @OneToMany(() => GaleriMobil, gm => gm.datajualmobil, { onUpdate: 'CASCADE', onDelete: 'CASCADE' })
    galeriMobil: GaleriMobil

    @OneToMany(() => DokumenMobil, dm => dm.datajualmobil, { onUpdate: 'CASCADE', onDelete: 'CASCADE' })
    dokumenMobil: DokumenMobil

    @ManyToOne(() => JualMobil, jmobil => jmobil.datajualmobil, { onUpdate: 'CASCADE', onDelete: 'CASCADE' })
    jualMobil: JualMobil
}





    // @Column({ type: 'longtext' })
    // eksterior1: string
    // @Column({ type: 'longtext' })
    // eksterior2: string
    // @Column({ type: 'longtext' })
    // eksterior3: string
    // @Column({ type: 'longtext' })
    // eksterior4: string
    // @Column({ type: 'longtext' })
    // eksterior5: string
    // @Column({ type: 'longtext' })
    // eksterior6: string
    // @Column({ type: 'longtext' })
    // eksterior7: string
    // @Column({ type: 'longtext' })
    // eksterior8: string

    // @Column({ type: 'longtext' })
    // interior1: string
    // @Column({ type: 'longtext' })
    // interior2: string
    // @Column({ type: 'longtext' })
    // interior3: string
    // @Column({ type: 'longtext' })
    // interior4: string
    // @Column({ type: 'longtext' })
    // interior5: string
    // @Column({ type: 'longtext' })
    // interior6: string
    // @Column({ type: 'longtext' })
    // interior7: string
    // @Column({ type: 'longtext' })
    // interior8: string

    // @Column({ type: 'longtext' })
    // stkn_depan: string
    // @Column({ type: 'longtext' })
    // stkn_belakang: string
    // @Column({ type: 'longtext' })
    // buku_manual: string
    // @Column({ type: 'longtext' })
    // buku_service: string
    // @Column({ type: 'longtext' })
    // kunci_cadangan: string
    // @Column({ type: 'longtext' })
    // bpkb: string
