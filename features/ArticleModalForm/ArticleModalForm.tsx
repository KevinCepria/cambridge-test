import { useForm, Controller } from 'react-hook-form';

import { Modal } from '@/components/Modal';
import { ArticleModalFormProps } from '@/features/ArticleModalForm/ArticleModalForm.types';
import { TextInput } from '@/components/TextInput';
import { TextArea } from '@/components/TextArea';
import { Button } from '@/components/Button';
import { ArticleType } from '@/types/Article';

export const ArticleModalForm = (props: ArticleModalFormProps) => {
  const { article, open, onClose } = props;

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: article || {
      id: 1,
      userId: 1,
      title: '',
      body: '',
    },
    shouldUnregister: true,
  });

  const editMode = !!article;
  const heading = `${editMode ? 'Edit' : 'Create'} Article`;

  const onSubmit = (data: ArticleType) => console.log('ssss', data);

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
              />
            )}
          />
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
