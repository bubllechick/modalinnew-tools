import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { DataJualMotor } from "./data-jual-motor.entity";

@Entity()
export class GaleriMotor {
    @PrimaryGeneratedColumn('uuid')
    id: string
    @Column({ type: 'longtext' })
    galeri1: string
    @Column({ type: 'longtext' })
    galeri2: string
    @Column({ type: 'longtext' })
    galeri3: string
    @Column({ type: 'longtext' })
    galeri4: string
    @Column({ type: 'longtext' })
    galeri5: string
    @Column({ type: 'longtext' })
    galeri6: string
    @Column({ type: 'longtext' })
    galeri7: string
    @Column({ type: 'longtext' })
    galeri8: string

    @CreateDateColumn()
    create_at: Date

    @UpdateDateColumn({ onUpdate: "CURRENT_TIMESTAMP(6)" })
    update_at: Date

    @ManyToOne(() => DataJualMotor, djm => djm.galerimotor, { onUpdate: 'CASCADE', onDelete: 'CASCADE' })
    datajualmotor: DataJualMotor
}