import { ButtonType } from '@/types/generalTypes';
import classNames from 'classnames';

interface ActionButtonProps {
  text: string;
  buttonType: ButtonType;
  className?: string;
  onClick: VoidFunction;
}

export const ActionButton: React.FC<ActionButtonProps> = ({ text, className, onClick }) => {
  return (
    <button className={classNames(className)} onClick={onClick}>
      {text}
    </button>
  );
};
