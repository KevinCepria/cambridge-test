import { ArticleProps } from '@/features/Article/Article.types';
import { Button } from '@/components/Button';
import { EditIcon } from '@/icons/outline';

export const Article = (props: ArticleProps) => {
  const { article, onEdit } = props;
  const { title, body } = article;

  return (
    <div className="border border-gray-400 border-opacity-50 rounded-lg p-5 shadow-sm relative">
      <div className="mb-5 flex justify-between gap-5 items-start">
        <h2 className="font-bold text-lg text-gray-800">{title}</h2>
        {onEdit && (
          <Button
            onClick={() => onEdit(article)}
            className="flex !p-2 gap-4 justify-center items-center flex-shrink-0 !bg-transparent"
          >
            <EditIcon className="w-5 h-5 text-blue-500" />
          </Button>
        )}
      </div>
      <p className="text-lg text-gray-700">{body}</p>
    </div>
  );
};
