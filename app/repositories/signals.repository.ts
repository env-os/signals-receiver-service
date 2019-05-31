import { Repository, EntityRepository } from 'typeorm';
import { Signal } from '../entities/signal.entity';


@EntityRepository(Signal)
export class SignalsRepository extends Repository<Signal> {
    
}