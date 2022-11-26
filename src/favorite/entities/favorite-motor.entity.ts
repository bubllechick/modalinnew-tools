import { JualMobil } from "src/jual-mobil/entities/jual-mobil.entity";
import { JualMotor } from "src/jual-motor/entities/jual-motor.entity";
import { User } from "src/user/entities/user.entity";
import { CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Favorite } from "./favorite.entity";

@Entity()
export class FavoriteMotor {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @ManyToOne(() => User, usr => usr.favoritemotor, { onUpdate: 'CASCADE', onDelete: 'CASCADE' })
    user: User

    @ManyToOne(() => JualMotor, jmtr => jmtr.favoriteMotor, {
        onDelete: 'CASCADE', onUpdate: 'CASCADE'
    })
    @JoinColumn()
    jualmotor: JualMotor

    @CreateDateColumn()
    create_at: Date

    @UpdateDateColumn({ onUpdate: "CURRENT_TIMESTAMP(6)" })
    update_at: Date
}