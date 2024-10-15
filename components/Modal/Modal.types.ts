import { ReactNode } from 'react';

type ModalSize = 'sm' | 'md' | 'lg';

export type ModalProps = {
  /**
   * Modal content
   * @required
   */
  children: ReactNode;

  /**
   * If `true`, the modal is open
   * @default false
   */
  open?: boolean;

  /**
   * The maximum size of the modal content
   * @default 'md'
   */
  size?: ModalSize;

  /**
   * Callback called when a dismissed action is taken
   * @default undefined
   */
  onClose?: () => void;
};
