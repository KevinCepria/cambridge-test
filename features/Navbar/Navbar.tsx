import Link from 'next/link';
import clsx from 'clsx';
import { useContext } from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { useRouter } from 'next/navigation';
import { ChevronDownIcon } from '@heroicons/react/16/solid';

import { LogoV1 } from '@/icons/logo/LogoV1';
import { UserContext } from '@/contexts/UserContext';
import { UserIcon } from '@/icons/outline';
import { logout } from '@/services/auth';
import { NavbarProps } from '@/features/Navbar/Navbar.types';

export const Navbar = (props: NavbarProps) => {
  const { className } = props;
  const router = useRouter();
  const { user } = useContext(UserContext);

  return (
    <nav
      className={clsx('bg-blue-600 max-sm:px-5 max-sm:py-4 sm:p-5 sticky top-0 z-10', className)}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <LogoV1 className="w-28 text-white" />
        <div className="flex items-center gap-3 text-white font-bold">
          <Link href="/articles" className="max-sm:hidden">
            My Articles
          </Link>
          <Link href="/search" className="max-sm:hidden">
            Search
          </Link>
          <div className="relative">
            <Menu>
              <MenuButton className="max-sm:border-none sm:border-l border-opacity-40 border-white pl-3 flex items-center gap-1">
                <UserIcon className="w-5 h-5 rounded-full border border-white flex-none" />
                <span className="max-sm:text-sm">{user.username}</span>
                <ChevronDownIcon className="w-4" />
              </MenuButton>

              <MenuItems
                transition
                anchor="bottom end"
                className="bg-white w-52 z-20 origin-top-right rounded-sm border p-1 text-sm/6 text-gray-600 transition duration-100 ease-out"
              >
                <div className="border-b sm:hidden">
                  <MenuItem>
                    <Link className="text-left block py-1.5 px-3" href="/articles">
                      My Articles
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link className="text-left block py-1.5 px-3" href="/search">
                      Search
                    </Link>
                  </MenuItem>
                </div>
                <MenuItem>
                  <button
                    className="text-left w-full py-1.5 px-3"
                    onClick={() => {
                      logout();
                      router.push('/');
                    }}
                  >
                    Logout
                  </button>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>
    </nav>
  );
};
