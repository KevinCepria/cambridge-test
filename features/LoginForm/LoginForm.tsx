'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm, Controller } from 'react-hook-form';
import clsx from 'clsx';

import { LoginType } from '@/types/Login';
import { TextInput } from '@/components/TextInput';
import { PasswordInput } from '@/components/PasswordInput';
import { Button } from '@/components/Button';
import { login } from '@/services/auth';
import { LoginFormProps } from '@/features/LoginForm/LoginForm.types';
import { APP_ROUTES } from '@/utils/constants';

export const LoginForm = (props: LoginFormProps) => {
  const { className } = props;
  const router = useRouter();
  const [loginError, setloginError] = useState('');

  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      username: '',
      password: '',
    } as LoginType,
  });

  const onSubmit = async (data: LoginType) => {
    try {
      await login(data.username, data.password);
      router.push(APP_ROUTES.myArticles);
    } catch (error: any) {
      setloginError(error.message as string);
    }
  };

  return (
    <form
      className={clsx(
        'border border-gray-400 border-opacity-50 rounded-lg p-10 space-y-5',
        className,
      )}
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-3xl font-bold uppercase mb-10 text-center">Sign in</h1>
      <Controller
        name="username"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <TextInput
            {...field}
            placeholder="Username"
            className="w-full"
            error={errors.username && 'This field is required'}
            disabled={isSubmitting}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <PasswordInput
            {...field}
            placeholder="Password"
            className="w-full"
            error={errors.password && 'This field is required'}
            disabled={isSubmitting}
          />
        )}
      />
      {loginError && <p className="text-red-500 text-sm mt-1 px-1.5">{loginError}</p>}
      <Button type="submit" className="w-full font-bold" loading={isSubmitting}>
        Login
      </Button>
    </form>
  );
};

LoginForm.displayName = 'LoginForm';
