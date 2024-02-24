'use client'

import { FC } from 'react'

import styles from './Subscription.module.scss'
import { Catalog } from '@/components/shared/Catalog/Catalog'
import { Avatar } from '@/components/shared/Avatar/Avatar'
import { SubscribeButton } from '@/components/shared/Subscribe-button/SubscribeButton'
import { subscriptionApi } from '@/store/subscription/subscription.api'
import { CATALOG_TITLES } from '@/constants/titles.constant'
import { useTypedSelector } from '@/hooks/use-typed-selector'

export const Subscription: FC<{ userId: number }> = ({ userId }) => {
  const { profile } = useTypedSelector((state) => state.auth)
  const { data: user, isLoading } =
    subscriptionApi.useSubscriptionGetOneQuery(userId)
  const { data: subscriptionsLengthData } =
    subscriptionApi.useSubscriptionGetLengthQuery(userId)

  const videos = user?.videos
  const subscriptionsLength = subscriptionsLengthData?.length

  return (
    <div className={styles.channel}>
      <div className={styles.wrapper}>
        <div className={styles.about}>
          <Avatar type="default" imageUrl={user?.avatarUrl} />
          <div className={styles.info}>
            <h2>{user?.name}</h2>
            <h4>{subscriptionsLength} Subscribers</h4>
          </div>
        </div>
        <div className={styles.options}>
          {profile?.id !== userId && <SubscribeButton userId={userId} />}
        </div>
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
