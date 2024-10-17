import { Article } from 'features/Article/Article';

import { ArticleListProps } from '@/features/ArticleList/ArticleList.types';
import { LoadingSpinner } from '@/components/LoadingSpinner';

export const ArticleList = (props: ArticleListProps) => {
  const { articles, loading } = props;

  if (loading) {
    return (
      <div className="h-[40vh] flex items-center justify-center">
        <LoadingSpinner className="w-10 h-10" />
      </div>
    );
  }

  if (!loading && !articles.length) {
    return (
      <div className="h-[40vh] flex items-center justify-center">
        <p className="text-gray-500 text-xl">No matches found</p>
      </div>
    );
  }
  return (
    <div className="grid gap-5 sm:grid-cols-[repeat(auto-fit,_minmax(350px,_1fr)) grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] mb-10">
      {articles.map((article) => (
        <Article article={article} key={article.id} />
      ))}
    </div>
  );
};

ArticleList.displayName = 'ArticleList';
