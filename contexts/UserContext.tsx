import { createContext, PropsWithChildren, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { logout } from '@/services/auth';

import { UserType } from '@/types/User';
import { getUser } from '@/services/auth';
import { APP_ROUTES } from '@/utils/constants';

export type UserContextProps = {
  user: UserType;
};

export const UserContext = createContext<UserContextProps>({} as UserContextProps);

export const UserProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<UserType>({} as UserType);
  const router = useRouter();

  useEffect(() => {
    try {
      setUser(getUser());
    } catch (_e) {
      logout();
      router.push(APP_ROUTES.home);
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
