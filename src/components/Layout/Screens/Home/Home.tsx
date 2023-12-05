'use client'

import { FC } from 'react'

import { Catalog } from '../Home/Catalog/Catalog'
import { Discover } from './Discover/Discover'
import { useCreateDiscoverVideos } from '@/hooks/use-create-discover-videos'
import { IVideo } from '@/types/video.interface'

export const Home: FC<{ videos: IVideo[] }> = ({ videos }) => {
  const randomVideos = videos
  const { popularVideo, randomVideo } = useCreateDiscoverVideos(randomVideos)

  return (
    <header>
      <Discover popularVideo={popularVideo} randomVideo={randomVideo} />
      <Catalog videos={randomVideos} />
    </header>
  )
}
