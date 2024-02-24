'use client'

import { FC } from 'react'
import cn from 'classnames'
import { SubmitHandler, useForm } from 'react-hook-form'

import { useTypedSelector } from '@/hooks/use-typed-selector'
import { useActions } from '@/hooks/use-actions'

import styles from './Edit-form.module.scss'
import { IEditForm } from './Edit-form.interface'

export const EditForm: FC<IEditForm> = ({ handleCloseModal }) => {
  const isLoading = false
  const { profile } = useTypedSelector((state) => state.auth)
  const { edit } = useActions()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ name: string; description: string }>()
  const onSubmit: SubmitHandler<{ name: string; description: string }> = ({
    name,
    description,
  }): void => {
    edit({ name, description })
    handleCloseModal()
  }

  return (
    <div
      onClick={(event) => event.stopPropagation()}
      className={styles.editForm}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          defaultValue={profile?.name}
          type="text"
          placeholder="Полное имя"
          className={cn({ [styles.active]: errors.name })}
          {...register('name', {
            required: true,
            // pattern:
            //   /^(?=(?:[^A-Z]*[A-Z]){0,}[^A-Z]*$)(?=(?:[^a-z]*[a-z]){0,40}[^a-z]*$)^(?=(?:[^А-Я]*[А-Я]){0,}[^А-Я]*$)(?=(?:[^а-я]*[а-я]){0,40}[^а-я]*$)(?=(?:\D*\d){0,10}\D*$).+$/m,
          })}
        />
        <textarea
          defaultValue={profile?.description}
          rows={30}
          placeholder="Описание канала"
          title="Редактировать"
          {...register('description')}
        ></textarea>
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Загрузка' : 'Редактировать'}
        </button>
      </form>
    </div>
  )
}
