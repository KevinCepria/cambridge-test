import axios, { AxiosResponse } from 'axios';

import { ArticleType } from '@/types/Article';
import { UserType } from '@/types/User';

export const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchArticles = async (userId?: number | null, key?: string, keyValue?: string) => {
  let params = {
    userId,
  };

  if (key && keyValue) {
    params = { ...params, [key]: keyValue };
  }
  const response: AxiosResponse<ArticleType[]> = await axios.get(`${API_BASE_URL}/posts`, {
    params,
  });
  return response.data;
};

export const fetchArticle = async (id: number) => {
  const response: AxiosResponse<ArticleType> = await axios.get(`${API_BASE_URL}/posts/${id}`);
  return response.data;
};

export const createArticle = async (data: Omit<ArticleType, 'id'>) => {
  const response: AxiosResponse<ArticleType> = await axios.post(`${API_BASE_URL}/posts`, data);
  return response.data;
};

export const updateArticle = async (id: number, data: Partial<ArticleType>) => {
  const response: AxiosResponse<ArticleType> = await axios.patch(
    `${API_BASE_URL}/posts/${id}`,
    data,
  );
  return response.data;
};

export const fetchUsers = async () => {
  const response: AxiosResponse<UserType[]> = await axios.get(`${API_BASE_URL}/users`);
  return response.data;
};
