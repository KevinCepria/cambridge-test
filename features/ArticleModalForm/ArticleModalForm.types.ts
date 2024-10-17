import { ArticleType } from 'types/Article';
import { ModalProps } from '@/components/Modal/Modal.types';

export type ArticleModalFormProps = {
  /**
   * Article data. If this is not given, the modal form can be used to create new Articles.
   * If it's given then the form will be used to update it
   * @default undefined
   */
  article?: ArticleType;

  /**
   * Callback that will run upon successful submission of the form
   * @default undefined
   */
  onSubmitSuccess?: (article: ArticleType) => void;
} & Pick<ModalProps, 'open' | 'onClose'>;
