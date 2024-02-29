import { z } from 'zod';
import { VALIDATION_MESSAGES } from './create-station.validation-messages';

export const createStationValidationSchema = z
  .object({
    title: z
      .string({
        invalid_type_error: VALIDATION_MESSAGES.TITLE_INVALID_TYPE,
        required_error: VALIDATION_MESSAGES.TITLE_REQUIRED,
      })
      .optional(),
    email: z
      .string({
        invalid_type_error: VALIDATION_MESSAGES.EMAIL_INVALID_TYPE,
        required_error: VALIDATION_MESSAGES.EMAIL_REQUIRED,
      })
      .email(VALIDATION_MESSAGES.EMAIL_FORMAT)
      .optional(),
    description: z
      .string({
        invalid_type_error: VALIDATION_MESSAGES.DESCRIPTION_INVALID_TYPE,
        required_error: VALIDATION_MESSAGES.DESCRIPTION_REQUIRED,
      })
      .optional(),
    isPublic: z.boolean({
      invalid_type_error: VALIDATION_MESSAGES.PUBLICITY_INVALID_TYPE,
      required_error: VALIDATION_MESSAGES.PUBLICITY_REQUIRED,
    }),
  })
  .strict(VALIDATION_MESSAGES.UNKNOWN_KEY)
  .refine(
    (data) =>
      data.isPublic ? data.title && data.email && data.description : true,
    {
      message: 'Required',
      path: ['title', 'email', 'description'],
    }
  );
