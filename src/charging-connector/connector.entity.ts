import { Station } from '../charging-station/station.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

export type ConnectorType = 'CCS' | 'CHAdeMO' | 'Type1' | 'Type2';

@Entity()
export class Connector {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'enum',
    enum: ['CCS', 'CHAdeMO', 'Type1', 'Type2'],
  })
  type: ConnectorType;

  @Column({ type: 'real' })
  maxKW: number;

  @ManyToOne(() => Station, (station) => station.connectors)
  station: Station;
}
