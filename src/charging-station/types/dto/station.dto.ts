import { Point } from "typeorm";

export class StationDto {
  title: string;

  description: string;

  email: string;

  location: Point

  isPublic: boolean;
}
