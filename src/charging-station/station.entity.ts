import { Connector } from '../charging-connector/connector.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Point } from 'typeorm';

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

  @Column("geometry", {nullable: true})
    location: Point

  @Column()
  isPublic: boolean;

  @OneToMany(() => Connector, (connector) => connector.station)
  connectors: Connector[];
}
