import React, { FC } from 'react'
import Link from 'next/link'
import styles from './DiscoverItem.module.scss'

import Avatar from '@/components/UI/Avatar/Avatar'
import { IDiscoverVideo } from './DiscoverItem.interface'
import { fromatNumber } from '@/utils/formatNumber'

import dayjs from 'dayjs'
import realativeTime from 'dayjs/plugin/relativeTime'

const DiscoverVideo: FC<IDiscoverVideo> = ({
	type,
	video: { id, previewUrl, title, user, views, publicationDate, duration }
}) => {
	dayjs.extend(realativeTime)
	return (
		<div
			className={`${
				type === 'most popular' ? styles.mostPopular : styles.random
			}`}
		>
			<img
				src={`//img.youtube.com/vi/${previewUrl}/maxresdefault.jpg`}
				alt='Random video'
			/>
			<div className={styles.content}>
				<Link href={`/video/${id}`}>
					<h1>{title}</h1>
					<Avatar
						type='default'
						imageUrl={`https://yt3.ggpht.com/${user.photo}=s88-c-k-c0x00ffffff-no-rj`}
					/>
					<h2>{user.name}</h2>
					<h3>{fromatNumber(views)} views</h3>
					<h3>{dayjs(new Date(publicationDate)).fromNow()}</h3>
				</Link>
			</div>
			<h4>{duration} мин.</h4>
		</div>
	)
}

export default DiscoverVideo
