import { FC } from 'react'
import styles from './Channel.module.scss'

import { Layout } from '@/components/Layout/Layout'
import { Catalog } from '../../Home/Catalog/Catalog'
import { Avatar } from '@/components/UI/Avatar/Avatar'
import { SubscribeButton } from '@/components/UI/Subscribe-button/SubscribeButton'

import { IChannel } from './Channel.interface'

import { userApi } from '@/store/api/user.api'

export const Channel: FC<IChannel> = ({ user }) => {
	const { data: subscriptionsLength } = userApi.useGetSubscripionsLengthQuery(
		Number(user?.id)
	)
	const channelVideos = user?.videos

	return (
		<Layout title='Мои подписки' description='Подписки'>
			<div className={styles.channel}>
				<div className={styles.wrapper}>
					<div className={styles.aboutChannel}>
						<Avatar type='default' imagePath={user?.avatarPath} />
						<div>
							<h2>{user?.name}</h2>
							<h4>{subscriptionsLength} Subscribers</h4>
						</div>
					</div>
					<SubscribeButton user={user} />
				</div>
				<div className={styles.description}>
					<p>{user?.description}</p>
				</div>
				<Catalog videos={channelVideos} />
			</div>
		</Layout>
	)
}
