import { DataJualMotor } from "src/data-jual-motor/entities/data-jual-motor.entity";
import { FavoriteMotor } from "src/favorite/entities/favorite-motor.entity";
import { KomentarProdukMotor } from "src/komentar-produk-motor/entities/komentar-produk-motor.entity";
import { UlasanMotor } from "src/ulasan-motor/entities/ulasan-motor.entity";
import { User } from "src/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class JualMotor {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    merek_motor: string

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

    @Column()
    lokasi: string

    @Column()
    harga: string

    @Column()
    kondisi: string

    @CreateDateColumn()
    create_at: Date

    @UpdateDateColumn({ onUpdate: "CURRENT_TIMESTAMP(6)" })
    update_at: Date

    @ManyToOne(() => User, usr => usr.jualMotor, { onUpdate: 'CASCADE', onDelete: 'CASCADE' })
    user: User

    @OneToMany(() => DataJualMotor, djmotor => djmotor.jualMotor, { onUpdate: 'CASCADE', onDelete: 'CASCADE' })
    dataJualmotor: DataJualMotor


    @OneToMany(() => KomentarProdukMotor, kp => kp.jualMotor, { onUpdate: 'CASCADE', onDelete: 'CASCADE' })
    komentarmotor: KomentarProdukMotor

    @OneToMany(() => UlasanMotor, kp => kp.jualMotor, { onUpdate: 'CASCADE', onDelete: 'CASCADE' })
    ulasanMotor: UlasanMotor

    // @OneToMany(() => DeskripsiMotor, dm => dm.jualmotor, {
    //     onDelete: 'CASCADE', onUpdate: 'CASCADE',
    // })
    // @JoinColumn()
    // deskripsi: DeskripsiMotor[]

    @OneToMany(() => FavoriteMotor, fmtr => fmtr.jualmotor, {
        onDelete: 'CASCADE', onUpdate: 'CASCADE',
    })
    @JoinColumn()
    favoriteMotor: FavoriteMotor

    @Column({ type: 'longtext' })
    deskripsi: string
}
