'use client';

import '@/styles/global.css';
import { useAuth } from '@/hooks/useAuth';
import { UserProvider } from '@/contexts/UserContext';
import { Navbar } from '@/features/Navbar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { authenticated } = useAuth();

  return (
    <html lang="en">
      <body className="antialiased overflow-y-scroll">
        {authenticated ? (
          <UserProvider>
            <Navbar className="sm:mb-10 mb-5" />
            <div className="px-5">
              <main className="max-w-7xl mx-auto">{children}</main>
            </div>
          </UserProvider>
        ) : null}
      </body>
    </html>
  );
}
