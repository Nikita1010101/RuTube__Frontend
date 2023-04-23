import { FC } from 'react'

import Layout from '@/components/Layout/Layout'
import Catalog from '../Home/Catalog/Catalog'
import Discover from './Discover/Discover'
import { IHome } from './Home.interface'

import { useApi } from '@/hooks/useApi'

const Home: FC<IHome> = ({ popularVideo, randomVideo }) => {
	const { videos } = useApi.getAllVideos()
	const randomVideos = videos
		?.slice()
		.sort(() => (Math.random() < 0.5 ? 1 : -1))
	return (
		<Layout title='Главная' description='Home'>
			<header>
				<Discover
					videos={videos}
					popularVideo={popularVideo}
					randomVideo={randomVideo}
				/>
				<Catalog videos={randomVideos} />
			</header>
		</Layout>
	)
}

export default Home
