import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Connector } from './connector.entity';

@Injectable()
export class ConnectorService {
  constructor(
    @InjectRepository(Connector)
    private repository: Repository<Connector>
  ) {}

  async create(
    body: Pick<Connector, 'type' | 'maxKW' | 'station'>
  ): Promise<Connector> {
    const count = await this.repository
      .createQueryBuilder('connector')
      .where('connector.station = :station', { station: body.station })
      .getCount();

    if (count >= 8) {
      throw new BadRequestException(
        'Station cannot have more than 8 connectors'
      );
    }

    return this.repository.save(body);
  }
}
