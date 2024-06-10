import classNames from 'classnames';
import { BUTTON_STYLES } from './ActionButton.utils';
import { ButtonType } from '@/constants/generalConstants';

interface ActionButtonProps {
  text: string;
  buttonType: ButtonType;
  onClick: VoidFunction;
  className?: string;
  icon?: React.ReactSVGElement;
  isDisabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export const ActionButton: React.FC<ActionButtonProps> = ({
  text,
  buttonType,
  className,
  onClick,
  icon,
  isDisabled,
  type = 'button',
}) => {
  const buttonClasses = classNames(className, BUTTON_STYLES.base, BUTTON_STYLES[buttonType]);

  return (
    <button className={buttonClasses} onClick={onClick} disabled={isDisabled} type={type}>
      {icon && icon}
      <span>{text}</span>
    </button>
  );
};
