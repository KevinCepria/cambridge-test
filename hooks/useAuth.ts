import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { isAuthenticated } from '@/services/auth';

export const useAuth = (invert: boolean = false) => {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    setAuthenticated(isAuthenticated());
  }, []);

  useEffect(() => {
    if (!invert && authenticated === false) {
      router.push('/');
    } else if (invert && authenticated) {
      router.push('/articles');
    }
  }, [authenticated]);

  return {
    authenticated,
  };
};
