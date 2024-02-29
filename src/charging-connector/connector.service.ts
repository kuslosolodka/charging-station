import { Injectable } from '@nestjs/common';
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
    // const count = await this.repository.count({ where: { station: body.station.connectors } });

    // if (count >= 8) {
    //   throw new BadRequestException('A station can have a maximum of 8 connectors');
    // }

    return this.repository.save(body);
  }
}
