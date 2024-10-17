import { ArticleType } from 'types/Article';

export type SearchArticleListProps = {
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
};
