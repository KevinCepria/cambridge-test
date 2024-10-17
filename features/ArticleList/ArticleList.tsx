import { Article } from 'features/Article/Article';
import { ArticleListProps } from '@/features/ArticleList/ArticleList.types';

export const ArticleList = (props: ArticleListProps) => {
  const { articles } = props;

  return (
    <div className="grid gap-5 sm:grid-cols-[repeat(auto-fit,_minmax(350px,_1fr)) grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] mb-10">
      {articles.map((article) => (
        <Article article={article} key={article.id} />
      ))}
    </div>
  );
};

ArticleList.displayName = 'ArticleList';
