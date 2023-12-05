import { RefObject } from 'react'

import { IVideoElement } from '@/components/Layout/Screens/Video/Video.interface'
import { IVideo } from './video.interface'

interface ICreateDiscoverVideoIndexes {
  popularVideoIndex: number
  randomVideoIndex: number
}

interface ICreateDiscoverVideos {
  popularVideo?: IVideo
  randomVideo?: IVideo
}

interface IStatus {
  isPlaying: boolean
  progress: number
  currentTime: number
  videoTime: number
}

interface IUsePlayer {
  videoRef: RefObject<IVideoElement>
  inputRef: RefObject<HTMLInputElement>
  toggleVideo: () => void
  rewindVideo: (time: number) => void
  fullScreen: () => void
  forward: (time: number) => void
  revert: (time: number) => void
  status: IStatus
}

export type { ICreateDiscoverVideoIndexes, ICreateDiscoverVideos, IUsePlayer }
