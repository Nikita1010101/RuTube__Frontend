'use client'

import { FC, MouseEvent, useState } from 'react'
import {
  ArrowBigLeft,
  ArrowBigRight,
  Maximize,
  PauseCircle,
  PlayCircle,
} from 'lucide-react'

import { formatVideoTime } from '@/utils/formatVideoTime'
import { videoApi } from '@/store/video/video.api'

import styles from './VideoPlayer.module.scss'
import { IVideoPlayer } from './VideoPlayer.interface'

export const VideoPlayer: FC<IVideoPlayer> = ({
  videoId,
  previewUrl,
  videoUrl,
  videoRef,
  toggleVideo,
  fullScreen,
  rewindVideo,
  forward,
  revert,
  status,
}) => {
  const [addView] = videoApi.useVideoAddViewMutation()

  const [viewed, setViewed] = useState<boolean>(false)

  // if (status.progress >= 90 && !viewed) {
  // 	setViewed(true)
  // 	addView({ id: Number(videoId) })
  // }

  const rewind = (event: MouseEvent<HTMLDivElement>): void => {
    const parent = event.currentTarget.getBoundingClientRect()
    const elementWidth = event.currentTarget.clientWidth
    const currentCord = event.clientX - parent.left + 6
    const curTime = (100 / elementWidth) * currentCord
    rewindVideo(curTime)
  }

  return (
    <div className={styles.player}>
      <video
        ref={videoRef}
        poster={previewUrl}
        onClick={toggleVideo}
        onDoubleClick={fullScreen}
      >
        <source src={videoUrl} />
      </video>
      <div className={styles.controls}>
        <div className={styles.controlerBtns}>
          <ArrowBigLeft onClick={() => revert(15)} className="cursor-pointer" />
          {status.isPlaying ? (
            <PauseCircle onClick={toggleVideo} />
          ) : (
            <PlayCircle onClick={toggleVideo} />
          )}
          <ArrowBigRight
            onClick={() => forward(15)}
            className="cursor-pointer"
          />
        </div>
        <div onClick={rewind} className={styles.progressBar}>
          <div
            style={{
              width: `${status.progress}%`,
            }}
          >
            <div></div>
          </div>
        </div>
        <div className={styles.timeControls}>
          {formatVideoTime(status.currentTime)}
          {' / '}
          {formatVideoTime(status.videoTime)}
        </div>
        <div onClick={fullScreen} className={styles.fullScreenControls}>
          <Maximize strokeWidth={3} className={styles.fullScreenBtn} />
        </div>
      </div>
    </div>
  )
}
