import { useForm, Controller } from 'react-hook-form';
import { useContext, useEffect } from 'react';

import { Modal } from '@/components/Modal';
import { ArticleModalFormProps } from '@/features/ArticleModalForm/ArticleModalForm.types';
import { TextInput } from '@/components/TextInput';
import { TextArea } from '@/components/TextArea';
import { Button } from '@/components/Button';
import { ArticleType } from '@/types/Article';
import { UserContext } from '@/contexts/UserContext';
import { createArticle, updateArticle } from '@/services/api';

export const ArticleModalForm = (props: ArticleModalFormProps) => {
  const { article = null, open, onClose, onSubmitSuccess, action = 'create' } = props;
  console.log('ssss', article);
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      title: article?.title || '',
      body: article?.body || '',
    },
    shouldUnregister: true,
  });

  const { user } = useContext(UserContext);
  const editMode = !!article;
  const heading = `${action !== 'create' ? 'Edit' : 'Create'} Article`;

  const onSubmit = async (data: Pick<ArticleType, 'title' | 'body'>) => {
    let articleData;
    if (editMode) {
      articleData = await updateArticle(article.id, {
        title: data.title,
        body: data.body,
        userId: user.id,
      });
    } else {
      articleData = await createArticle({ title: data.title, body: data.body, userId: user.id });
    }

    onSubmitSuccess?.(articleData);
    onClose?.();
  };

  useEffect(() => {
    if (open && editMode) {
      reset({ title: article.title, body: article.body });
    }
  }, [open, editMode]);

  return (
    <Modal open={open} onClose={onClose}>
      <h2 className="text-lg mb-5 text-gray-600 font-bold text-center">{heading}</h2>
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
          <Button type="submit" loading={isSubmitting}>
            Submit
          </Button>
        </div>
      </form>
    </Modal>
  );
};

ArticleModalForm.displayName = 'ArticleModalForm';
