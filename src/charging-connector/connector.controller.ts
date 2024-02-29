import { Controller, Post, Body, UsePipes } from '@nestjs/common';
import { ConnectorService } from './connector.service';
import { ConnectorDto } from './types/dto/connector.dto';
import { ValidationPipe } from 'src/pipes/validation/validation.pipe';
import { createConnectorValidationSchema } from './types/validation-schemas/create-connector/create-connector.validation-schema';

@Controller('/connector')
export class ConnectorController {
  constructor(private readonly service: ConnectorService) {}

  @Post()
  @UsePipes(new ValidationPipe(createConnectorValidationSchema))
  createConnector(@Body() body: ConnectorDto) {
    return this.service.create(body);
  }
}
