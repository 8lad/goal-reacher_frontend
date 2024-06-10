import classNames from 'classnames';

interface TextProps {
  children: string;
  className?: string;
}

export const Text: React.FC<TextProps> = ({ children, className }) => {
  return (
    <p className={classNames('text-base sm:text-lg leading-normal sm:leading-relaxed', className)}>
      {children}
    </p>
  );
};
