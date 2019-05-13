import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm'


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

    constructor(deviceId: number, data: number, sendDateTime: Date){
        this.deviceId = deviceId;
        this.data = data;
        this.sendDateTime = sendDateTime;
    }
}
