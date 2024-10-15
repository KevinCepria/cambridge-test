import { Article } from 'features/Article/Article';
import { ArticleListProps } from 'features/ArticleList/ArticleList.tyes';

export const ArticleList = (props: ArticleListProps) => {
  const { articles } = props;

  return (
    <ul>
      {articles.map((article) => (
        <li>
          <Article article={article} />
        </li>
      ))}
    </ul>
  );
};
