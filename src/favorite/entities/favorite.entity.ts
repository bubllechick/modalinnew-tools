import { JualMobil } from "src/jual-mobil/entities/jual-mobil.entity";
import { JualMotor } from "src/jual-motor/entities/jual-motor.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Favorite {
    @PrimaryGeneratedColumn('uuid')
    id: string

    // @ManyToOne(() => User, usr => usr.favorite, { onUpdate: 'CASCADE', onDelete: 'CASCADE' })
    // user: User

    // @OneToMany(() => FavoriteMobil, fmbl => fmbl.favorite, {
    //     onDelete: 'CASCADE', onUpdate: 'CASCADE',
    // })
    // @JoinColumn()
    // favoriteMobil: FavoriteMobil;

    // @OneToMany(() => FavoriteMotor, fmtr => fmtr.favorite, {
    //     onDelete: 'CASCADE', onUpdate: 'CASCADE',
    // })
    // @JoinColumn()
    // favoriteMotor: FavoriteMotor;
    // @ManyToOne(() => JualMobil, jmbl => jmbl.favorite, { onUpdate: 'CASCADE', onDelete: 'CASCADE' })
    // jualMobil: JualMobil

    // @ManyToOne(() => JualMotor, jmtr => jmtr.favorite, { onUpdate: 'CASCADE', onDelete: 'CASCADE' })
    // jualMotor: JualMotor

    // @ManyToOne(() => JualMobil, jmbl => jmbl.favorite, {
    //     onDelete: 'CASCADE', onUpdate: 'CASCADE',
    // })
    // jualMobil: JualMobil

    // @ManyToOne(() => JualMotor, jmtr => jmtr.favorite, {
    //     onDelete: 'CASCADE', onUpdate: 'CASCADE'
    // })
    // jualMotor: JualMotor

    @Column()
    jualMobilFav: string


    @Column()
    jualMotorFav: string

    // @ManyToMany(type => PersonEntity, {
    //     onDelete: 'CASCADE',
    // })
    // @JoinColumn({ name: 'person_id' })
    // person: PersonEntity;


}
