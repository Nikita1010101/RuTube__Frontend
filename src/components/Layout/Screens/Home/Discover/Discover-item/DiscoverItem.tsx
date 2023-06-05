import { FC } from 'react'
import Link from 'next/link'
import styles from './DiscoverItem.module.scss'

import { Avatar } from '@/components/UI/Avatar/Avatar'
import { IDiscoverVideo } from './DiscoverItem.interface'
import { formatNumber } from '@/utils/formatNumber'

import dayjs from 'dayjs'
import realativeTime from 'dayjs/plugin/relativeTime'

export const DiscoverItem: FC<IDiscoverVideo> = ({
	type,
	video: { id, title, previewPath, views, duration, createdAt, user }
}) => {
	dayjs.extend(realativeTime)
	return (
		<div
			className={`${
				type === 'most popular' ? styles.mostPopular : styles.random
			}`}
		>
			<img src={previewPath} alt='Random video' />
			<div className={styles.content}>
				<Link href={`/video/${id}`}>
					<h1>{title}</h1>
					<Avatar type='default' imagePath={user?.avatarPath} />
					<h2 onClick={event => event.stopPropagation()}>
						<Link href={`/my-subscriptions/${user?.id}`}>{user?.name}</Link>
					</h2>
					<h3>{formatNumber(views)} views</h3>
					<h3>{dayjs(new Date(createdAt || '00.00.0000')).fromNow()}</h3>
				</Link>
			</div>
			<h4>{duration} мин.</h4>
		</div>
	)
}
