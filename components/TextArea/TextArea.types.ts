import { TextareaHTMLAttributes } from 'react';

export type TextAreaProps = {
  /**
   * Error message. If it has a value it will display the error in red text below the input
   * @default undefined
   */ error?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;
