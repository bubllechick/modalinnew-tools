import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { DataJualMobil } from "./data-jual-mobil.entity";

@Entity()
export class GaleriMobil {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ type: 'longtext' })
    eksterior1: string
    @Column({ type: 'longtext' })
    eksterior2: string
    @Column({ type: 'longtext' })
    eksterior3: string
    @Column({ type: 'longtext' })
    eksterior4: string
    @Column({ type: 'longtext' })
    eksterior5: string
    @Column({ type: 'longtext' })
    eksterior6: string
    @Column({ type: 'longtext' })
    eksterior7: string
    @Column({ type: 'longtext' })
    eksterior8: string

    @ManyToOne(() => DataJualMobil, djm => djm.galeriMobil, { onUpdate: 'CASCADE', onDelete: 'CASCADE' })
    datajualmobil: DataJualMobil

    @CreateDateColumn()
    create_at: Date

    @UpdateDateColumn({ onUpdate: "CURRENT_TIMESTAMP(6)" })
    update_at: Date
}