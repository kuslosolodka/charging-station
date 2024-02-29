import { Controller, Get, Post, Body, UsePipes } from '@nestjs/common';
import { StationService } from './station.service.js';
import { StationDto } from './types/dto/station.dto.js';
import { ValidationPipe } from '../pipes/validation/validation.pipe.js';
import { createStationValidationSchema } from './types/validation-schemas/create-station/create-station.validation-schema.js';

@Controller('/station')
export class StationController {
  constructor(private readonly service: StationService) {}

  @Get()
  getAll() {
    return this.service.findAll();
  }

  @Post()
  @UsePipes(new ValidationPipe(createStationValidationSchema))
  createStation(@Body() body: StationDto) {
    return this.service.create(body);
  }
}
