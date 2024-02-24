'use client'

import { FC, MouseEvent } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next-nprogress-bar'
import { Settings2, Trash } from 'lucide-react'
import relativeTime from 'dayjs/plugin/relativeTime'
import dayjs from 'dayjs'

import { Avatar } from '@/components/shared/Avatar/Avatar'
import { formatNumber } from '@/utils/formatNumber'
import { formatTime } from '@/utils/formatTime'
import { formatViews } from '@/utils/formatViews'
import { LINKS } from '@/constants/links.config'
import { videoApi } from '@/store/video/video.api'

import styles from './Catalog-item.module.scss'
import { ICatalogItem } from './Catalog-item.interface'

export const CatalogItem: FC<ICatalogItem> = ({
  createdAt,
  duration,
  id,
  previewUrl,
  showOptions,
  title,
  user,
  views,
}) => {
  dayjs.extend(relativeTime)

  const router = useRouter()
  const [removeVideo, { isLoading }] = videoApi.useVideoRemoveMutation()

  const showVideo = () => {
    console.log(id)
    router.push(LINKS.video(String(id)))
  }

  const edit = (event: MouseEvent<SVGSVGElement>) => {
    event.stopPropagation()
  }

  const remove = (event: MouseEvent<SVGSVGElement>) => {
    event.stopPropagation()

    if (confirm('Подтвердите удаление видео')) {
      removeVideo(Number(id))
    }
  }

  return (
    <div
      onClick={showVideo}
      className={styles.catalogItem}
      title={title}
      aria-disabled={isLoading}
    >
      <div className={styles.preview_wrapper}>
        <Image
          src={previewUrl}
          width={400}
          height={225}
          alt="Видео"
          quality={100}
          priority
        />
      </div>
      <div className={styles.content}>
        <Link
          href={LINKS.subscriptions(String(user?.id))}
          onClick={(event) => event.stopPropagation()}
          title={user?.name}
        >
          {user?.name}
        </Link>
        <h1>{title}</h1>
        <div className={styles.bottomInfo}>
          <h3>
            {formatNumber(views)} {formatViews(views)}
          </h3>
          <h3>{dayjs(new Date(createdAt)).fromNow()}</h3>
          {showOptions && (
            <div className={styles.options}>
              <Settings2
                size={16}
                strokeWidth={3}
                color="#00f"
                onClick={edit}
              />
              <Trash size={16} strokeWidth={3} color="#f00" onClick={remove} />
            </div>
          )}
        </div>
      </div>
      <div className={styles.overlays}>
        {!!duration && <h4>{formatTime(duration)}</h4>}
        <Avatar type="default" imageUrl={user?.avatarUrl} />
      </div>
    </div>
  )
}
