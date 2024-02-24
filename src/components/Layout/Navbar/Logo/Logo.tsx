'use client'

import { FC } from 'react'
import Link from 'next/link'

import styles from './Logo.module.scss'

export const Logo: FC = () => {
	return (
		<Link title={'Главная'} href={'/'}>
			<div className={styles.logo}>Rutube 2.0</div>
		</Link>
	)
}
