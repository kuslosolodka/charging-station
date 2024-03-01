import { ConnectorType } from '../../../charging-connector/connector.entity';
import { Station } from '../../../charging-station/station.entity';

export class ConnectorDto {
  type: ConnectorType;

  maxKW: number;

  station: Station;
}
