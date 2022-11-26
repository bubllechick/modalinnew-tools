import { DanaTunai } from "src/dana-tunai/entities/dana-tunai.entity"
import { FavoriteMobil } from "src/favorite/entities/favorite-mobil.entity"
import { FavoriteMotor } from "src/favorite/entities/favorite-motor.entity"
import { JualMobil } from "src/jual-mobil/entities/jual-mobil.entity"
import { JualMotor } from "src/jual-motor/entities/jual-motor.entity"
import { KomentarProdukMotor } from "src/komentar-produk-motor/entities/komentar-produk-motor.entity"
import { KomentarProduk } from "src/komentar-produk/entities/komentar-produk.entity"
import { Komunita } from "src/komunitas/entities/komunita.entity"
import { Kredit } from "src/kredit/entities/kredit.entity"
import { RatingBengkel } from "src/profile-bengkel/entities/bengkel.entity"
import { DetailBengkel } from "src/profile-bengkel/entities/detail-bengkel.entity"
import { UlasanMobil } from "src/ulasan-mobil/entities/ulasan-mobil.entity"
import { UlasanMotor } from "src/ulasan-motor/entities/ulasan-motor.entity"
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    nama: string

    @Column()
    no_hp: string

    @Column()
    address: string

    @Column({ type: 'longtext' })
    foto: string

    @Column()
    desc: string

    @Column()
    code: number

    @Column()
    role: string

    @CreateDateColumn()
    create_at: Date

    @UpdateDateColumn({ onUpdate: "CURRENT_TIMESTAMP(6)" })
    update_at: Date

    @OneToMany(() => JualMotor, jm => jm.user, { onUpdate: 'CASCADE', onDelete: 'CASCADE' })
    jualMotor: JualMotor

    @OneToMany(() => JualMobil, jm => jm.user, { onUpdate: 'CASCADE', onDelete: 'CASCADE' })
    jualMobil: JualMobil

    @OneToMany(() => Kredit, kr => kr.user, { onUpdate: 'CASCADE', onDelete: 'CASCADE' })
    kredit: Kredit

    @OneToMany(() => DanaTunai, kr => kr.user, { onUpdate: 'CASCADE', onDelete: 'CASCADE' })
    danaTunai: DanaTunai

    @OneToMany(() => KomentarProduk, kp => kp.user, { onUpdate: 'CASCADE', onDelete: 'CASCADE' })
    komentar_produk: KomentarProduk

    @OneToMany(() => KomentarProdukMotor, kp => kp.user, { onUpdate: 'CASCADE', onDelete: 'CASCADE' })
    komentarmotor: KomentarProdukMotor

    @OneToMany(() => Komunita, k => k.user, { onUpdate: 'CASCADE', onDelete: 'CASCADE' })
    komunitas: KomentarProduk

    @OneToMany(() => UlasanMobil, k => k, { onUpdate: 'CASCADE', onDelete: 'CASCADE' })
    ulasanMobil: UlasanMobil

    @OneToMany(() => UlasanMotor, k => k, { onUpdate: 'CASCADE', onDelete: 'CASCADE' })
    ulasanMotor: UlasanMotor

    @OneToMany(() => FavoriteMotor, f => f.user, { onUpdate: 'CASCADE', onDelete: 'CASCADE' })
    favoritemotor: FavoriteMotor

    @OneToMany(() => FavoriteMobil, f => f.user, { onUpdate: 'CASCADE', onDelete: 'CASCADE' })
    favoritemobil: FavoriteMobil

    @OneToMany(() => DetailBengkel, db => db.user, { onUpdate: 'CASCADE', onDelete: 'CASCADE' })
    detailBengkel: DetailBengkel

    @OneToMany(() => RatingBengkel, r => r.user, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    rating: RatingBengkel

}
