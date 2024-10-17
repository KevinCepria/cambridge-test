import clsx from 'clsx';
import { forwardRef } from 'react';

import { TextInputProps } from '@/components/TextInput/Textinput.types';

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (props: TextInputProps, ref) => {
    const { children, error, disabled, className, ...rootProps } = props;

    return (
      <div>
        <input
          {...rootProps}
          className={clsx(
            'text-gray-700 rounded-md relative text overflow-hidden py-1.5 px-2.5 border border-gray-400 border-opacity-50 -outline-offset-5 truncate disabled:cursor-not-allowed',
            className,
            {
              'border-red-500 focus:outline-red-500': error,
              'focus:outline-blue-500': !error,
            },
          )}
          type="text"
          disabled={disabled}
          ref={ref}
        />
        {error && <div className="text-red-500 text-sm mt-1 px-1.5">{error}</div>}
      </div>
    );
  },
);
