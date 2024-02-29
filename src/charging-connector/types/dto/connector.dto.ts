import { ConnectorType } from 'src/charging-connector/connector.entity';
import { Station } from 'src/charging-station/station.entity';

export class ConnectorDto {
  type: ConnectorType;

  maxKW: number;

  station: Station;
}
