import { Modal } from '@/components/Modal';
import { ArticleModalFormProps } from '@/features/ArticleModalForm/ArticleModalForm.types';
import { TextInput } from '@/components/TextInput';
import { Button } from '@/components/Button';

export const ArticleModalForm = (props: ArticleModalFormProps) => {
  const { article, open, onClose } = props;

  const editMode = !!article;

  return (
    <Modal open={open} onClose={onClose}>
      <form></form>
    </Modal>
  );
};
