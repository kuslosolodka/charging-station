import { Module } from '@nestjs/common';
import { ConnectorController } from './connector.controller';
import { ConnectorService } from './connector.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connector } from './connector.entity';
import { StationService } from '../charging-station/station.service';
import { Station } from '../charging-station/station.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Connector, Station])],
  controllers: [ConnectorController],
  providers: [ConnectorService, StationService],
})
export class ConnectorModule {}
