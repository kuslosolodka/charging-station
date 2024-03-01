import { z } from 'zod';
import { VALIDATION_MESSAGES } from './create-station.validation-messages';

export const createStationValidationSchema = z
  .object({
    title: z
      .string({
        invalid_type_error: VALIDATION_MESSAGES.invalid.TITLE_INVALID_TYPE,
      })
      .optional(),
    email: z
      .string({
        invalid_type_error: VALIDATION_MESSAGES.invalid.EMAIL_INVALID_TYPE,
      })
      .email(VALIDATION_MESSAGES.EMAIL_FORMAT)
      .optional(),
    description: z
      .string({
        invalid_type_error:
          VALIDATION_MESSAGES.invalid.DESCRIPTION_INVALID_TYPE,
      })
      .optional(),
    location: z
      .object(
        {
          coordinates: z.tuple(
            [
              z.number({
                invalid_type_error:
                  VALIDATION_MESSAGES.invalid.LOCATION_COORDINATE_INVALID_TYPE,
                required_error:
                  VALIDATION_MESSAGES.required.LOCATION_COORDINATE_REQUIRED,
              }),
              z.number({
                invalid_type_error:
                  VALIDATION_MESSAGES.invalid.LOCATION_COORDINATE_INVALID_TYPE,
                required_error:
                  VALIDATION_MESSAGES.required.LOCATION_COORDINATE_REQUIRED,
              }),
            ],
            {
              invalid_type_error:
                VALIDATION_MESSAGES.invalid.LOCATION_COORDINATES_INVALID_TYPE,
              required_error:
                VALIDATION_MESSAGES.required.LOCATION_COORDINATES_REQUIRED,
            }
          ),
        },
        {
          invalid_type_error: VALIDATION_MESSAGES.invalid.LOCATION_INVALID_TYPE,
        }
      )
      .optional(),
    isPublic: z.boolean({
      invalid_type_error: VALIDATION_MESSAGES.invalid.PUBLICITY_INVALID_TYPE,
      required_error: VALIDATION_MESSAGES.required.PUBLICITY_REQUIRED,
    }),
  })
  .strict(VALIDATION_MESSAGES.UNKNOWN_KEY)
  .refine((data) => (data.isPublic ? data.title : true), {
    message: VALIDATION_MESSAGES.required.TITLE_REQUIRED,
    path: ['title'],
  })
  .refine((data) => (data.isPublic ? data.email : true), {
    message: VALIDATION_MESSAGES.required.EMAIL_REQUIRED,
    path: ['email'],
  })
  .refine((data) => (data.isPublic ? data.description : true), {
    message: VALIDATION_MESSAGES.required.DESCRIPTION_REQUIRED,
    path: ['description'],
  })
  .refine((data) => (data.isPublic ? data.location : true), {
    message: VALIDATION_MESSAGES.required.LOCATION_REQUIRED,
    path: ['location'],
  });
