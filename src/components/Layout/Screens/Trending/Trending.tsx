'use client'

import { FC } from 'react'

import { Catalog } from '@/components/shared/Catalog/Catalog'
import { videoApi } from '@/store/video/video.api'
import { CATALOG_TITLES } from '@/constants/titles.constant'

export const Trending: FC = () => {
  const { data: videos, isLoading } = videoApi.useVideoGetAllQuery({
    sort: 'popular',
  })

  return (
    <Catalog
      videos={videos}
      isLoading={isLoading}
      title={CATALOG_TITLES.popular}
    />
  )
}
