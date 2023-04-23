import { FC } from 'react'
import Link from 'next/link'
import styles from './VideoContent.module.scss'

import { AiFillCalendar, AiFillEye, AiFillHeart } from 'react-icons/ai'

import Avatar from '@/components/UI/Avatar/Avatar'
import SubscribeButton from '@/components/UI/Subscribe-button/SubscribeButton'
import { IVideoContent } from './VideoContent.interface'

import { fromatNumber } from '@/utils/formatNumber'

import { useApi } from '@/hooks/useApi'
import { useLike } from '@/hooks/useLike'

import realativeTime from 'dayjs/plugin/relativeTime'
import dayjs from 'dayjs'

const VideoContent: FC<IVideoContent> = ({ user, id }) => {
	const { video } = useApi.getVideoById(id)

	const { updateLike, isLoading, isLike } = useLike(id)

	dayjs.extend(realativeTime)
	return (
		<div className={styles.content}>
			<div className={styles.leftContent}>
				<div className={styles.aboutChannel}>
					<Avatar
						type='default'
						imageUrl={`http://drive.google.com/uc?export=view&id=1${user?.photo}`}
					/>
					<div>
						<h2>
							<Link href={`/my-subscriptions/${video?.userId}`}>
								{user?.name}
							</Link>
						</h2>
						<h4>{user?.subscribers.length} Подписчитков</h4>
					</div>
				</div>
				<div className={styles.descriptionChannel}>
					<h1>{video?.title}</h1>
					<p>{video?.description}</p>
				</div>
			</div>
			<div className={styles.rightContent}>
				<div className={styles.buttons}>
					<SubscribeButton user={user} />
					<div
						onClick={updateLike}
						className={`${styles.btnLike} ${isLike ? styles.btnLiked : ''}`}
					>
						<AiFillHeart />
						<span>{isLoading ? 'Загру...' : 'Лайк'}</span>
					</div>
				</div>
				<div className={styles.numbers}>
					<div>
						<AiFillEye />
						<h2>{fromatNumber(video?.views)} просмотров</h2>
					</div>
					<div>
						<AiFillHeart />
						<h2>{video?.likes.length} лайков</h2>
					</div>
					<div>
						<AiFillCalendar />
						<h2>{dayjs(new Date(video?.publicationDate || '')).fromNow()}</h2>
					</div>
				</div>
			</div>
		</div>
	)
}

export default VideoContent
