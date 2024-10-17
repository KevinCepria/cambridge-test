'use client';
import { useContext, useEffect, useState } from 'react';

import { ArticleList } from '@/features/ArticleList';
import { ArticleType } from '@/types/Article';
import { PlusIcon } from '@/icons/solid';
import { Button } from '@/components/Button';
import { fetchArticles } from 'services/api';
import { UserContext } from '@/contexts/UserContext';
import { Toast } from '@/components/Toast';
import { ArticleCreationFormModal } from '@/features/ArticleCreationFormModal';

const ArticlesPage = () => {
  const [articles, setArticles] = useState<ArticleType[]>([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user.id) {
      setLoading(true);
      fetchArticles(user.id)
        .then((data) => setArticles(data))
        .finally(() => setLoading(false));
    }
  }, [user.id]);

  const onArticleCreation = (createdArticle: ArticleType) => {
    setArticles([...articles, createdArticle]);
    setShowToast(true);
  };

  return (
    <div>
      <h1 className="sm:text-3xl font-bold uppercase sm:mb-10 mb-5 text-xl">My Articles</h1>
      <div>
        <div className="flex items-stretch justify-end gap-3 mb-5">
          <Button
            onClick={() => setOpen(true)}
            type="button"
            title="Create new article"
            className="!p-2 sm:!p-4 max-sm:w-full flex items-center gap-2 justify-center"
          >
            <PlusIcon className="font-bold" />
            <span className="sm:hidden">Create Article</span>
          </Button>
          <ArticleCreationFormModal
            open={open}
            onClose={() => setOpen(false)}
            onCreationSuccess={onArticleCreation}
          />
        </div>
        <ArticleList articles={articles} loading={loading} />
      </div>
      <Toast
        message="Successfully created article"
        show={showToast}
        variant={'success'}
        onHide={() => setShowToast(false)}
      />
    </div>
  );
};

export default ArticlesPage;
