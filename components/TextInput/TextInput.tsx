import clsx from 'clsx';

import { TextInputProps } from '@/components/TextInput/Textinput.types';
import { LoadingSpinner } from '../LoadingSpinner';

export const TextInput = (props: TextInputProps) => {
  const { children, error, disabled, className, ...rootProps } = props;

  return (
    <div>
      <input
        {...rootProps}
        className={clsx(
          'text-gray-700 rounded-md relative text overflow-hidden p-1.5 border border-gray-400 border-opacity-50',
          className,
          { 'border-red-500': error },
        )}
        type="text"
        disabled={disabled}
      />
      {error && <div className="text-red-500 text-sm mt-2 px-2">{error}</div>}
    </div>
  );
};
