import { SelectHTMLAttributes } from 'react';

export type SelectInputProps = {
  /**
   * Array of select options
   * @required
   */
  options: {
    value: string;
    name: string;
  }[];
} & SelectHTMLAttributes<HTMLSelectElement>;
