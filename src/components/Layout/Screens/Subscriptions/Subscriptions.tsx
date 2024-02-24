'use client'

import React, { FC } from 'react'

import { Catalog } from '@/components/shared/Catalog/Catalog'
import { CATALOG_TITLES } from '@/constants/titles.constant'
import { subscriptionApi } from '@/store/subscription/subscription.api'

export const Subscriptions: FC = () => {
  const { data: videos, isLoading } =
    subscriptionApi.useSubscriptionGetVideosQuery(null)

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
