import { z } from 'zod';

export const createStationValidationSchema = z
  .object({
    title: z.string().optional(),
    email: z.string().email().optional(),
    description: z.string().optional(),
    isPublic: z.boolean(),
  })
  .strict()
  .refine(
    (data) =>
      data.isPublic ? data.title && data.email && data.description : true,
    {
      message: 'Required',
      path: ['title', 'email', 'description'],
    }
  );
