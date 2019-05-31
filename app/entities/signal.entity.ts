import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm'


@Entity('Signals')
export class Signal {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({type: "int"})
    deviceId: number;

    @Column({type: "float"})
    data: number;

    @CreateDateColumn({ type: 'date' })
    sendDateTime: Date;

    @Column({type: "float"})
    latitude: number;

    @Column({type: "float"})
    longitude: number;

    constructor(deviceId: number, data: number, sendDateTime: Date, latitude: number, longitude: number){
        this.deviceId = deviceId;
        this.data = data;
        this.sendDateTime = sendDateTime;
        this.latitude = latitude;
        this.longitude = longitude;
    }
}