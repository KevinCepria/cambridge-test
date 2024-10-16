import { InputHTMLAttributes } from 'react';

export type TextInputProps = {
  /**
   * Error message. If it has a value it will display the error in red text below the input
   * @default undefined
   */ error?: string;
} & InputHTMLAttributes<HTMLInputElement>;
