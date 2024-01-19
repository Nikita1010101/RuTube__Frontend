'use client'

import { FC } from 'react'
import Link from 'next/link'
import { AiFillCalendar, AiFillEye, AiFillHeart } from 'react-icons/ai'

import styles from './Video-content.module.scss'
import { Avatar } from '@/components/UI/Avatar/Avatar'
import { SubscribeButton } from '@/components/UI/Subscribe-button/SubscribeButton'
import { IVideoContent } from './Video-content.interface'

import { videoApi } from '@/store/video/video.api'
import { useThrottling } from '@/hooks/use-throttling'

import { formatNumber } from '@/utils/formatNumber'
import relativeTime from 'dayjs/plugin/relativeTime'
import dayjs from 'dayjs'

export const VideoContent: FC<IVideoContent> = ({
  video: { id, title, description, views, createdAt, userId, user },
}) => {
  // const { profile } = useAuth()
  // const { updateLike, isLoading, isLike } = useLike(profile?.id, id)

  // const throttle = useThrottling(updateLike, 300)

  dayjs.extend(relativeTime)
  return (
    <div className={styles.content}>
      <div className={styles.mainInfo}>
        <div className={styles.leftContent}>
          <div className={styles.aboutChannel}>
            <Avatar type="default" imagePath={user?.avatarUrl} />
            <div>
              <h2>
                <Link href={`/my-subscriptions/${userId}`}>{user?.name}</Link>
              </h2>
              {/* <h4>{subscriptionsLength} Подписчитков</h4> */}
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
            // onClick={throttle}
            // className={`${styles.btnLike} ${isLike ? styles.btnLiked : ''}`}
            >
              <AiFillHeart />
              {/* <span>{isLoading ? 'Загру...' : 'Лайк'}</span> */}
            </div>
          </div>
          <div className={styles.numbers}>
            <div>
              <AiFillEye />
              <h4>{formatNumber(views)} просмотров</h4>
            </div>
            <div>
              <AiFillHeart />
              {/* <h4>{LikesLength} лайков</h4> */}
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
