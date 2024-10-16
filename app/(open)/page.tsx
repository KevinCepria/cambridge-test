'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Field, Input } from '@headlessui/react';
import { LogoV1 } from '@/icons/logo/LogoV1';
// import { login } from '../utils/auth';

import { TextInput } from '@/components/TextInput';
import { PasswordInput } from '@/components/PasswordInput';

import { Button } from '@/components/Button';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  //   const handleSubmit = (e: React.FormEvent) => {
  //     e.preventDefault();
  //     if (login(username, password)) {
  //       router.push('/articles');
  //     } else {
  //       alert('Invalid login');
  //     }
  //   };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="-mt-20 max-w-md w-full">
        <div className="flex justify-center">
          <LogoV1 className="text-blue-500 h-20 w-72 mb-10" />
        </div>

        <form className="border border-gray-400 border-opacity-50 rounded-lg p-10 space-y-5">
          <h1 className="text-3xl font-bold uppercase mb-10 text-center">Sign in</h1>
          <TextInput
            type="text"
            //   value={username}
            //   onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="w-full"
          />
          <PasswordInput
            type="password"
            //   value={password}
            //   onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full"
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
