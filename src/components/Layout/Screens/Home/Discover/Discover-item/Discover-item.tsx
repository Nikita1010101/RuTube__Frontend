'use client'

import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import cn from 'classnames'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

import styles from './Discover-item.module.scss'
import { Avatar } from '@/components/shared/Avatar/Avatar'
import { IDiscoverVideo } from './Discover-item.interface'
import { formatNumber } from '@/utils/formatNumber'

export const DiscoverItem: FC<IDiscoverVideo> = ({
  type,
  video: { id, title, previewUrl, views, duration, createdAt, user },
}) => {
  dayjs.extend(relativeTime)
  return (
    <div
      className={cn({
        [styles.mostPopular]: type === 'most popular',
        [styles.random]: type === 'random',
      })}
    >
      <Image
        src={previewUrl}
        width={1600}
        height={900}
        alt="Видео"
        quality={100}
      />
      <div className={styles.content}>
        <Link href={`/video/${id}`}>
          <h1>{title}</h1>
          <Avatar type="default" imageUrl={user?.avatarUrl} />
          <span onClick={(event) => event.stopPropagation()}>
            <span
            title={user?.name}
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
