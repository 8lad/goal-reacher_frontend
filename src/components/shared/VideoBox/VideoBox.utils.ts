export const videoCurtainClasses = {
  baseStyles:
    'absolute w-full h-full flex justify-center items-center transition-all duration-700 showcase-card-gradient',
  topLeft: {
    base: 'top-0 left-0 origin-bottom-left',
    static: 'rotate-0 opacity-100',
    animated: '-rotate-180 opacity-0',
  },
  topCenter: {
    base: 'left-0',
    static: 'top-0',
    animated: 'top-[-100%]',
  },
  topRight: {
    base: 'origin-bottom-right top-0 left-0',
    static: 'rotate-0 opacity-100',
    animated: 'rotate-180 opacity-0',
  },
  bottomLeft: {
    base: 'origin-top-left top-0 left-0',
    static: 'rotate-0 opacity-100',
    animated: 'rotate-180 opacity-0',
  },
  bottomCenter: {
    base: 'left-0',
    static: 'bottom-0',
    animated: 'bottom-[-100%]',
  },
  bottomRight: {
    base: 'origin-top-right top-0 left-0',
    static: 'rotate-0 opacity-100',
    animated: '-rotate-180 opacity-0',
  },
};
