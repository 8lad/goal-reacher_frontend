import classNames from 'classnames';
import Link from 'next/link';
import { LINK_STYLES } from './ActionLink.utils';
import { ButtonType } from '@/constants/generalConstants';

interface ActionLinkProps {
  text: string;
  linkType: ButtonType;
  href: string;
  className?: string;
  icon?: React.ReactSVGElement;
  isDisabled?: boolean;
}

export const ActionLink: React.FC<ActionLinkProps> = ({
  text,
  linkType,
  href,
  className,
  icon,
  isDisabled,
}) => {
  const linkClasses = classNames(
    className,
    LINK_STYLES.base,
    LINK_STYLES[linkType],
    isDisabled && LINK_STYLES.disabled,
  );

  if (isDisabled) {
    return (
      <div className={linkClasses}>
        {icon && icon}
        <span>{text}</span>
      </div>
    );
  }

  return (
    <Link href={href} className={linkClasses}>
      {icon && icon}
      <span>{text}</span>
    </Link>
  );
};
