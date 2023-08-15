import { z } from 'zod';

export const quizCreationSchema = z.object({
  topic: z
    .string()
    .min(4, {
      message: 'Topic must be at least 4 characters long',
    })
    .max(50),
  type: z.enum(['mcq', 'open_ended']),
  //prevent amount to be string

  amount: z
    .number({
      invalid_type_error: 'Amount must be a number',
    })
    .min(1)
    .max(10, {
      message: 'Amount must be between 1 and 10',
    }),
});
