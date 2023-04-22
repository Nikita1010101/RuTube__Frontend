import React, { FC } from 'react'
import styles from './Sidebar.module.scss'

import SidebarItem from './Sidebar-item/SidebarItem'
import Subscription from './Subscription/Subscription'

import { publicRoutes, privateRoutes } from './Sidebar.data'

import { useApi } from '@/hooks/useApi'
import { useAuth } from '@/hooks/useAuth'

const Sidebar: FC = () => {
	const { profile } = useAuth()
	const { videos } = useApi.GetAllVideos()

	const videoSubscriptions = videos?.filter(video =>
		profile?.subscriptions.includes(video.userId)
	)

	return (
		<div className={styles.sidebar}>
			<h3>Меню</h3>
			{(profile ? privateRoutes : publicRoutes).map(item => (
				<SidebarItem key={item.id} {...item} />
			))}
			<hr />
			<h2>{profile && 'Мои подписки'}</h2>
			{videoSubscriptions?.map(video => (
				<Subscription key={video.id} {...video} />
			))}
			<h4>© RUTUBE 2.0 Никиты Тимофеева</h4>
		</div>
	)
}

export default Sidebar
