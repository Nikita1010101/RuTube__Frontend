'use client'

import { FC } from 'react'
import styles from './Video.module.scss'

import { VideoPlayer } from './Video-player/VideoPlayer'
import { VideoContent } from './Video-content/VideoContent'
import { Comments } from './Comments/Comments'
import { IItemVideo } from './Video.interface'


import { commentApi } from '@/store/comment/comment.api'
import { usePlayer } from '@/hooks/usePlayer'
import { IUser } from '@/types/user.interface'
import { IComment } from '@/types/comment.interface'

export const Video: FC<IItemVideo> = ({ video }) => {
  // const { profile } = useAuth()
  // const { data: comments } = commentApi.useGetCommentsByIdQuery(
  // 	Number(id)
  // )
  const player = usePlayer()

  const profile = {} as IUser
  const comments = [] as IComment[]

  return (
    <div className={styles.wrapper}>
      <div className={styles.video}>
        <VideoPlayer
          videoId={video?.id}
          videoUrl={video?.videoPath}
          previewUrl={video?.previewPath}
          {...player}
        />
        <VideoContent video={video} />
      </div>
      <Comments
        userName={profile?.name}
        avatarPath={profile?.avatarPath}
        videoId={video?.id}
        inputRef={player.inputRef}
        comments={comments}
      />
    </div>
  )
}
