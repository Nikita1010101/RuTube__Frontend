'use client'

import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import relativeTime from 'dayjs/plugin/relativeTime'
import dayjs from 'dayjs'

import styles from './CatalogItem.module.scss'
import { Avatar } from '@/components/UI/Avatar/Avatar'
import { TVideo } from '@/types/video.types'
import { formatNumber } from '@/utils/formatNumber'
import { formatTime } from '@/utils/formatTime'
import { formatViews } from '@/utils/formatViews'

export const CatalogItem: FC<TVideo> = ({
  id,
  title,
  previewUrl,
  views,
  duration,
  createdAt,
  user,
}) => {
  const { replace } = useRouter()
  dayjs.extend(relativeTime)
  dayjs().locale('ru')

  function showUser() {
    replace(`/my-subscriptions/${user?.id}`)
  }

  return (
    <div className={styles.catalogItem} title={title}>
      <Image
        src={previewUrl}
        width={400}
        height={225}
        alt="Видео"
        quality={100}
      />
      <div className={styles.content}>
        <Link href={`/video/${id}`}>
          <span onClick={(event) => event.stopPropagation}>
            <span onClick={showUser}>{user?.name}</span>
          </span>
          <h1>{title}</h1>
          <h3>
            {formatNumber(views)} {formatViews(views)}
          </h3>
          <h3>{dayjs(new Date(createdAt || '00.00.0000')).fromNow()}</h3>
        </Link>
      </div>
      <div className={styles.overlays}>
        {!!duration && <h4>{formatTime(duration)}</h4>}
        <Avatar type="default" imagePath={user?.avatarUrl} />
      </div>
    </div>
  )
}
