import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { usePosts } from '../../../hooks/usePosts';
import BaseModal from './BaseModal';
import { FormInput, FormTextArea, StyledSelect } from '../forms';
import { POST_CATEGORIES } from '../../../utils/constants';
import { HourglassLoader } from '../common';
import type { Database } from '../../../types/supabase';

type BlogPost = Database['public']['Tables']['blog_posts']['Row'];

interface EditPostModalProps {
  isOpen: boolean;
  onClose: () => void;
  post: BlogPost | null;
}

const schema = z.object({
  title: z.string()
    .min(1, 'Title is required')
    .max(100, 'Title must be less than 100 characters'),
  content: z.string()
    .min(1, 'Content is required'),
  excerpt: z.string()
    .min(1, 'Excerpt is required')
    .max(500, 'Excerpt must be less than 500 characters'),
  image: z.string()
    .url('Must be a valid URL')
    .optional()
    .nullable(),
  category: z.string()
    .min(1, 'Category is required'),
  read_time: z.number()
    .min(1, 'Reading time must be at least 1 minute')
    .max(60, 'Reading time must be less than 60 minutes'),
  published: z.boolean().default(false),
});

type FormData = z.infer<typeof schema>;

const EditPostModal = ({ isOpen, onClose, post }: EditPostModalProps) => {
  const { updatePost } = usePosts();
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    if (post) {
      reset({
        title: post.title,
        content: post.content,
        excerpt: post.excerpt,
        image: post.image,
        category: post.category,
        read_time: post.read_time,
        published: post.published,
      });
    }
  }, [post, reset]);

  const onSubmit = async (data: FormData) => {
    if (!post) return;

    try {
      await updatePost.mutateAsync({
        id: post.id,
        ...data,
      });
      onClose();
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  if (!post) return null;

  return (
    <BaseModal isOpen={isOpen} onClose={onClose} title="Edit Post">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <FormInput
          label="Title"
          required
          registration={register('title')}
          error={errors.title?.message}
        />

        <FormTextArea
          label="Content"
          required
          rows={8}
          registration={register('content')}
          error={errors.content?.message}
        />

        <FormTextArea
          label="Excerpt"
          required
          rows={3}
          registration={register('excerpt')}
          error={errors.excerpt?.message}
        />

        <FormInput
          label="Featured Image URL"
          type="url"
          registration={register('image')}
          error={errors.image?.message}
        />

        <div className="grid grid-cols-2 gap-4">
          <StyledSelect
            label="Category"
            required
            options={POST_CATEGORIES}
            placeholder="Select a category"
            registration={register('category')}
            error={errors.category?.message}
          />

          <FormInput
            label="Reading Time (minutes)"
            type="number"
            required
            registration={register('read_time', { valueAsNumber: true })}
            error={errors.read_time?.message}
          />
        </div>

        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            id="published"
            {...register('published')}
            className="w-4 h-4 rounded border-gray-600 bg-gray-700 text-purple-500 focus:ring-purple-500"
          />
          <label htmlFor="published" className="text-sm text-gray-300">
            Published
          </label>
        </div>

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
            disabled={isSubmitting}
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50 flex items-center space-x-2"
          >
            {isSubmitting ? (
              <>
                <HourglassLoader size="sm" />
                <span>Saving...</span>
              </>
            ) : (
              <span>Save Changes</span>
            )}
          </button>
        </div>
      </form>
    </BaseModal>
  );
};

export default EditPostModal;