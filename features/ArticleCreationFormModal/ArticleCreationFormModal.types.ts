import { ArticleType } from 'types/Article';
import { ModalProps } from '@/components/Modal/Modal.types';

export type ArticleCreationFormModalProps = {
  /**
   * Callback that will run upon successful submission of the form
   * @default undefined
   */
  onCreationSuccess?: (article: ArticleType) => void;
} & Pick<ModalProps, 'open' | 'onClose'>;
