import { Controller, Get } from '@nestjs/common';
import { StationService } from './station.service';

@Controller('/station')
export class StationController {
  constructor(private readonly service: StationService) {}

  @Get()
  getHello(): string {
    return this.service.getHello();
  }
}
