import { Service } from 'typedi'
import { InjectRepository } from 'typeorm-typedi-extensions'
import { Signal } from '../entities/signal.entity';
import { SignalRepository } from '../repositories/signal.repository';

@Service()
export class SignalReceiverService {
    constructor(
        @InjectRepository()
        private readonly signals: SignalRepository,
    ) {}

    private async getJsonByBuffer(message: Buffer): Promise<JSON>{
        return new Promise<JSON>((resolve, reject) => {
            try {
                resolve(
                    JSON.parse(message.toString())
                )
            } catch(SyntaxError){
                reject(SyntaxError)
            }
        });
    }

    private async getSignalByJson(json: any): Promise<Signal>{
        return new Promise<Signal>((resolve, reject) => {
            resolve(new Signal(
                json.deviceId,
                json.data,
                json.sendDateTime,
                json.latitude,
                json.longitude,
            ))
        })
    }

    public async save(message: Buffer){
        await this.getJsonByBuffer(message).then(async (json) => {
            await this.getSignalByJson(json).then(async (signal) => {
                await this.signals.save(signal)
                .then(() => {
                    console.log("Signal saved.");
                })
                .catch((error) => {
                    console.log(error);
                });
            })
        })
        .catch((error) => {
            console.log(error)
        });
    }
}