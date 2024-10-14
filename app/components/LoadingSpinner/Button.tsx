import clsx from 'clsx';

import { ButtonProps } from './Button.tyes';

const Button = (props: ButtonProps) => {
  const { children, disabled, loading, type = 'info', className } = props;

  return (
    <button
      className={clsx('px-5 py-2 text-white rounded-lg', className, {
        'bg-blue-500': type === 'info',
        'bg-red-500': type === 'error',
      })}
      disabled={loading && disabled}
    >
      {children}
    </button>
  );
};

export default Button;
