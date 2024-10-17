import { LogoV1 } from '@/icons/logo/LogoV1';
import { LoginForm } from '@/features/LoginForm';

export const metadata = {
  title: 'Login',
  description: 'Login page',
};

const LoginPage = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="-mt-20 max-w-md w-full">
        <div className="flex justify-center">
          <LogoV1 className="text-blue-500 h-20 w-72 mb-10" />
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
