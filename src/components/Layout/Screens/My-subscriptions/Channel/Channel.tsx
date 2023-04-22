import React, { FC } from 'react'
import styles from './Channel.module.scss'

import Layout from '@/components/Layout/Layout'
import Catalog from '../../Home/Catalog/Catalog'
import Avatar from '@/components/UI/Avatar/Avatar'
import SubscribeButton from '@/components/UI/Subscribe-button/SubscribeButton'

import { IChannel } from './Channel.interface'
import { userApi } from '@/store/api/user.api'

const Channel: FC<IChannel> = ({ userId, videos }) => {
	const { data: user } = userApi.useGetUserByIdQuery(userId)

	const channelVideos = videos.filter(video => video.user.name === user?.name)
	return (
		<Layout title='Мои подписки' description='Подписки'>
			<div className={styles.channel}>
				<div className={styles.wrapper}>
					<div className={styles.aboutChannel}>
						<Avatar
							type='default'
							imageUrl={`http://drive.google.com/uc?export=view&id=1${user?.photo}`}
						/>
						<div>
							<h2>{user?.name}</h2>
							<h4>{user?.subscribers.length} Subscribers</h4>
						</div>
					</div>
					<SubscribeButton user={user} />
				</div>
				<div className={styles.description}>
					<p>{user?.aboutChannel}</p>
				</div>
				<Catalog videos={channelVideos} />
			</div>
		</Layout>
	)
}

export default Channel
