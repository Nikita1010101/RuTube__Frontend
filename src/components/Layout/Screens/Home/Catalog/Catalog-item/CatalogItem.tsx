import { FC } from 'react'
import Link from 'next/link'
import styles from './CatalogItem.module.scss'

import Avatar from '@/components/UI/Avatar/Avatar'
import { IVideo } from '@/types/video.interface'

import { fromatNumber } from '@/utils/formatNumber'
import { formatTime } from '@/utils/formatTime'

import relativeTime from 'dayjs/plugin/relativeTime'
import dayjs from 'dayjs'
import { formatViews } from '@/utils/formatViews'

const CatalogItem: FC<IVideo> = ({
	id,
	userId,
	user,
	previewUrl,
	title,
	duration,
	views,
	publicationDate
}) => {
	dayjs.extend(relativeTime)
	dayjs().locale('ru')

	return (
		<div className={styles.catalogItem} title={title}>
			<img
				src={`//img.youtube.com/vi/${previewUrl}/maxresdefault.jpg`}
				alt='Video'
			/>
			<div className={styles.content}>
				<Link href={`/video/${id}`}>
					<h2 onClick={event => event.stopPropagation}>
						<Link href={`/my-subscriptions/${userId}`}>{user.name}</Link>
					</h2>
					<h1>{title}</h1>
					<h3>
						{fromatNumber(views)} {formatViews(views)}
					</h3>
					<h3>{dayjs(new Date(publicationDate)).fromNow()}</h3>
				</Link>
			</div>
			<div className={styles.overlays}>
				<h4>{formatTime(duration)}</h4>
				<Avatar
					type='default'
					imageUrl={`http://drive.google.com/uc?export=view&id=1${user.photo}`}
				/>
			</div>
		</div>
	)
}

export default CatalogItem
