import clsx from 'clsx';

import { SelectInputProps } from '@/components/SelectInput/SelectInput.types';

export const SelectInput = (props: SelectInputProps) => {
  const { options, disabled, className, ...rootProps } = props;

  return (
    <select
      {...rootProps}
      disabled={disabled}
      className={clsx(
        'text-gray-700 rounded-md relative text overflow-hidden p-1.5 border border-gray-400 border-opacity-50 -outline-offset-5 truncate disabled:cursor-not-allowed focus:outline-blue-500 bg-white',
        className,
      )}
    >
      {options.map((option) => (
        <option value={option.value}>{option.name}</option>
      ))}
    </select>
  );
};
