'use client';
import { useContext, useEffect, useState } from 'react';

import { ArticleList } from '@/features/ArticleList';
import { ArticleType } from '@/types/Article';
import { PlusIcon } from '@/icons/solid';
import { Button } from '@/components/Button';
import { ArticleModalForm } from '@/features/ArticleModalForm';
import { fetchArticles } from 'services/api';
import { UserContext } from '@/contexts/UserContext';
import { Toast } from '@/components/Toast';

const ArticlesPage = () => {
  const [articles, setArticles] = useState<ArticleType[]>([]);
  const [open, setOpen] = useState(false);
  const { user } = useContext(UserContext);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (user.id) fetchArticles(user.id).then((data) => setArticles(data));
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
          <ArticleModalForm
            open={open}
            onClose={() => setOpen(false)}
            onSubmitSuccess={onArticleCreation}
          />
        </div>
        <ArticleList articles={articles} />
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
