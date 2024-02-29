import { z } from 'zod';
import { VALIDATION_MESSAGES } from './create-connector.validation-messages';

export const createConnectorValidationSchema = z
  .object({
    type: z.enum(['CCS', 'CHAdeMO', 'Type1', 'Type2'], {
      required_error: VALIDATION_MESSAGES.CONNECTOR_TYPE_REQUIRED
    }),
    maxKW: z
      .number({
        invalid_type_error: VALIDATION_MESSAGES.MAX_POWER_INVALID_TYPE,
        required_error: VALIDATION_MESSAGES.MAX_POWER_REQUIRED,
      })
      .positive(VALIDATION_MESSAGES.MAX_POWER_POSITIVE),
    station: z
      .string({
        invalid_type_error: VALIDATION_MESSAGES.STATION_ID_INVALID_TYPE,
        required_error: VALIDATION_MESSAGES.STATION_ID_REQUIRED,
      })
      .uuid({ message:VALIDATION_MESSAGES.STATION_ID_UUID }),
  })
  .required()
  .strict({ message: VALIDATION_MESSAGES.UNKNOWN_KEY});
