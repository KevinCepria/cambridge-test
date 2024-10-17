import clsx from 'clsx';
import { useState, forwardRef } from 'react';

import { PasswordInputProps } from '@/components/PasswordInput/PasswordInput.types';
import { ShowPasswordIcon, HideViewIconIcon } from '@/icons/outline';

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  (props: PasswordInputProps, ref) => {
    const { children, error, disabled, className, ...rootProps } = props;
    const [showPassword, setShowPassword] = useState(false);

    const inputType = showPassword ? 'text' : 'password';
    const Icon = showPassword ? HideViewIconIcon : ShowPasswordIcon;

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
            disabled={disabled}
            ref={ref}
          />
          <button
            className="disabled:cursor-not-allowed outline-none px-2"
            onClick={() => setShowPassword(!showPassword)}
            disabled={disabled}
            type="button"
          >
            <Icon className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {error && <div className="text-red-500 text-sm mt-1 px-1.5">{error}</div>}
      </div>
    );
  },
);
