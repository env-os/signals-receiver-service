import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'


@Entity('Places')
export class Place {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    latitude: number;

    @Column()
    longitude: number;

    constructor(latitude: number, longitude: number){
        this.latitude = latitude;
        this.longitude = longitude;
    }
}