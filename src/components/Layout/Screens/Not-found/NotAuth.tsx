import React, { FC } from 'react'
import styles from './NotAuth.module.scss'
import { useRouter } from 'next/router'
import Layout from '../../Layout'

const NotAuth: FC = () => {
	const { replace } = useRouter()

	setTimeout(() => {
		replace('/')
	}, 3000)

	return (
		<Layout title='Страница не найдена' description='Страница не найдена'>
			<h1 className={styles.title}>Такой страницы не найденно!</h1>
		</Layout>
	)
}

export default NotAuth
