import Link from 'next/link';
import { useContext } from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { useRouter } from 'next/navigation';
import { ChevronDownIcon } from '@heroicons/react/16/solid';

import { LogoV1 } from '@/icons/logo/LogoV1';
import { UserContext } from '@/contexts/UserContext';
import { UserIcon } from '@/icons/outline';
import { logout } from '@/services/auth';

export const Navbar = () => {
  const router = useRouter();
  const { user } = useContext(UserContext);

  return (
    <nav className="bg-blue-600 p-5 mb-10 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <LogoV1 className="w-28 text-white" />
        <div className="flex items-center gap-3 text-white font-bold">
          <Link href="/articles">My Articles</Link>
          <Link href="/search">Search</Link>
          <div className="relative">
            <Menu>
              <MenuButton className="border-l border-white pl-2 flex items-center gap-1">
                <UserIcon className="w-5 h-5 rounded-full border border-white flex-none" />
                <span>{user.username}</span>
                <ChevronDownIcon className="w-4" />
              </MenuButton>

              <MenuItems
                transition
                anchor="bottom end"
                className="bg-white w-52 z-20 origin-top-right rounded-sm border p-1 text-sm/6 text-gray-600 transition duration-100 ease-out"
              >
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
