import { User } from "src/user/entities/user.entity"
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class DanaTunai {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    nama_lengkap: string

    @Column()
    email: string

    @Column()
    alamat: string

    @Column()
    jaminan: string

    @Column()
    jenis_jaminan: string

    @Column()
    bpkb_atas_nama: string

    @Column()
    no_telp: string

    @Column()
    merek: string

    @Column()
    model: string

    @Column()
    no_polisi: string

    @Column()
    jarak_tempuh: string

    @Column()
    tipe: string

    @Column()
    tahun_kendaraan: string

    @Column()
    warna: string

    @CreateDateColumn()
    create_at: Date

    @UpdateDateColumn({ onUpdate: "CURRENT_TIMESTAMP(6)" })
    update_at: Date

    @ManyToOne(() => User, usr => usr.danaTunai, { onUpdate: 'CASCADE', onDelete: 'CASCADE' })
    user: User
}
