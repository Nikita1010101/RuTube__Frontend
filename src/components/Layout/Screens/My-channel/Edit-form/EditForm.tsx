import { FC } from 'react'
import styles from './EditForm.module.scss'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'

import { useAuth } from '@/hooks/useAuth'
import { useEditProfile } from '@/hooks/useEditProfile'

const EditForm: FC = () => {
	const { profile } = useAuth()
	const { editProfile, isLoading } = useEditProfile()
	const {
		register: inputRegister,
		handleSubmit,
		formState: { errors }
	} = useForm()
	const onSubmit: SubmitHandler<FieldValues> = ({ fullName, description }) => {
		console.log(fullName, description)
		editProfile(fullName, description)
	}

	return (
		<div onClick={event => event.stopPropagation()} className={styles.editForm}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					defaultValue={profile?.name}
					type='text'
					placeholder='Полное имя'
					className={errors.name && styles.active}
					{...inputRegister('fullName', {
						required: true,
						pattern:
							/^(?=(?:[^А-Я]*[А-Я]){2,}[^А-Я]*$)(?=(?:[^а-я]*[а-я]){2,40}[^а-я]*$)(?=(?:\D*\d){0,10}\D*$).+$/m
					})}
				/>
				<textarea
					defaultValue={profile?.aboutChannel}
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

export default EditForm
