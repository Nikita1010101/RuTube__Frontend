import { FC, PropsWithChildren } from 'react'
import Head from 'next/head'
import styles from './Layout.module.scss'

import Navbar from './Navbar/Navbar'
import Sidebar from './Sidebar/Sidebar'
import SearchResults from './Screens/Search-results/SearchResults'
import { ILayout } from './Layout.interface'

import { useTypedSelector } from '@/hooks/useTypedSelector'

const Layout: FC<PropsWithChildren<ILayout>> = ({
	children,
	title,
	description
}) => {
	const { searchValue } = useTypedSelector(state => state.search)
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
				{!searchValue ? <>{children}</> : <SearchResults />}
			</main>
		</>
	)
}

export default Layout
