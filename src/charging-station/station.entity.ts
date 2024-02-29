import { Connector } from '../charging-connector/connector.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

// геокоординати

// геокоординати є обов‘язковими тільки для публічних станцій.

@Entity()
export class Station {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  title: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  email: string;

  @Column()
  isPublic: boolean;

  @OneToMany(() => Connector, (connector) => connector.station)
  connectors: Connector[];
}
