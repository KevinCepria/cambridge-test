import { noop } from 'lodash';
import { clsx } from 'clsx';
import { Dialog, DialogPanel, DialogBackdrop } from '@headlessui/react';

import { ModalProps } from './Modal.types';

export const Modal = (props: ModalProps) => {
  const { onClose = noop, open, size = 'md', children } = props;

  return (
    <Dialog open={open} onClose={onClose} className="relative z-50">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-black/30 duration-300 ease-out data-[closed]:opacity-0"
      />
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <DialogPanel
          transition
          className={clsx(
            'w-full space-y-4 bg-white p-5 duration-300 ease-out data-[closed]:scale-95 data-[closed]:opacity-0 rounded-lg',
            { 'max-w-sm': size === 'sm', 'max-w-md': size === 'md', 'max-w-lg': size === 'lg' },
          )}
        >
          {children}
        </DialogPanel>
      </div>
    </Dialog>
  );
};
