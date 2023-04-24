import { FC, useRef, useState } from 'react'
import styles from './SearchInput.module.scss'

import { BsSearch } from 'react-icons/bs'
import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'

const SearchInput: FC = () => {
	const { searchValue } = useTypedSelector(state => state.search)
	const { changeSearchValue } = useActions()

	return (
		<div className={styles.search}>
			<input
				onChange={event => changeSearchValue(event.target.value)}
				value={searchValue}
				type='text'
				placeholder='Поиск видео...'
			/>
			<BsSearch className={styles.searchIcon} />
		</div>
	)
}

export default SearchInput
