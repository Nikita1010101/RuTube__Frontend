'use client'

import { FC } from 'react'
import styles from './SearchResults.module.scss'

import { Catalog } from '../Home/Catalog/Catalog'

import { useTypedSelector } from '@/hooks/useTypedSelector'
import { videoApi } from '@/store/api/video.api'

export const SearchResults: FC = () => {
	const { searchValue } = useTypedSelector(state => state.search)
	const { data: foundVideos } = videoApi.useGetAllVideosQuery(searchValue)

	return (
		<div>
			{foundVideos?.length !== 0 ? (
				<Catalog videos={foundVideos} />
			) : (
				<div className={styles.notFound}>
					{'По запросу: "{searchValue}" ничего не найденно!'}
				</div>
			)}
		</div>
	)
}
