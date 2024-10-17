'use client';

import '@/styles/global.css';
import { useAuth } from '@/hooks/useAuth';
import { isNil } from 'lodash';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { authenticated } = useAuth(true);

  return (
    <html lang="en">
      <body className="antialiased">
        {!authenticated && !isNil(authenticated) ? children : null}
      </body>
    </html>
  );
}
