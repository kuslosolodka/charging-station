import { PipeTransform, BadRequestException } from '@nestjs/common';
import { ZodSchema, ZodError } from 'zod';

export class ValidationPipe implements PipeTransform {
  constructor(private schema: ZodSchema) {}

  transform(value: unknown) {
    try {
      this.schema.parse(value);
      return value;
    } catch (error) {
      if (error instanceof ZodError) {
        const errorMessages = error.errors.map((error_) => {
          return {
            field: error_.path.join('.'),
            message: error_.message,
          };
        });
        throw new BadRequestException(errorMessages);
      }
      throw error;
    }
  }
}
