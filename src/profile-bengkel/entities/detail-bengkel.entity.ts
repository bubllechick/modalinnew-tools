import { User } from "src/user/entities/user.entity"
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, CreateDateColumn, UpdateDateColumn } from "typeorm"
import {  LayananBengkel, RatingBengkel } from "./bengkel.entity"

@Entity()
export class DetailBengkel {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    latitude: string

    @Column()
    longitude: string

    @Column({type : 'longtext'})
    foto: string

    // @OneToMany(() => BannerBengkel, db => db.detailbengkel, { onUpdate: 'CASCADE', onDelete: 'CASCADE' })
    // bannerBengkel: BannerBengkel

    @OneToMany(() => LayananBengkel, lb => lb.detailbengkel, { onUpdate: 'CASCADE', onDelete: 'CASCADE' })
    layananBengkel: LayananBengkel

    @ManyToOne(() => User, u => u.detailBengkel, { onUpdate: 'CASCADE', onDelete: 'CASCADE' })
    user: User

    @OneToMany(() => RatingBengkel, r => r.detailbengkel, { onUpdate: 'CASCADE', onDelete: 'CASCADE' })
    rating: RatingBengkel

    @CreateDateColumn()
    create_at: Date

    @UpdateDateColumn({ onUpdate: "CURRENT_TIMESTAMP(6)" })
    update_at: Date
}