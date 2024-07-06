import classNames from 'classnames';

interface TextInputProps {
  placeholder: string;
  register: object;
  inputClasses?: string;
  labelClasses?: string;
  isDisabled?: boolean;
}

export const TextInput: React.FC<TextInputProps> = ({
  placeholder,
  inputClasses,
  labelClasses,
  register,
  isDisabled,
}) => {
  const labelClassList = classNames('block overflow-hidden', labelClasses);
  const inputClassList = classNames(
    'w-full bg-white block border-2 border-slate-500 focus:border-blue-500 focus:outline-none rounded-[7px] p-[5px]',
    inputClasses,
  );
  return (
    <label className={labelClassList}>
      <input
        className={inputClassList}
        type="text"
        placeholder={placeholder}
        disabled={isDisabled}
        {...register}
      />
    </label>
  );
};
