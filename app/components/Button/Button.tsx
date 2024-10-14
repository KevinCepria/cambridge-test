import clsx from 'clsx';

import { ButtonProps } from './Button.types';
import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner';

const Button = (props: ButtonProps) => {
  const { children, disabled, loading, type = 'info', className, ...rootProps } = props;

  return (
    <button
      {...rootProps}
      className={clsx(
        'px-5 py-2 text-white rounded-lg text-center relative text overflow-hidden',
        className,
        {
          'bg-blue-500': type === 'info',
          'bg-red-500': type === 'error',
          '!bg-slate-500 opacity-50': disabled,
          'cursor-not-allowed': disabled || loading,
        },
      )}
      disabled={loading || disabled}
    >
      {loading && (
        <div
          className={clsx('absolute inset-0 flex items-center justify-center', {
            'bg-blue-500': type === 'info',
            'bg-red-500': type === 'error',
            '!bg-slate-500': disabled,
          })}
        >
          <LoadingSpinner />
        </div>
      )}
      {children}
    </button>
  );
};

export default Button;
