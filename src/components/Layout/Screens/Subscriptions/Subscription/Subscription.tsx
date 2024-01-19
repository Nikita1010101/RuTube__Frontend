'use client'

import { FC } from 'react'

import styles from './Subscription.module.scss'
import { Catalog } from '@/components/Layout/Catalog/Catalog'
import { Avatar } from '@/components/UI/Avatar/Avatar'
import { SubscribeButton } from '@/components/UI/Subscribe-button/SubscribeButton'
import { subscriptionApi } from '@/store/subscription/subscription.api'
import { CATALOG_TITLES } from '@/constants/catalog-titles.constant'

export const Subscription: FC<{ id: number }> = ({ id }) => {
  const { data: user, isLoading } =
    subscriptionApi.useSubscriptionGetOneQuery(id)
  const { data } = subscriptionApi.useSubscriptionGetLengthQuery(id)

  const videos = user?.videos
  const subscriptionsLength = data?.length

  return (
    <div className={styles.channel}>
      <div className={styles.wrapper}>
        <div className={styles.aboutChannel}>
          <Avatar type="default" imagePath={user?.avatarUrl} />
          <div>
            <h2>{user?.name}</h2>
            <h4>{subscriptionsLength} Subscribers</h4>
          </div>
        </div>
        <SubscribeButton user={user} />
      </div>
      <div className={styles.description}>
        <p>{user?.description}</p>
      </div>
      <Catalog
        videos={videos}
        isLoading={isLoading}
        title={CATALOG_TITLES.allVideos}
      />
    </div>
  )
}
