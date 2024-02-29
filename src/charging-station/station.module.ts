import { Module } from '@nestjs/common';
import { StationController } from './station.controller';
import { StationService } from './station.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Station } from './station.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Station])],
  controllers: [StationController],
  providers: [StationService],
})
export class StationModule {}
