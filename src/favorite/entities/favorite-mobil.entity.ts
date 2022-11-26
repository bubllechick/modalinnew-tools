import { JualMobil } from "src/jual-mobil/entities/jual-mobil.entity";
import { User } from "src/user/entities/user.entity";
import { CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class FavoriteMobil {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @ManyToOne(() => User, usr => usr.favoritemobil, { onUpdate: 'CASCADE', onDelete: 'CASCADE' })
    user: User

    @ManyToOne(() => JualMobil, jmbl => jmbl.favoriteMobil, {
        onDelete: 'CASCADE', onUpdate: 'CASCADE',
    })
    @JoinColumn()
    jualmobil: JualMobil

    @CreateDateColumn()
    create_at: Date

    @UpdateDateColumn({ onUpdate: "CURRENT_TIMESTAMP(6)" })
    update_at: Date
}