import { JualMotor } from "src/jual-motor/entities/jual-motor.entity"
import { Column, CreateDateColumn, Entity, Generated, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { DokumenMotor } from "./data-dokumen.entity"
import { GaleriMotor } from "./data-galeri.entity"

@Entity()
export class DataJualMotor {
    @PrimaryGeneratedColumn('uuid')
    @Generated('uuid')
    id: string

    @CreateDateColumn()
    create_at: Date

    @UpdateDateColumn({ onUpdate: "CURRENT_TIMESTAMP(6)" })
    update_at: Date

    @ManyToOne(() => JualMotor, jmotor => jmotor.dataJualmotor, { onUpdate: 'CASCADE', onDelete: 'CASCADE' })
    jualMotor: JualMotor

    @OneToMany(() => GaleriMotor, gm => gm.datajualmotor, { onUpdate: 'CASCADE', onDelete: 'CASCADE' })
    galerimotor: GaleriMotor

    @OneToMany(() => DokumenMotor, dm => dm.datajualmotor, { onUpdate: 'CASCADE', onDelete: 'CASCADE' })
    dokumenmotor: DokumenMotor
}




    // @Column({ type: 'longtext' })
    // galeri1: string
    // @Column({ type: 'longtext' })
    // galeri2: string
    // @Column({ type: 'longtext' })
    // galeri3: string
    // @Column({ type: 'longtext' })
    // galeri4: string
    // @Column({ type: 'longtext' })
    // galeri5: string
    // @Column({ type: 'longtext' })
    // galeri6: string
    // @Column({ type: 'longtext' })
    // galeri7: string
    // @Column({ type: 'longtext' })
    // galeri8: string

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