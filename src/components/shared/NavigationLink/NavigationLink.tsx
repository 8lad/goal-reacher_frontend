import Link from 'next/link';
import classNames from 'classnames';
import { activeComponentClasses, componentClasses } from './NavigationLink.utils';

interface NavigationLinkProps {
  text: string;
  path: string;
  isActive: boolean;
  className?: string;
}

export const NavigationLink: React.FC<NavigationLinkProps> = ({
  path,
  className,
  isActive,
  text,
}) => {
  return (
    <li className={classNames(className)}>
      {isActive ? (
        <span className={activeComponentClasses}>{text}</span>
      ) : (
        <Link href={path} className={componentClasses}>
          {text}
        </Link>
      )}
    </li>
  );
};
