import clsx from 'clsx';
import { useState } from 'react';

import { PasswordInputProps } from '@/components/PasswordInput/PasswordInput.types';
import { ShowPasswordIcon, HideViewIconIcon } from '@/icons/outline';

export const PasswordInput = (props: PasswordInputProps) => {
  const { children, error, disabled, className, ...rootProps } = props;
  const [showPassword, setShowPassword] = useState(false);

  const inputType = showPassword ? 'text' : 'password';
  const Icon = showPassword ? ShowPasswordIcon : HideViewIconIcon;

  return (
    <div>
      <div
        className={clsx(
          'flex items-center justify-start rounded-md border focus-within:outline',

          !disabled && {
            'focus-within:outline-blue-500': !error,
            'border-red-500 focus-within:outline-red-500': error,
          },
        )}
      >
        <input
          {...rootProps}
          className={clsx(
            'text-gray-700 rounded-md relative text overflow-hidden py-1.5 px-2.5 border-none focus:outline-none truncate disabled:cursor-not-allowed',
            className,
          )}
          type={inputType}
          disabled={true}
        />
        <button
          className="disabled:cursor-not-allowed outline-none px-2"
          onClick={() => setShowPassword(!showPassword)}
          disabled={true}
          type="button"
        >
          <Icon className="w-5 h-5 text-gray-700" />
        </button>
      </div>

      {error && <div className="text-red-500 text-sm mt-1 px-1.5">{error}</div>}
    </div>
  );
};
