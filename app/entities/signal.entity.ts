import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToOne, JoinColumn } from 'typeorm'
import { Place } from './place.entity';


@Entity('Signals')
export class Signal {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    deviceId: number;

    @Column()
    data: number;

    @CreateDateColumn({ type: 'date' })
    sendDateTime: Date;

    @OneToOne(type => Place)
    @JoinColumn()
    place: Place;

    constructor(deviceId: number, data: number, sendDateTime: Date, place: Place){
        this.deviceId = deviceId;
        this.data = data;
        this.sendDateTime = sendDateTime;
        this.place = place;
    }
}