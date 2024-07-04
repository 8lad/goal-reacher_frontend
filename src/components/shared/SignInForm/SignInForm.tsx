'use client';

import classNames from 'classnames';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ActionButton } from '../ActionButton/ActionButton';
import { ButtonType } from '@/constants/generalConstants';

interface SignInFormProps {
  className?: string;
}

interface SigninFormInputs {
  name: string;
  email: string;
  password: string;
}

export const SignInForm: React.FC<SignInFormProps> = ({ className }) => {
  const { register, handleSubmit, reset } = useForm<SigninFormInputs>();
  const onSubmit: SubmitHandler<SigninFormInputs> = (data) => {
    console.info(data);
    reset();
  };
  const formClasses = classNames('w-full', className);
  return (
    <form className={formClasses} onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register('name')} />
      <input type="email" {...register('email')} />
      <input type="password" {...register('password')} />
      <ActionButton
        onClick={() => {}}
        buttonType={ButtonType.PRIMARY}
        type="submit"
        text="Sign in"
      />
    </form>
  );
};
