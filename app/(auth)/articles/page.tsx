'use client';
import { useEffect, useState } from 'react';

import { ArticleList } from '@/features/ArticleList';
import { ArticleType } from '@/types/Article';
import { PlusIcon } from '@/icons/solid';
import { Button } from '@/components/Button';
import { ArticleModalForm } from '@/features/ArticleModalForm';
import { fetchArticles } from 'services/api';

const ArticlesPage = () => {
  const [articles, setArticles] = useState<ArticleType[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetchArticles().then((data) => setArticles(data));
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold uppercase mb-10">My Articles</h1>
      <div>
        <div className="flex items-stretch justify-end gap-3 mb-5">
          <Button
            onClick={() => setOpen(true)}
            type="button"
            title="Create new article"
            className="!p-4"
          >
            <PlusIcon className="font-bold" />
          </Button>
          <ArticleModalForm open={open} onClose={() => setOpen(false)} />
        </div>
        <ArticleList articles={articles} />
      </div>
    </div>
  );
};

export default ArticlesPage;
