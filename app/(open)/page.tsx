'use client';

import { useRouter } from 'next/navigation';
import { useForm, Controller } from 'react-hook-form';

import { LogoV1 } from '@/icons/logo/LogoV1';
// import { login } from '../utils/auth';
import { LoginType } from '@/types/Login';
import { TextInput } from '@/components/TextInput';
import { PasswordInput } from '@/components/PasswordInput';
import { Button } from '@/components/Button';

const LoginPage = () => {
  const router = useRouter();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: '',
      password: '',
    } as LoginType,
  });

  const onSubmit = (data: LoginType) => console.log('ssss', data);

  return (
    <div className="h-screen flex items-center justify-center" onSubmit={handleSubmit(onSubmit)}>
      <div className="-mt-20 max-w-md w-full">
        <div className="flex justify-center">
          <LogoV1 className="text-blue-500 h-20 w-72 mb-10" />
        </div>

        <form className="border border-gray-400 border-opacity-50 rounded-lg p-10 space-y-5">
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
              />
            )}
          />
          <Button type="submit" className="w-full font-bold">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
