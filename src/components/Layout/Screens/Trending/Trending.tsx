'use client'

import { FC } from 'react'

import { Layout } from '@/components/Layout/Layout'
import { Catalog } from '../Home/Catalog/Catalog'

import { videoApi } from '@/store/video/video.api'

export const Tranding: FC = () => {
	const { data: videos } = videoApi.useGetAllVideosQuery(null)
	const popularVideos = videos?.slice().sort((a, b) => b.views - a.views)

	return (
		// <Layout title='Тренды' description='Tranding'>
			<Catalog videos={popularVideos} />
		// </Layout>
	)
}
