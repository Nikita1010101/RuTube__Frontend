import { FC } from 'react'
import styles from './SearchResults.module.scss'

import Catalog from '../Home/Catalog/Catalog'

import { useApi } from '@/hooks/useApi'
import { useTypedSelector } from '@/hooks/useTypedSelector'

const SearchResults: FC = () => {
	const { searchValue } = useTypedSelector(state => state.search)
	const { videos } = useApi.getAllVideos()
	const foundVideos = videos?.filter(
		video =>
			video.user.name.toLowerCase().includes(searchValue.toLowerCase()) ||
			video.title.toLowerCase().includes(searchValue.toLowerCase())
	)

	return (
		<div>
			<Catalog videos={foundVideos} />
		</div>
	)
}

export default SearchResults
