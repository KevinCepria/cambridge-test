'use client';

import '@/styles/global.css';
import { useAuth } from '@/hooks/useAuth';
import { LogoV1 } from '@/icons/logo/LogoV1';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { authenticated } = useAuth();

  return (
    <html lang="en">
      <body className="antialiased">
        {authenticated ? (
          <>
            <nav className="bg-blue-600 p-5 mb-10 sticky top-0 z-10">
              <div className="max-w-7xl mx-auto">
                <LogoV1 className="w-28 text-white" />
              </div>
            </nav>
            <div className="px-5">
              <main className="max-w-7xl mx-auto">{children}</main>
            </div>
          </>
        ) : null}
      </body>
    </html>
  );
}
