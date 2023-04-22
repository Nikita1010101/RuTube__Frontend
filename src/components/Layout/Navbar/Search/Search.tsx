import React, { FC } from 'react'
import styles from './Search.module.scss'

import { BsSearch } from 'react-icons/bs'

const Search: FC = () => {
	return (
		<div className={styles.search}>
			<input type='text' placeholder='Поиск видео...' />
			<BsSearch className={styles.searchIcon} />
		</div>
	)
}

export default Search
