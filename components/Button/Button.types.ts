import { ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'error' | 'info' | 'neutral';

export type ButtonProps = {
  /**
   * The variant of the button.
   * @default 'info'
   */
  variant?: ButtonVariant;

  /**
   * If `true`, the button will be disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * If `true`, the button will render a loading spinner hiding the provided content.
   * This property is ignored when `disabled` is true. The loading state also does not allow
   * the button to be interacted with.
   * @default false
   */
  loading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;
