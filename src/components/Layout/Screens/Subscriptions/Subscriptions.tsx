'use client'

import React, { FC } from 'react'

import { Catalog } from '../../Catalog/Catalog'
import { likeApi } from '@/store/like/like.api'
import { CATALOG_TITLES } from '@/constants/catalog-titles.constant'
import { subscriptionApi } from '@/store/subscription/subscription.api'

export const Subscriptions: FC = () => {
  const { data: videos, isLoading } =
    subscriptionApi.useSubscriptionGetVideosQuery(null)

  console.log('🚀 ~ videos:', videos)

  return (
    <>
      <Catalog
        videos={videos}
        isLoading={isLoading}
        title={CATALOG_TITLES.subscriptions}
      />
    </>
  )
}
