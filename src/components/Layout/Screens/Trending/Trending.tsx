import React, { FC } from 'react'
import { videoApi } from '@/store/api/video.api'

import Layout from '@/components/Layout/Layout'
import Catalog from '../Home/Catalog/Catalog'
import { useApi } from '@/hooks/useApi'

const Tranding: FC = () => {
	const { videos } = useApi.GetAllVideos()
	const popularVideos = videos?.slice().sort((a, b) => b.views - a.views)
	return (
		<Layout title='Тренды' description='Tranding'>
			<Catalog videos={popularVideos} />
		</Layout>
	)
}

export default Tranding
