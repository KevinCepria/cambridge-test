import { useForm, Controller } from 'react-hook-form';
import { useContext, useEffect } from 'react';

import { Modal } from '@/components/Modal';
import { ArticleEditFormModalProps } from '@/features/ArticleEditFormModal/ArticleEditFormModal.types';
import { TextInput } from '@/components/TextInput';
import { TextArea } from '@/components/TextArea';
import { Button } from '@/components/Button';
import { ArticleType } from '@/types/Article';
import { UserContext } from '@/contexts/UserContext';
import { createArticle } from '@/services/api';

export const ArticleEditFormModal = (props: ArticleEditFormModalProps) => {
  const { article, open, onClose, onEditSuccess } = props;
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting, isDirty },
  } = useForm({
    defaultValues: {
      title: article?.title || '',
      body: article?.body || '',
    },
    shouldUnregister: true,
  });

  const { user } = useContext(UserContext);

  const onSubmit = async (data: Pick<ArticleType, 'title' | 'body'>) => {
    const articleData = await createArticle({
      title: data.title,
      body: data.body,
      userId: user.id,
    });

    onEditSuccess?.(articleData);
    onClose?.();
  };

  useEffect(() => {
    if (open) {
      reset({ title: article?.title, body: article?.body });
    }
  }, [open]);

  return (
    <Modal open={open} onClose={onClose}>
      <h2 className="text-lg mb-5 text-gray-600 font-bold text-center">Edit Modal</h2>
      <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="title"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextInput
              {...field}
              placeholder="Title"
              className="w-full"
              error={errors.title && 'This field is required'}
              disabled={isSubmitting}
            />
          )}
        />

        <div>
          <Controller
            name="body"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextArea
                {...field}
                rows={5}
                className="w-full"
                placeholder="Content..."
                error={errors.body && 'This field is required'}
                disabled={isSubmitting}
              />
            )}
          />
        </div>
        <div className="flex justify-end gap-3">
          <Button type="button" onClick={onClose} variant="neutral" disabled={isSubmitting}>
            Cancel
          </Button>
          <Button type="submit" loading={isSubmitting} disabled={!isDirty}>
            Submit
          </Button>
        </div>
      </form>
    </Modal>
  );
};

ArticleEditFormModal.displayName = 'ArticleEditFormModal';
