'use client';
import { useEffect, useState } from 'react';

import { ArticleList } from '@/features/ArticleList';
import { ArticleType } from '@/types/Article';
import { TextInput } from '@/components/TextInput';
import { SelectInput } from '@/components/SelectInput';
import { Button } from '@/components/Button';
import { fetchArticles } from 'services/api';

import { SELECT_OPTIONS_SEARCH } from 'utils/constants';

const SearchPage = () => {
  const [articles, setArticles] = useState<ArticleType[]>([]);

  useEffect(() => {
    fetchArticles().then((data) => setArticles(data));
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold uppercase mb-10">Search Articles</h1>
      <div>
        <form className="flex items-stretch justify-end gap-3 mb-5">
          <TextInput placeholder="Search..." />
          <SelectInput options={SELECT_OPTIONS_SEARCH} defaultValue={'Title'} />
          <Button type="submit">Search</Button>
        </form>
        <ArticleList articles={articles} />
      </div>
    </div>
  );
};

export default SearchPage;
