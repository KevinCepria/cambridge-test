import { ArticleProps } from '@/features/Article/Article.types';

export const Article = (props: ArticleProps) => {
  const { article } = props;
  const { title, body } = article;

  return (
    <div className="border border-gray-400 border-opacity-50 rounded-lg p-5 shadow-sm">
      <h2 className="font-bold text-lg text-gray-800 mb-5">{title}</h2>
      <p className="text-lg text-gray-700">{body}</p>
    </div>
  );
};
