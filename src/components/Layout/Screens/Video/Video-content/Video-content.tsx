'use client'

import { FC } from 'react'
import Link from 'next/link'
import { CalendarClock, Eye, Heart } from 'lucide-react'
import cn from 'classnames'
import relativeTime from 'dayjs/plugin/relativeTime'
import dayjs from 'dayjs'

import { useThrottling } from '@/hooks/use-throttling'
import { Avatar } from '@/components/shared/Avatar/Avatar'
import { SubscribeButton } from '@/components/shared/Subscribe-button/SubscribeButton'
import { formatNumber } from '@/utils/formatNumber'
import { subscriptionApi } from '@/store/subscription/subscription.api'
import { likeApi } from '@/store/like/like.api'
import { useTypedSelector } from '@/hooks/use-typed-selector'

import styles from './Video-content.module.scss'
import { IVideoContent } from './Video-content.interface'
import { LINKS } from '@/constants/links.config'

export const VideoContent: FC<IVideoContent> = ({
  video: { id, title, description, views, createdAt, userId, user },
}) => {
  dayjs.extend(relativeTime)

  const { profile } = useTypedSelector((state) => state.auth)

  const [updateLike, { isLoading }] = likeApi.useLikeUpdateMutation()
  const { data: isLikeData } = likeApi.useLikeCheckQuery(Number(id), {
    skip: !profile || !id,
  })
  const { data: subscriptionsLengthData } =
    subscriptionApi.useSubscriptionGetLengthQuery(Number(user?.id), {
      skip: !profile || !id,
    })
  const { data: likesLengthData } = likeApi.useLikeGetLengthQuery(Number(id), {
    skip: !profile || !user,
  })

  const uploadLike = () => {
    if (profile) {
      const throttle = useThrottling(() => updateLike(Number(id)), 300)
      throttle()
    } else {
      alert('Сначала авторизируйтесь!')
    }
  }

  const isLike = isLikeData?.isLike
  const subscriptionsLength = subscriptionsLengthData?.length
  const likesLength = likesLengthData?.length

  return (
    <div className={styles.content}>
      <div className={styles.mainInfo}>
        <div className={styles.leftContent}>
          <div className={styles.aboutChannel}>
            <Avatar type="default" imageUrl={user?.avatarUrl} />
            <div>
              <h2>
                <Link href={LINKS.subscriptions(userId.toString())}>{user?.name}</Link>
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
            <SubscribeButton userId={user?.id} />
            <div
              onClick={uploadLike}
              className={cn(styles.btnLike, { [styles.liked]: isLike })}
            >
              <Heart size={16} fill="#fff" />
              <span>{isLoading ? 'Загрузка' : 'Лайк'}</span>
            </div>
          </div>
          <div className={styles.numbers}>
            <div>
              <Eye size={15} strokeWidth={3} />
              <h4>{formatNumber(views)} просмотров</h4>
            </div>
            <div>
              <Heart size={15} fill="#fff" />
              <h4>{likesLength} лайков</h4>
            </div>
            <div>
              <CalendarClock size={15} strokeWidth={3} />
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
