import clsx from 'clsx';
import { forwardRef } from 'react';

import { TextAreaProps } from '@/components/TextArea/TextArea.types';

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props: TextAreaProps, ref) => {
    const { error, disabled, className, ...rootProps } = props;

    return (
      <div>
        <textarea
          {...rootProps}
          className={clsx(
            'text-gray-700 rounded-md relative text overflow-hidden py-1.5 px-2.5 border border-gray-400 border-opacity-50 -outline-offset-5 truncate disabled:cursor-not-allowed',
            className,
            {
              'border-red-500 focus:outline-red-500': error,
              'focus:outline-blue-500': !error,
            },
          )}
          disabled={disabled}
          ref={ref}
        />
        {error && <div className="text-red-500 text-sm mt-1 px-1.5">{error}</div>}
      </div>
    );
  },
);

TextArea.displayName = 'TextArea';
