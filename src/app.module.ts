import { Module } from '@nestjs/common';
import { ConnectorModule } from './charging-connector/connector.module';
import { StationModule } from './charging-station/station.module';


@Module({
  imports: [ConnectorModule, StationModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
