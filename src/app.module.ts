import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connector } from './charging-connector/connector.entity.js';
import { ConnectorModule } from './charging-connector/connector.module';
import { Station } from './charging-station/station.entity';
import { StationModule } from './charging-station/station.module';
import { ConfigModule } from '@nestjs/config';
import { ConfigService } from '@nestjs/config';

const configService = new ConfigService()

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ConnectorModule,
    StationModule,
    // TODO: refactor
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: configService.get('DB_HOST'),
      port: Number(configService.get<number>('DB_PORT')),
      username: configService.get<string>('DB_USERNAME'),
      password: configService.get<string>('DB_PASSWORD'),
      database: configService.get<string>('DB_NAME'),
      entities: [Station, Connector],
      synchronize: true, //TODO: remove from prod
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
