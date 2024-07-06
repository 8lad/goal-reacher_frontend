'use client';

import classNames from 'classnames';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ActionButton } from '../ActionButton/ActionButton';
import { ButtonType } from '@/constants/generalConstants';
import { TextInput } from '../TextInput/TextInput';
import { FormWrapper } from '../FormWrapper/FormWrapper';
import { PasswordInput } from '../PasswordInput/PasswordInput';

interface SignInFormProps {
  className?: string;
}

interface SigninFormInputs {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const SignInForm: React.FC<SignInFormProps> = ({ className }) => {
  const {
    register,
    handleSubmit,
    reset,
    // formState: { errors, isSubmitting },
  } = useForm<SigninFormInputs>();
  const onSubmit: SubmitHandler<SigninFormInputs> = (data) => {
    console.info(data);
    reset();
  };
  const formClasses = classNames('w-full p-[30px]', className);
  return (
    <FormWrapper className={formClasses} onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        labelClasses="mb-[20px] mx-auto w-2/3"
        placeholder="Name"
        register={{ ...register('name') }}
      />
      <TextInput
        labelClasses="mb-[20px] mx-auto w-2/3"
        placeholder="Email"
        register={{ ...register('email') }}
      />
      <PasswordInput
        labelClasses="mb-[20px] mx-auto w-2/3"
        placeholder="Password"
        register={{ ...register('password') }}
      />
      <PasswordInput
        labelClasses="mb-[20px] mx-auto w-2/3"
        placeholder="Confirm password"
        register={{ ...register('confirmPassword') }}
      />
      <ActionButton
        onClick={() => {}}
        buttonType={ButtonType.PRIMARY}
        type="submit"
        text="Sign in"
        className="mx-auto"
      />
    </FormWrapper>
  );
};
