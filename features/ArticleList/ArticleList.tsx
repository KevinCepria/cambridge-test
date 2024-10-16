import { Article } from 'features/Article/Article';
import { ArticleListProps } from '@/features/ArticleList/ArticleList.types';

export const ArticleList = (props: ArticleListProps) => {
  const { articles } = props;

  return (
    <div className="grid gap-5 grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))]">
      {articles.map((article) => (
        <Article article={article} />
      ))}
    </div>
  );
};
