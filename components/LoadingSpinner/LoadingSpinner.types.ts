import { HTMLAttributes } from 'react';

export type LoadingSpinnerProps = {
  /**
   * The size of the spinner. The default is the standard button size spinner.
   * @default 24
   */
  size?: number;
} & HTMLAttributes<SVGSVGElement>;
