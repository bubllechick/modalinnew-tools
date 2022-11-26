import { User } from "src/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { DetailBengkel } from "./detail-bengkel.entity";

@Entity()
export class LayananBengkel {
    @PrimaryGeneratedColumn('uuid')
    id?: string

    @Column({type: 'longtext'})
    foto: string

    @Column()
    judul: string

    @Column()
    desc: string

    @Column()
    price: string

    @Column()
    kategori: string

    @CreateDateColumn()
    create_at: Date

    @UpdateDateColumn({ onUpdate: "CURRENT_TIMESTAMP(6)" })
    update_at: Date

    @ManyToOne(() => DetailBengkel, db => db.layananBengkel, { onUpdate: 'CASCADE', onDelete: 'CASCADE' })
    detailbengkel: DetailBengkel
}

// @Entity()
// export class BannerBengkel {
//     @PrimaryGeneratedColumn('uuid')
//     id: string

//     @Column()
//     foto: string

//     // @ManyToOne(() => DetailBengkel, u => u.bannerBengkel, { onUpdate: 'CASCADE', onDelete: 'CASCADE' })
//     // detailbengkel: DetailBengkel

//     @CreateDateColumn()
//     create_at: Date

//     @UpdateDateColumn({ onUpdate: "CURRENT_TIMESTAMP(6)" })
//     update_at: Date
// }

@Entity()
export class RatingBengkel {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @ManyToOne(() => DetailBengkel, db => db.rating, { onUpdate: 'CASCADE', onDelete: 'CASCADE' })
    detailbengkel: DetailBengkel

    @ManyToOne(() => User, u => u.rating, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    user: User

    @CreateDateColumn()
    create_at: Date

    @UpdateDateColumn({ onUpdate: "CURRENT_TIMESTAMP(6)" })
    update_at: Date
}
