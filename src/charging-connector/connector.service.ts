import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Connector } from './connector.entity';
import { StationService } from '../charging-station/station.service';

@Injectable()
export class ConnectorService {
  constructor(
    @InjectRepository(Connector)
    private repository: Repository<Connector>,
    private stationService: StationService
  ) {}

  async create(
    body: Pick<Connector, 'type' | 'maxKW' | 'station'>
  ): Promise<Connector> {
    const isStationExist = await this.stationService.findOne(
      // TODO: remove type casting
      body.station as unknown as string
    );

    if (!isStationExist) {
      throw new NotFoundException('Station does not exist');
    }

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
