import React, { FC, useState } from 'react'
import styles from './RegisterForm.module.scss'
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'

import { useAuth } from '@/hooks/useAuth'

const RegisterForm: FC = () => {
	const [isRegistration, setIsRegistration] = useState<boolean>(false)
	const { register, login } = useAuth()
	const {
		register: inputRegister,
		handleSubmit,
		formState: { errors }
	} = useForm()
	const onSubmit: SubmitHandler<FieldValues> = ({ name, email, password }) => {
		isRegistration
			? register?.(name, email, password)
			: login?.(email, password)
	}
	return (
		<div
			onClick={event => event.stopPropagation()}
			className={styles.registerForm}
		>
			<h2>{isRegistration ? 'Регистрация' : 'Вход'}</h2>
			<form onSubmit={handleSubmit(onSubmit)}>
				{isRegistration && (
					<input
						type='text'
						placeholder='Имя'
						className={errors.name && styles.active}
						{...inputRegister('name', {
							required: true,
							pattern:
								/^(?=(?:[^A-Z]*[A-Z]){2,}[^A-Z]*$)(?=(?:[^a-z]*[a-z]){2,40}[^a-z]*$)(?=(?:\D*\d){0,10}\D*$).+$/m
						})}
					/>
				)}
				<input
					type='email'
					placeholder='Эл. почта'
					className={(errors.email || errors.password) && styles.active}
					{...inputRegister('email', {
						required: true,
						pattern:
							/^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u
					})}
				/>
				<input
					type='password'
					placeholder='Пароль'
					className={(errors.email || errors.password) && styles.active}
					{...inputRegister('password', {
						required: true,
						pattern:
							/^(?=(?:[^A-Z]*[A-Z]){1,3}[^A-Z]*$)(?=(?:[^a-z]*[a-z]){3,20}[^a-z]*$)(?=(?:\D*\d){1,5}\D*$).+$/m
					})}
				/>
				<button type='submit'>
					{isRegistration ? 'Зарегестрироваться' : 'Войти'}
				</button>
				<span onClick={() => setIsRegistration(prev => !prev)}>
					{!isRegistration ? 'Зарегестрироваться' : 'Войти'}
				</span>
			</form>
		</div>
	)
}

export default RegisterForm
