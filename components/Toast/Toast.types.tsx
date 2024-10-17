type ToastVariant = 'error' | 'info' | 'neutral' | 'success';

export type ToastProps = {
  /**
   * If `true`, the toast will appear
   * @required @default false
   */
  show: boolean;

  /**
   * Callback called when a dismissed action is taken or when the toast is about to close
   * @default undefined
   */
  onHide: () => void;

  /**
   * Callback called when a dismissed action is taken or when the toast is about to close
   * @required
   */
  message: string;

  /**
   * Toast variant
   * @default 'info'
   */
  variant?: ToastVariant;
};
