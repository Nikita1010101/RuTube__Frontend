'use client'

import { FC } from 'react'
import cn from 'classnames'
import styles from './EditForm.module.scss'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'

// import { useAuth } from '@/hooks/useAuth'
import { useEditProfile } from '@/hooks/useEditProfile'

export const EditForm: FC = () => {
	// const { profile } = useAuth()
	const { updateProfile, isLoading } = useEditProfile()
	const {
		register: inputRegister,
		handleSubmit,
		formState: { errors }
	} = useForm()
	const onSubmit: SubmitHandler<FieldValues> = ({
		name,
		description
	}): void => {
		// updateProfile(Number(profile?.id), name, description)
	}

	return (
		<div onClick={event => event.stopPropagation()} className={styles.editForm}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					// defaultValue={profile?.name}
					type='text'
					placeholder='Полное имя'
					className={cn({ [styles.active]: errors.name })}
					{...inputRegister('name', {
						required: true,
						pattern:
							/^(?=(?:[^A-Z]*[A-Z]){0,}[^A-Z]*$)(?=(?:[^a-z]*[a-z]){0,40}[^a-z]*$)^(?=(?:[^А-Я]*[А-Я]){0,}[^А-Я]*$)(?=(?:[^а-я]*[а-я]){0,40}[^а-я]*$)(?=(?:\D*\d){0,10}\D*$).+$/m
					})}
				/>
				<textarea
					// defaultValue={profile?.description}
					placeholder='Описание канала'
					{...inputRegister('description')}
				></textarea>
				<button type='submit' disabled={isLoading}>
					{isLoading ? 'Загрузка' : 'Редактировать'}
				</button>
			</form>
		</div>
	)
}
