import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { isAuthenticated } from '@/services/auth';
import { APP_ROUTES } from '@/utils/constants';

export const useAuth = (invert: boolean = false) => {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    setAuthenticated(isAuthenticated());
  }, []);

  useEffect(() => {
    if (!invert && authenticated === false) {
      router.push(APP_ROUTES.home);
    } else if (invert && authenticated) {
      router.push(APP_ROUTES.myArticles);
    }
  }, [authenticated]);

  return {
    authenticated,
  };
};
