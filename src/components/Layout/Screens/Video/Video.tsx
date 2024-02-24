'use client'

import { FC } from 'react'
import styles from './Video.module.scss'
import { VideoPlayer } from './Video-player/VideoPlayer'
import { VideoContent } from './Video-content/Video-content'
import { Comments } from './Comments/Comments'
import { IItemVideo } from './Video.interface'
import { usePlayer } from '@/hooks/usePlayer'
import { TUser } from '@/types/user.types'
import { TComment } from '@/types/comment.types'

export const Video: FC<IItemVideo> = ({ video }) => {
  const player = usePlayer()

  const profile = {} as TUser
  const comments = [] as TComment[]

  return (
    <div className={styles.wrapper}>
      <div className={styles.video}>
        <VideoPlayer
          videoId={video?.id}
          videoUrl={video?.videoUrl}
          previewUrl={video?.previewPath}
          {...player}
        />
        <VideoContent video={video} />
      </div>
      <Comments
        userName={profile?.name}
        avatarPath={profile?.avatarUrl}
        videoId={video?.id}
        inputRef={player.inputRef}
        comments={comments}
      />
    </div>
  )
}
