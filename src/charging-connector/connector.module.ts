import { Module } from '@nestjs/common';
import { ConnectorController } from './connector.controller';
import { ConnectorService } from './connector.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connector } from './connector.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Connector])],
  controllers: [ConnectorController],
  providers: [ConnectorService],
})
export class ConnectorModule {}
