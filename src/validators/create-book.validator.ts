import { zValidator } from '@hono/zod-validator';
import { z } from 'zod';

export const createBookSchema = z
  .strictObject({
    title: z.string().min(1, 'Title is required'),
    author: z.string().min(1, 'Author is required'),
    publishedDate: z.coerce.date(),
  });

export const createBookValidator = zValidator(
  'json',
  createBookSchema,
  (result, c) => {
    if (!result.success) {
      return c.json(
        {
          errors: result.error.issues.map((issue) => issue.message),
        },
        400
      );
    }
  }
);
