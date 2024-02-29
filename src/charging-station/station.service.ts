import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
// eslint-disable-next-line node/no-missing-import
import { Station } from './station.entity';

@Injectable()
export class StationService {
  constructor(
    @InjectRepository(Station)
    private repository: Repository<Station>
  ) {}
  async findAll(): Promise<Station[]> {
    return await this.repository.find({
      relations: {
        connectors: true,
      },
    });
  }

  async create(
    body: Pick<Station, 'title' | 'description' | 'email' | 'isPublic'>
  ): Promise<Station> {
    return this.repository.save(body);
  }
}
