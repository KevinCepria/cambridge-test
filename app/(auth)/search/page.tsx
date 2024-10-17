'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import { SearchArticleList } from '@/features/SearchArticleList';
import { ArticleType } from '@/types/Article';
import { TextInput } from '@/components/TextInput';
import { SelectInput } from '@/components/SelectInput';
import { Button } from '@/components/Button';
import { fetchArticles } from 'services/api';

import { SELECT_OPTIONS_SEARCH, APP_ROUTES } from 'utils/constants';

const SearchPage = () => {
  const [articles, setArticles] = useState<ArticleType[]>([]);
  const [loading, setLoading] = useState(false);

  const [paramKey, setParamKey] = useState('');
  const [paramValue, setParamValue] = useState('');

  const iteratorParamsArr = useSearchParams().entries().toArray();

  const [key, keyValue] = iteratorParamsArr[0] || [];

  const router = useRouter();

  useEffect(() => {
    setParamKey(key || SELECT_OPTIONS_SEARCH[0].value);
    setParamValue(keyValue || '');
    setLoading(true);
    fetchArticles(null, key, keyValue)
      .then((data) => setArticles(data))
      .finally(() => setLoading(false));
  }, [key, keyValue]);

  return (
    <div>
      <h1 className="sm:text-3xl font-bold uppercase sm:mb-10 mb-5 text-xl">Search Articles</h1>
      <div>
        <div className="flex items-stretch justify-end gap-3 mb-5 max-sm:flex-col">
          <TextInput
            placeholder="Search..."
            className="max-sm:w-full"
            onChange={(e) => setParamValue(e.currentTarget.value)}
            value={paramValue}
          />
          <SelectInput
            options={SELECT_OPTIONS_SEARCH}
            value={paramKey}
            onChange={(e) => setParamKey(e.currentTarget.value)}
          />
          <Button
            type="button"
            loading={loading}
            onClick={() =>
              router.push(
                `${APP_ROUTES.searchArticles}${
                  paramKey && paramValue ? `?${paramKey}=${paramValue}` : ''
                }`,
              )
            }
          >
            Search
          </Button>
        </div>
        <SearchArticleList articles={articles} loading={loading} />
      </div>
    </div>
  );
};

export default SearchPage;
