import React, { FC } from 'react'
import styles from './MySubscriptions.module.scss'

import Catalog from '../Home/Catalog/Catalog'
import Layout from '../../Layout'

import { useAuth } from '@/hooks/useAuth'
import { useApi } from '@/hooks/useApi'

const MySubscriptions: FC = () => {
	const { profile } = useAuth()
	const { videos } = useApi.getAllVideos()

	const videoSubscriptions = videos?.filter(video =>
		profile?.subscriptions.includes(video.userId)
	)
	return (
		<Layout title='Мои подписки' description='Подписки'>
			<Catalog videos={videoSubscriptions} />
		</Layout>
	)
}

export default MySubscriptions
