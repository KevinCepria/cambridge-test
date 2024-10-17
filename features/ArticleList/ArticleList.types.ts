import { ArticleType } from 'types/Article';

export type ArticleListProps = {
  /**
   * Array or articles
   * @required
   */
  articles: ArticleType[];

  /**
   * If true the list will display a loading spinner
   * @required
   */
  loading: boolean;

  /**
   * Callback that will run upon successful submission of the form
   * @default undefined
   */
  onEditSuccess?: (article: ArticleType) => void;
};
