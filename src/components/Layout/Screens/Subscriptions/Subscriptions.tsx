'use client'

import React, { FC } from 'react'

import { Catalog } from '../Home/Catalog/Catalog'
import { videoApi } from '@/store/video/video.api'

export const Subscriptions: FC = () => {
  const { data: videoSubscriptions } = videoApi.useGetSubsciptionVideosQuery(1)

  return (
    <>
      {videoSubscriptions?.length === 0 ? (
        <h1>Список пуст</h1>
      ) : (
        <Catalog videos={videoSubscriptions} />
      )}
    </>
  )
}
