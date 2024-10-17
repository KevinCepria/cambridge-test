import { useState } from 'react';

import { Article } from 'features/Article/Article';
import { ArticleListProps } from '@/features/ArticleList/ArticleList.types';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { ArticleType } from '@/types/Article';
import { Toast } from '@/components/Toast';
import { ArticleEditFormModal } from '@/features/ArticleEditFormModal';

export const ArticleList = (props: ArticleListProps) => {
  const { articles, loading } = props;

  const [articleToEdit, setArticleToEdit] = useState<ArticleType | undefined>(undefined);

  const [showToast, setShowToast] = useState(false);

  const onArticleEdit = (createdArticle: ArticleType) => {
    // setArticles([...articles, createdArticle]);
    setShowToast(true);
  };

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
    <div className="grid gap-x-5 gap-y-14 sm:grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))] grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] mb-10">
      {articles.map((article) => (
        <Article
          article={article}
          key={article.id}
          onEdit={(article) => setArticleToEdit(article)}
        />
      ))}
      <ArticleEditFormModal
        article={articleToEdit}
        open={!!articleToEdit}
        onClose={() => setArticleToEdit(undefined)}
        onEditSuccess={onArticleEdit}
      />
      <Toast
        message="Successfully updated article"
        show={showToast}
        variant="success"
        onHide={() => setShowToast(false)}
      />
    </div>
  );
};

ArticleList.displayName = 'ArticleList';
