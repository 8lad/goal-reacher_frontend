'use client';

import classNames from 'classnames';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ActionButton } from '../ActionButton/ActionButton';
import { ButtonType } from '@/constants/generalConstants';
import { TextInput } from '../TextInput/TextInput';
import { FormWrapper } from '../FormWrapper/FormWrapper';
import { PasswordInput } from '../PasswordInput/PasswordInput';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormSchema, formShema } from '@/types/signInTypes';

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
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(formShema),
  });
  const onSubmit: SubmitHandler<SigninFormInputs> = (data: FormSchema) => {
    console.info(data);
    reset();
  };
  const formClasses = classNames('w-full p-[30px]', className);
  const inputStyles = 'mb-[20px] mx-auto w-2/3';

  return (
    <FormWrapper className={formClasses} onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        labelClasses={inputStyles}
        placeholder="Name"
        errorMessage={errors.name?.message}
        register={{ ...register('name') }}
      />
      <TextInput
        labelClasses={inputStyles}
        placeholder="Email"
        errorMessage={errors.email?.message}
        register={{ ...register('email') }}
      />
      <PasswordInput
        labelClasses={inputStyles}
        placeholder="Password"
        errorMessage={errors.password?.message}
        register={{ ...register('password') }}
      />
      <PasswordInput
        labelClasses={inputStyles}
        placeholder="Confirm password"
        errorMessage={errors.confirmPassword?.message}
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
