import { ArticleProps } from 'features/Article/Article.tyes';

export const Article = (props: ArticleProps) => {
  const { article } = props;
  const { title, body } = article;

  return (
    <div className="border border-gray-400 p-5 shadow-md">
      <h2 className="font-bold text-lg text-gray-800 mb-10">{title}</h2>
      <p className="text-lg text-gray-700">{body}</p>
    </div>
  );
};
