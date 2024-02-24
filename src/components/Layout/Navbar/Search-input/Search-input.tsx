'use client'

import { FC, useState } from 'react'
import styles from './Search-input.module.scss'

import { BsSearch } from 'react-icons/bs'

// import { useActions } from '@/hooks/useActions'
// import { useDebounce } from '@/hooks/useDebounce'

export const SearchInput: FC = () => {
  // const { changeSearchValue } = useActions()
  const [inputValue, setInputValue] = useState<string>('')
  // const debounce = useDebounce(inputValue, 200)

  // useEffect(() => {
    // changeSearchValue(inputValue)
  // }, [debounce, inputValue, changeSearchValue])

  return (
    <div className={styles.search}>
      <input
        onChange={(event) => setInputValue(event.target.value)}
        value={inputValue}
        type="text"
        placeholder="Поиск видео..."
      />
      <BsSearch className={styles.searchIcon} />
    </div>
  )
}
