import { FC } from 'react'
import Link from 'next/link'
import styles from './VideoContent.module.scss'

import { AiFillCalendar, AiFillEye, AiFillHeart } from 'react-icons/ai'

import { Avatar } from '@/components/UI/Avatar/Avatar'
import { SubscribeButton } from '@/components/UI/Subscribe-button/SubscribeButton'
import { IVideoContent } from './VideoContent.interface'

import { useAuth } from '@/hooks/useAuth'
import { useLike } from '@/hooks/useLike'

import { videoApi } from '@/store/api/video.api'
import { userApi } from '@/store/api/user.api'
import { useThrottiling } from '@/hooks/useThrottling'

import { formatNumber } from '@/utils/formatNumber'
import realativeTime from 'dayjs/plugin/relativeTime'
import dayjs from 'dayjs'

export const VideoContent: FC<IVideoContent> = ({
	video: { id, title, description, views, createdAt, userId, user }
}) => {
	const { profile } = useAuth()
	const { data: LikesLength } = videoApi.useGetLikesLengthQuery(Number(id))
	const { data: subscriptionsLength } = userApi.useGetSubscripionsLengthQuery(
		Number(user?.id)
	)
	const { updateLike, isLoading, isLike } = useLike(profile?.id, id)

	const throttle = useThrottiling(updateLike, 300)

	dayjs.extend(realativeTime)
	return (
		<div className={styles.content}>
			<div className={styles.mainInfo}>
				<div className={styles.leftContent}>
					<div className={styles.aboutChannel}>
						<Avatar type='default' imagePath={user?.avatarPath} />
						<div>
							<h2>
								<Link href={`/my-subscriptions/${userId}`}>{user?.name}</Link>
							</h2>
							<h4>{subscriptionsLength} Подписчитков</h4>
						</div>
					</div>
					<div className={styles.descriptionChannel}>
						<h1>{title}</h1>
					</div>
				</div>
				<div className={styles.rightContent}>
					<div className={styles.buttons}>
						<SubscribeButton user={user} />
						<div
							onClick={throttle}
							className={`${styles.btnLike} ${isLike ? styles.btnLiked : ''}`}
						>
							<AiFillHeart />
							<span>{isLoading ? 'Загру...' : 'Лайк'}</span>
						</div>
					</div>
					<div className={styles.numbers}>
						<div>
							<AiFillEye />
							<h4>{formatNumber(views)} просмотров</h4>
						</div>
						<div>
							<AiFillHeart />
							<h4>{LikesLength} лайков</h4>
						</div>
						<div>
							<AiFillCalendar />
							<h4>{dayjs(new Date(createdAt || '')).fromNow()}</h4>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.description}>
				<p>{description}</p>
			</div>
		</div>
	)
}
