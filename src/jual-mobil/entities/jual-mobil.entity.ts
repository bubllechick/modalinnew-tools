import { DataJualMobil } from "src/data-jual-mobil/entities/data-jual-mobil.entity";
import { FavoriteMobil } from "src/favorite/entities/favorite-mobil.entity";
import { Favorite } from "src/favorite/entities/favorite.entity";
import { KomentarProduk } from "src/komentar-produk/entities/komentar-produk.entity";
import { UlasanMobil } from "src/ulasan-mobil/entities/ulasan-mobil.entity";
import { User } from "src/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { DeskripsiMobil } from "./deskripsi-mobil.entity";

@Entity()
export class JualMobil {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    merek_mobil: string

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

    @OneToMany(() => DataJualMobil, djmobil => djmobil.jualMobil, { onUpdate: 'CASCADE', onDelete: 'CASCADE' })
    datajualmobil: DataJualMobil

    @ManyToOne(() => User, usr => usr.jualMobil, { onUpdate: 'CASCADE', onDelete: 'CASCADE' })
    user: User

    @OneToMany(() => KomentarProduk, kp => kp.jualMobil, { onUpdate: 'CASCADE', onDelete: 'CASCADE' })
    komentar_produk: KomentarProduk

    @OneToMany(() => UlasanMobil, kp => kp.jualMobil, { onUpdate: 'CASCADE', onDelete: 'CASCADE' })
    ulasanMobil: UlasanMobil

    // @OneToMany(() => DeskripsiMobil, dm => dm.jualmobil, {
    //     onDelete: 'CASCADE', onUpdate: 'CASCADE',
    // })
    // @JoinColumn()
    // deskripsimobil: DeskripsiMobil[]

    @OneToMany(() => FavoriteMobil, fmbl => fmbl.jualmobil, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn()
    favoriteMobil: FavoriteMobil

    @Column({ type: 'longtext' })
    deskripsi: string

}
