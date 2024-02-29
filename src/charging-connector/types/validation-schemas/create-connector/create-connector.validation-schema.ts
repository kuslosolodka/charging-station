import { z } from 'zod';

export const createConnectorValidationSchema = z
  .object({
    type: z.enum(['CCS', 'CHAdeMO', 'Type1', 'Type2']),
    maxKW: z.number().positive(),
    station: z.string().uuid(),
  })
  .required()
  .strict();
