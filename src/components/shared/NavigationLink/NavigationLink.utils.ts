import classNames from 'classnames';

const componentStyles = {
  linkClasses:
    'py-1 block font-medium leading-[1.5] text-[18px] transition-all duration-300 relative overflow-hidden',
  afterElement:
    'after:block after:absolute after:h-[2px] after:w-[100%] after:top-0 after:bg-emerald-700 after:transition-all after:duration-300',
  beforeElement:
    'before:block before:absolute before:h-[2px] before:w-[100%] before:bottom-0  before:bg-emerald-700 before:transition-all before:duration-300',
  pseudoElementsPosition: 'after:left-[-100%] before:right-[-100%]',
  hover: 'hover:text-emerald-700 hover:before:right-0 hover:after:left-0',
  active: 'text-emerald-700 before:right-0 before:left-0 after:right-0 after:left-0',
};

const { active, afterElement, beforeElement, hover, linkClasses, pseudoElementsPosition } =
  componentStyles;

export const activeComponentClasses = classNames(
  'cursor-default',
  linkClasses,
  afterElement,
  beforeElement,
  active,
);

export const componentClasses = classNames(
  linkClasses,
  hover,
  pseudoElementsPosition,
  afterElement,
  beforeElement,
);
