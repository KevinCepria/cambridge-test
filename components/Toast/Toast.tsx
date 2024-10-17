import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import clsx from 'clsx';

import { ToastProps } from '@/components/Toast/Toast.types';

export const Toast = (props: ToastProps) => {
  const { onHide, show, message, variant = 'info' } = props;
  useEffect(() => {
    if (show) {
      setTimeout(() => onHide(), 4000);
    }
  }, [show, onHide]);

  if (!show) return null;

  return createPortal(
    <span
      className={clsx('text-white py-3 px-5 fixed bottom-10 right-10 z-20  max-w-xs rounded-lg', {
        'bg-green-500 border border-green-700': variant === 'success',
        'bg-blue-500': variant === 'info',
        'bg-red-500': variant === 'error',
        'bg-gray-500': variant === 'neutral',
      })}
    >
      {message}
    </span>,
    document.body,
  );
};

Toast.displayName = 'Toast';
