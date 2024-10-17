import axios, { AxiosResponse } from 'axios';

import { ArticleType } from '@/types/Article';
import { UserType } from '@/types/User';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchArticles = async () => {
  const response: AxiosResponse<ArticleType[]> = await axios.get(`${API_BASE_URL}/posts`);
  return response.data;
};

export const fetchArticle = async (id: number) => {
  const response: AxiosResponse<ArticleType> = await axios.get(`${API_BASE_URL}/posts/${id}`);
  return response.data;
};

export const createArticle = async (data: any) => {
  const response: AxiosResponse<ArticleType> = await axios.post(`${API_BASE_URL}/posts`, data);
  return response.data;
};

export const updateArticle = async (id: number, data: any) => {
  const response: AxiosResponse<ArticleType> = await axios.put(`${API_BASE_URL}/posts/${id}`, data);
  return response.data;
};

export const fetchUsers = async () => {
  const response: AxiosResponse<UserType[]> = await axios.get(`${API_BASE_URL}/users`);
  return response.data;
};
