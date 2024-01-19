'use client'

import { FC } from 'react'
import styles from './Not-auth.module.scss'

import { Layout } from '../../Layout'

import { useRouter } from 'next/router'

export const NotAuth: FC = () => {
	const { replace } = useRouter()

	setTimeout(() => {
		replace('/')
	}, 3000)

	return (
		// <Layout title='Страница не найдена' description='Страница не найдена'>
			<h1 className={styles.title}>Такой страницы не найденно!</h1>
		// </Layout>
	)
}
