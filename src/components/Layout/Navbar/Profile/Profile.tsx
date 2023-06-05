import { FC, useState } from 'react'
import styles from './Profile.module.scss'

import { FaUserAlt } from 'react-icons/fa'

import { RegisterForm } from './Register-form/RegisterForm'

import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'next/router'

export const Profile: FC = () => {
	const [isForm, setIsForm] = useState(false)
	const { profile } = useAuth()
	const { replace } = useRouter()

	const checkUser = (): void => {
		if (profile) replace('/my-channel')
		else setIsForm(prev => (prev = true))
	}

	return (
		<>
			<div className={styles.profile}>
				<FaUserAlt
					onClick={checkUser}
					className={styles.avatar}
					title={profile ? 'Мой канал' : 'Авторизация'}
				/>
			</div>
			<div
				onClick={() => setIsForm(prev => (prev = false))}
				className={`${styles.formWrapper} ${isForm ? styles.active : ''}`}
			>
				<RegisterForm />
			</div>
		</>
	)
}
