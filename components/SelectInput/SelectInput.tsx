import clsx from 'clsx';
import { forwardRef } from 'react';

import { SelectInputProps } from '@/components/SelectInput/SelectInput.types';

export const SelectInput = forwardRef<HTMLSelectElement, SelectInputProps>(
  (props: SelectInputProps, ref) => {
    const { options, disabled, className, ...rootProps } = props;

    return (
      <select
        {...rootProps}
        disabled={disabled}
        className={clsx(
          'text-gray-700 rounded-md relative text overflow-hidden p-1.5 border border-gray-400 border-opacity-50 -outline-offset-5 truncate disabled:cursor-not-allowed focus:outline-blue-500 bg-white',
          className,
        )}
        ref={ref}
      >
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    );
  },
);

SelectInput.displayName = 'SelectInput';
