import classNames from 'classnames';

interface IconWrapperProps {
  icon: React.ReactNode;
  className?: string;
}

export const IconWrapper: React.FC<IconWrapperProps> = ({ icon, className }) => {
  const iconClasses = classNames(className);

  return <div className={iconClasses}> {icon} </div>;
};
