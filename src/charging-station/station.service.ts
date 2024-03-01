import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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

  async findOne(id: string): Promise<Station> {
    return await this.repository.findOneBy({ id });
  }

  async create(
    body: Pick<
      Station,
      'title' | 'description' | 'email' | 'isPublic' | 'location'
    >
  ): Promise<Station> {
    const isEmailExist = await this.repository.findOne({
      where: {
        email: body.email,
      },
    });

    if (isEmailExist) {
      throw new BadRequestException('Email already exists');
    }

    return this.repository.save({
      ...body,
      location: { type: 'Point', ...body.location },
    });
  }
}
