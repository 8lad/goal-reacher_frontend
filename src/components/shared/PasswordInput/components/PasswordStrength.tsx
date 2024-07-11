import {
  getPasswordScore,
  getPasswordStrengthDescription,
  PASSWORD_STRENGTH_SEGMENTS,
} from '@/helpers/passwordStrengthHelpers';
import classNames from 'classnames';

interface PasswordStrengthProps {
  password: string;
  className?: string;
}

export const PasswordStrength: React.FC<PasswordStrengthProps> = ({ password, className }) => {
  const mainBlockClasses = classNames('w-full', className);
  const wrapperClasses = 'grid gap-1 grid-cols-5';
  const sectionClasses = 'h-[4px]';
  const baseSectionBackground = 'rgb(156 163 175)';
  const passwordScore = getPasswordScore(password);
  const passwordStrengthOptions = getPasswordStrengthDescription(passwordScore);

  return (
    <div className={mainBlockClasses}>
      <div className={wrapperClasses}>
        {PASSWORD_STRENGTH_SEGMENTS.map((segment, index) => {
          const sectionBackground =
            index < passwordStrengthOptions.score
              ? passwordStrengthOptions.backgroundColor
              : baseSectionBackground;
          return (
            <div
              key={segment}
              style={{ backgroundColor: sectionBackground }}
              className={sectionClasses}
            />
          );
        })}
      </div>
      <p style={{ color: passwordStrengthOptions.textColor }}>{passwordStrengthOptions.text}</p>
    </div>
  );
};
