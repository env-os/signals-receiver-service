import { Service } from 'typedi'
import { InjectRepository } from 'typeorm-typedi-extensions'
import { Signal } from '../entities/signal.entity';
import { SignalRepository } from '../repositories/signal.repository';
import { Place } from '../entities/place.entity';

@Service()
export class SignalReceiverService {
    constructor(
        @InjectRepository()
        private readonly signals: SignalRepository,
    ) {}

    private convertMessageToSignal(message: Buffer): Signal{
        const messageJSON = JSON.parse(message.toString());
        return new Signal(
            messageJSON['deviceId'],
            messageJSON['data'],
            messageJSON['sendDateTime'],
            new Place(
                messageJSON['latitude'],
                messageJSON['longitude'],
            )
        )
    }

    public async save(message: Buffer){
        const signal = this.convertMessageToSignal(message);
        await this.signals.save(signal);
    }
}