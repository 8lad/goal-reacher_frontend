import * as z from 'zod';

export const formShema = z
  .object({
    name: z
      .string()
      .trim()
      .min(2, 'The name shoul have at least 2 symbols')
      .max(30, "The name can't be longer than 30 symbols"),
    email: z.string().min(1, 'The email field is required').email('Invalid email address'),
    password: z
      .string({ required_error: 'The passwors field is required' })
      .min(8, 'Password must be longer than 8 symbols'),
    confirmPassword: z.string({ required_error: 'This field is required' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords must match',
    path: ['confirmPassword'],
  });

export type FormSchema = z.infer<typeof formShema>;
