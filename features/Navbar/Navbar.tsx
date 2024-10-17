import Link from 'next/link';
import clsx from 'clsx';
import { useContext } from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { useRouter } from 'next/navigation';
import { ChevronDownIcon } from '@heroicons/react/16/solid';

import { LogoV1 } from '@/icons/logo/LogoV1';
import { UserContext } from '@/contexts/UserContext';
import { UserIcon, HamburgerMenuIcon } from '@/icons/outline';
import { logout } from '@/services/auth';
import { NavbarProps } from '@/features/Navbar/Navbar.types';
import { APP_ROUTES, NAV_LINKS } from '@/utils/constants';

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
          {NAV_LINKS.map((link) => (
            <Link href={link.url} className="max-sm:hidden" key={link.name}>
              {link.name}
            </Link>
          ))}

          <div className="relative">
            <Menu>
              <MenuButton className="max-sm:border-none sm:border-l border-opacity-40 border-white pl-3 flex items-center gap-1">
                <UserIcon className="w-5 h-5 rounded-full border border-white flex-none max-sm:hidden" />
                <span className="max-sm:text-sm max-sm:hidden">{user.username}</span>
                <ChevronDownIcon className="w-4 max-sm:hidden" />
                <HamburgerMenuIcon className="sm:hidden w-5" />
              </MenuButton>

              <MenuItems
                transition
                anchor="bottom end"
                className="bg-white w-52 z-20 origin-top-right rounded-sm border p-1 text-sm/6 text-gray-600 transition duration-100 ease-out"
              >
                <div className="border-b sm:hidden">
                  <MenuItem>
                    <div className="flex items-center gap-2.5 py-1.5 px-3">
                      <UserIcon className="w-5 h-5 rounded-full border border-gray-500 flex-none" />
                      <span className="text-sm">{user.username}</span>
                    </div>
                  </MenuItem>
                </div>
                <div className="border-b sm:hidden">
                  {NAV_LINKS.map((link) => (
                    <MenuItem key={link.name}>
                      <Link className="text-left block py-1.5 px-3" href={link.url}>
                        {link.name}
                      </Link>
                    </MenuItem>
                  ))}
                </div>
                <MenuItem>
                  <button
                    className="text-left w-full py-1.5 px-3"
                    onClick={() => {
                      logout();
                      router.push(APP_ROUTES.home);
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
