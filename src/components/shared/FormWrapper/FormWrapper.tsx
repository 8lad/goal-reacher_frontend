import classNames from 'classnames';

interface FormWrapperProps {
  onSubmit: VoidFunction;
  children: React.ReactNode;
  className?: string;
}

export const FormWrapper: React.FC<FormWrapperProps> = ({ onSubmit, children, className }) => {
  const formClasses = classNames(
    'overflow-hidden border-2 border-slate-500 p-[20px] rounded-[12px]',
    className,
  );
  return (
    <form className={formClasses} onSubmit={onSubmit}>
      {children}
    </form>
  );
};
