import classNames from 'classnames';

interface LoaderProps {
  className?: string;
}

export const Loader: React.FC<LoaderProps> = ({ className }) => {
  return <div className={classNames('loader', className)} />;
};
