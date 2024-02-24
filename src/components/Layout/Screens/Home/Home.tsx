'use client'

import { FC, useEffect, useState } from 'react'

import { Catalog } from '@/components/shared/Catalog/Catalog'
import { Discover } from '@/components/Layout/Screens/Home/Discover/Discover'
import { useCreateDiscoverVideos } from '@/hooks/use-create-discover-videos'
import { videoApi } from '@/store/video/video.api'
import { CATALOG_TITLES } from '@/constants/titles.constant'

export const Home: FC = () => {
  const { data: videos, isLoading } = videoApi.useVideoGetAllQuery({})

  const [randomId, setRandomId] = useState<number>(0.1)
  const { popularVideo, randomVideo } = useCreateDiscoverVideos(
    videos,
    randomId
  )

  useEffect(() => {
    if (videos) {
      setRandomId(Math.floor(Math.random() * videos.length))
    }
  }, [videos])

  return (
    <header>
      <Discover popularVideo={popularVideo} randomVideo={randomVideo} />
      <Catalog
        videos={videos}
        isLoading={isLoading}
        title={CATALOG_TITLES.recommended}
      />
    </header>
  )
}
