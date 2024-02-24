import { RefObject } from 'react'

import { IVideoElement } from '@/components/Layout/Screens/Video/Video.interface'
import { TVideo } from './video.types'

export type TCreateDiscoverVideoIndexes = {
  popularVideoIndex: number
  randomVideoIndex: number
}

export type TCreateDiscoverVideos = {
  popularVideo?: TVideo
  randomVideo?: TVideo
}

export type TStatus = {
  isPlaying: boolean
  progress: number
  currentTime: number
  videoTime: number
}

export type TUsePlayer = {
  videoRef: RefObject<IVideoElement>
  inputRef: RefObject<HTMLInputElement>
  toggleVideo: () => void
  rewindVideo: (time: number) => void
  fullScreen: () => void
  forward: (time: number) => void
  revert: (time: number) => void
  status: TStatus
}
