'use client'

import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import cn from 'classnames'

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
			className={cn({
				[styles.mostPopular]: type === 'most popular',
				[styles.random]: type === 'random'
			})}
		>
			<Image
				src={previewPath}
				width={1600}
				height={900}
				alt={'Видео'}
				quality={100}
			/>
			<div className={styles.content}>
				<Link href={`/video/${id}`}>
					<h1>{title}</h1>
					<Avatar type='default' imagePath={user?.avatarPath} />
					<span onClick={event => event.stopPropagation()}>
						<span 
						// href={`/my-subscriptions/${user?.id}`}
						>
							{user?.name}
							</span>
					</span>
					<h3>{formatNumber(views)} views</h3>
					<h3>{dayjs(new Date(createdAt || '00.00.0000')).fromNow()}</h3>
				</Link>
			</div>
			<h4>{duration} мин.</h4>
		</div>
	)
}
