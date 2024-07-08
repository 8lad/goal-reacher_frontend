import classNames from 'classnames';
import { useState } from 'react';
import { HidePasswordButton } from './components/HidePasswordButton';
import { PasswordStrength } from './components/PasswordStrength';

interface PasswordInputProps {
  placeholder: string;
  register: object;
  inputClasses?: string;
  labelClasses?: string;
  isDisabled?: boolean;
  errorMessage?: string;
  inputValue?: string;
}

export const PasswordInput: React.FC<PasswordInputProps> = ({
  placeholder,
  inputClasses,
  labelClasses,
  register,
  isDisabled,
  errorMessage,
  inputValue,
}) => {
  const [isPassworsVisible, setIsPasswordVisible] = useState(false);
  const labelClassList = classNames('block relative overflow-hidden', labelClasses);
  const inputClassList = classNames(
    'block  bg-white w-full border-2 border-slate-500 focus:border-blue-500 focus:outline-none rounded-[7px] p-[5px] pr-[50px]',
    inputClasses,
  );
  const inputType = isPassworsVisible ? 'text' : 'password';
  const buttonClickHandler = () => setIsPasswordVisible((prevValue) => !prevValue);

  return (
    <label className={labelClassList}>
      <input
        className={inputClassList}
        type={inputType}
        placeholder={placeholder}
        disabled={isDisabled}
        {...register}
      />
      <HidePasswordButton isPassworsVisible={isPassworsVisible} onClick={buttonClickHandler} />
      {inputValue && <PasswordStrength className="mt-2" password={inputValue} />}
      {errorMessage && <p className="w-full mt-1 text-red-600">{errorMessage}</p>}
    </label>
  );
};
