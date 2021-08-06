import React from 'react';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';
import SearchIcon from '@heroicons/react/outline/SearchIcon';
import { useDetailViewContext } from '../../DetailView.Context';
import { toast } from 'react-toastify';

interface FormFields {
  search: string;
}

export const DetailViewSearchBar = () => {
  const { changeSearchIP } = useDetailViewContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormFields>({});

  const onSubmit = ({ search }: FormFields) => {
    changeSearchIP(search);
    reset({
      search: ''
    });
  };

  const onError = () => {
    toast.error('Invalid IP or url');
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit(onSubmit, onError)();
    }
  };

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit, onError)}
      className="flex max-w-full w-full"
    >
      <input
        placeholder="XXX.XXX.XXX.XXX or example.com"
        onKeyDown={onKeyDown}
        className={clsx(
          'min-w-0 transition-colors bg-white block outline-none flex-grow px-4 lg:px-8 rounded-tl-2xl text-lg tracking-widest',
          {
            'bg-red-100': errors.search
          }
        )}
        {...register('search', {
          required: true,
          pattern:
            /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)|([a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+)$/
        })}
      />

      <button
        type="submit"
        className="block transition-colors bg-primary-500 focus:bg-primary-600 hover:bg-primary-600 py-4 px-10 rounded-tr-2xl"
      >
        <SearchIcon className="w-6 text-white" />
      </button>
    </form>
  );
};
