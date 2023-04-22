import Link from 'next/link'
import React, { FC } from 'react'
import styles from './Logo.module.scss'

const Logo: FC = () => {
	return (
		<Link title={'Главная'} href={'/'}>
			<div className={styles.logo}>Rutube 2.0</div>
		</Link>
	)
}

export default Logo
