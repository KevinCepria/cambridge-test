'use client';
import { useEffect, useState } from 'react';
import { PageProps } from '.next/types/app/(auth)/layout';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

import { SearchArticleList } from '@/features/SearchArticleList';
import { ArticleType } from '@/types/Article';
import { TextInput } from '@/components/TextInput';
import { SelectInput } from '@/components/SelectInput';
import { Button } from '@/components/Button';
import { fetchArticles } from 'services/api';

import { SELECT_OPTIONS_SEARCH, APP_ROUTES } from 'utils/constants';

const SearchPage = (props: PageProps) => {
  const searchParams = props.searchParams as Record<string, string>;
  const [articles, setArticles] = useState<ArticleType[]>([]);
  const [loading, setLoading] = useState(false);

  const paramKeys = Object.keys(searchParams);
  const [paramKey, setParamKey] = useState('');
  const [paramValue, setParamValue] = useState('');

  const router = useRouter();

  useEffect(() => {
    setParamKey(paramKeys[0] || SELECT_OPTIONS_SEARCH[0].value);
    setParamValue(searchParams[paramKeys[0]] || '');
    setLoading(true);
    fetchArticles(null, paramKeys[0], searchParams[paramKeys[0]])
      .then((data) => setArticles(data))
      .finally(() => setLoading(false));
  }, [searchParams]);

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
