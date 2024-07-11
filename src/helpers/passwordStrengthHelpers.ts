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
      textColor: 'rgb(225 29 72)',
      backgroundColor: 'rgb(225 29 72)',
      score,
    };
  }
  if (score > LOW_PASSWORD_LEVEL && score <= MIDDLE_PASSWORD_LEVEL) {
    return {
      text: 'Medium',
      textColor: 'rgb(202 138 4)',
      backgroundColor: 'rgb(202 138 4)',
      score,
    };
  }
  return {
    text: 'High',
    textColor: 'rgb(22 163 74)',
    backgroundColor: 'rgb(22 163 74)',
    score,
  };
};
