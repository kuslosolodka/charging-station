import { Injectable } from '@nestjs/common';

@Injectable()
export class StationService {
  getHello(): string {
    return 'Station';
  }
}
