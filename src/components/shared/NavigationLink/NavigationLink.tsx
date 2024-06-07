import Link from 'next/link';
import classNames from 'classnames';

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
  const linkClasses =
    'py-1 block font-medium leading-[1.5] text-[18px] transition-all duration-300 relative overflow-hidden';
  const afterElement =
    'after:block after:absolute after:h-[2px] after:w-[100%] after:top-0 after:bg-emerald-700 after:transition-all after:duration-300';
  const beforeElement =
    'before:block before:absolute before:h-[2px] before:w-[100%] before:bottom-0  before:bg-emerald-700 before:transition-all before:duration-300';
  const pseudoElementsPosition = 'after:left-[-100%] before:right-[-100%]';
  const hover = 'hover:text-emerald-700 hover:before:right-0 hover:after:left-0';
  const active = 'text-emerald-700 before:right-0 before:left-0 after:right-0 after:left-0';
  return (
    <li className={classNames(className)}>
      {isActive ? (
        <span
          className={classNames('cursor-default', linkClasses, afterElement, beforeElement, active)}
        >
          {text}
        </span>
      ) : (
        <Link
          href={path}
          className={classNames(
            linkClasses,
            hover,
            pseudoElementsPosition,
            afterElement,
            beforeElement,
          )}
        >
          {text}
        </Link>
      )}
    </li>
  );
};
