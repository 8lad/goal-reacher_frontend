export const videoCurtainClasses = {
  baseStyles: 'absolute w-full h-full flex justify-center items-center transition-all duration-700',
  topLeft: {
    base: 'top-0 left-0 origin-bottom-left bg-orange-400',
    static: 'rotate-0 opacity-100',
    animated: '-rotate-180 opacity-0',
  },
  topCenter: {
    base: 'bg-orange-400 left-0',
    static: 'top-0',
    animated: 'top-[-100%]',
  },
  topRight: {
    base: 'origin-bottom-right bg-orange-400 top-0 left-0',
    static: 'rotate-0 opacity-100',
    animated: 'rotate-180 opacity-0',
  },
  bottomLeft: {
    base: 'origin-top-left bg-orange-400 top-0 left-0',
    static: 'rotate-0 opacity-100',
    animated: 'rotate-180 opacity-0',
  },
  bottomCenter: {
    base: 'bg-orange-400 left-0',
    static: 'bottom-0',
    animated: 'bottom-[-100%]',
  },
  bottomRight: {
    base: 'origin-top-right bg-orange-400 top-0 left-0',
    static: 'rotate-0 opacity-100',
    animated: '-rotate-180 opacity-0',
  },
};
