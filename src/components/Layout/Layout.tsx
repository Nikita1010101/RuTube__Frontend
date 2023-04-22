import Head from 'next/head'
import React, { FC, PropsWithChildren } from 'react'
import Sidebar from './Sidebar/Sidebar'
import Navbar from './Navbar/Navbar'

import { ILayout } from './Layout.interface'
import styles from './Layout.module.scss'

const Layout: FC<PropsWithChildren<ILayout>> = ({
	children,
	title,
	description
}) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name='description' content={description} />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
			</Head>
			<Navbar />
			<main className={styles.home}>
				<Sidebar />
				{children}
			</main>
		</>
	)
}

export default Layout
