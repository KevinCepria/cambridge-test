'use client';
import { ArticleList } from '@/features/ArticleList';
import { ArticleType } from '@/types/Article';
import { useEffect, useState } from 'react';
import { fetchArticles } from 'services/api';

const ArticlesPage = () => {
  const [articles, setArticles] = useState<ArticleType[]>([]);

  useEffect(() => {
    fetchArticles().then((data) => setArticles(data));
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold uppercase mb-10">My Articles</h1>
      <ArticleList articles={articles} />
    </div>
  );
};

export default ArticlesPage;
