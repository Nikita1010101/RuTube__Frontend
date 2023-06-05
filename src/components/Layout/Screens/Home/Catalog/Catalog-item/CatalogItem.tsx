import { FC } from 'react'
import Link from 'next/link'
import styles from './CatalogItem.module.scss'

import { Avatar } from '@/components/UI/Avatar/Avatar'
import { IVideo } from '@/types/video.interface'

import { formatNumber } from '@/utils/formatNumber'
import { formatTime } from '@/utils/formatTime'

import relativeTime from 'dayjs/plugin/relativeTime'
import dayjs from 'dayjs'
import { formatViews } from '@/utils/formatViews'

export const CatalogItem: FC<IVideo> = ({
	id,
	title,
	previewPath,
	views,
	duration,
	createdAt,
	user
}) => {
	dayjs.extend(relativeTime)
	dayjs().locale('ru')

	return (
		<div className={styles.catalogItem} title={title}>
			<img src={previewPath} alt='Video' />
			<div className={styles.content}>
				<Link href={`/video/${id}`}>
					<h2 onClick={event => event.stopPropagation}>
						<Link href={`/my-subscriptions/${user?.id}`}>{user?.name}</Link>
					</h2>
					<h1>{title}</h1>
					<h3>
						{formatNumber(views)} {formatViews(views)}
					</h3>
					<h3>{dayjs(new Date(createdAt || '00.00.0000')).fromNow()}</h3>
				</Link>
			</div>
			<div className={styles.overlays}>
				<h4>{formatTime(duration)}</h4>
				<Avatar type='default' imagePath={user?.avatarPath} />
			</div>
		</div>
	)
}
