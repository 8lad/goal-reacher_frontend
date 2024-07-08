import { PasswordStrengthDescription } from '@/types/signInTypes';

export const PASSWORD_STRENGTH_SEGMENTS = [1, 2, 3, 4, 5];
const SCORE_STEP = 1;
const SCORE_DEFAULT_VALUE = 0;
const MIN_PASSWORD_LENGTH = 8;
const LOW_PASSWORD_LEVEL = 2;
const MIDDLE_PASSWORD_LEVEL = 4;

export const getPasswordScore = (password: string): number => {
  let score = SCORE_DEFAULT_VALUE;

  if (password.length > MIN_PASSWORD_LENGTH) {
    score += SCORE_STEP;
  }

  if (/[a-z]/.test(password)) {
    score += SCORE_STEP;
  }

  if (/[A-Z]/.test(password)) {
    score += SCORE_STEP;
  }

  if (/\d/.test(password)) {
    score += SCORE_STEP;
  }

  if (/[^A-Za-z0-9]/.test(password)) {
    score += SCORE_STEP;
  }

  return score;
};

export const getPasswordStrengthDescription = (score: number): PasswordStrengthDescription => {
  if (score <= LOW_PASSWORD_LEVEL) {
    return {
      text: 'Low',
      textColor: 'text-rose-600',
      backgroundColor: 'bg-rose-600',
      score,
    };
  }
  if (score > LOW_PASSWORD_LEVEL && score <= MIDDLE_PASSWORD_LEVEL) {
    return {
      text: 'Medium',
      textColor: 'text-yellow-600',
      backgroundColor: 'bg-yellow-600',
      score,
    };
  }
  return {
    text: 'High',
    textColor: 'text-green-600',
    backgroundColor: 'bg-green-600',
    score,
  };
};
