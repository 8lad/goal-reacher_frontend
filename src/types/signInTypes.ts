import * as z from 'zod';
import { dictionary } from '@/constants/dictionary';

export const formShema = z
  .object({
    name: z
      .string()
      .trim()
      .min(2, dictionary.EN.PAGES.SIGN_IN.FORM.ERROR_MESSAGES.NAME.SHORT_NAME)
      .max(30, dictionary.EN.PAGES.SIGN_IN.FORM.ERROR_MESSAGES.NAME.LONG_NAME),
    email: z
      .string()
      .min(1, dictionary.EN.PAGES.SIGN_IN.FORM.ERROR_MESSAGES.REQUIRED_FIELD)
      .email(dictionary.EN.PAGES.SIGN_IN.FORM.ERROR_MESSAGES.EMAIL.INVALID_EMAIL),
    password: z
      .string({ required_error: dictionary.EN.PAGES.SIGN_IN.FORM.ERROR_MESSAGES.REQUIRED_FIELD })
      .min(8, dictionary.EN.PAGES.SIGN_IN.FORM.ERROR_MESSAGES.PASSWORD.INVALID_PASSWORD),
    confirmPassword: z.string({
      required_error: dictionary.EN.PAGES.SIGN_IN.FORM.ERROR_MESSAGES.REQUIRED_FIELD,
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: dictionary.EN.PAGES.SIGN_IN.FORM.ERROR_MESSAGES.CONFIRM_PASSWORD.INVALID_CONFIRM,
    path: ['confirmPassword'],
  });

export type FormSchema = z.infer<typeof formShema>;

export interface PasswordStrengthDescription {
  text: string;
  textColor: string;
  backgroundColor: string;
  score: number;
}
