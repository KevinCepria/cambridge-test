import { ArticleType } from 'types/Article';

export type ArticleProps = {
  /**
   * Article data
   * @required
   */
  article: ArticleType;

  /**
   * Callback that will run upon clicking the edit button. If also given will show the edit button
   * @default undefined
   */
  onEdit?: (article: ArticleType) => void;
};
