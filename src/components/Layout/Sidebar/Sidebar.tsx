import { FC, useState } from 'react'
import styles from './Sidebar.module.scss'

import { TfiMenuAlt } from 'react-icons/tfi'

import SidebarItem from './Sidebar-item/SidebarItem'
import Subscription from './Subscription/Subscription'

import { useApi } from '@/hooks/useApi'
import { useAuth } from '@/hooks/useAuth'

import { publicRoutes, privateRoutes } from './Sidebar.data'

const Sidebar: FC = () => {
	const [isSidebar, setIsSidebar] = useState<Boolean>(false)
	const { profile } = useAuth()
	const { videos } = useApi.getAllVideos()

	const videoSubscriptions = videos?.filter(video =>
		profile?.subscriptions.includes(video.userId)
	)

	return (
		<div className={`${styles.sidebar} ${isSidebar ? styles.active : 0}`}>
			<div className={styles.openBtn}>
				<TfiMenuAlt onClick={() => setIsSidebar(prev => !prev)} />
			</div>
			<h3>Меню</h3>
			<div className={styles.sidebarItems}>
				{(profile ? privateRoutes : publicRoutes).map(item => (
					<SidebarItem key={item.id} {...item} />
				))}
			</div>
			<hr />
			<h2>{profile && 'Мои подписки'}</h2>
			<div className={styles.subscriptions}>
				{videoSubscriptions?.map(video => (
					<Subscription key={video.id} {...video} />
				))}
			</div>
			<h4>© RUTUBE 2.0 Никиты Тимофеева</h4>
		</div>
	)
}

export default Sidebar
