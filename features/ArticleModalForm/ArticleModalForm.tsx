import { Modal } from '@/components/Modal';
import { ArticleModalFormProps } from '@/features/ArticleModalForm/ArticleModalForm.types';
import { TextInput } from '@/components/TextInput';
import { TextArea } from '@/components/TextArea';
import { Button } from '@/components/Button';

export const ArticleModalForm = (props: ArticleModalFormProps) => {
  const { article, open, onClose } = props;

  const editMode = !!article;
  const heading = `${editMode ? 'Edit' : 'Create'} Article`;

  return (
    <Modal open={open} onClose={onClose}>
      <h2 className="text-lg mb-5 text-gray-600 font-bold text-center">{heading}</h2>
      <form className="space-y-5">
        <TextInput placeholder="Title" className="w-full" />
        <div>
          <TextArea rows={5} className="w-full" placeholder="Content..." />
        </div>
        <div className="flex justify-end gap-3">
          <Button type="button" onClick={onClose} variant="neutral">
            Cancel
          </Button>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Modal>
  );
};
