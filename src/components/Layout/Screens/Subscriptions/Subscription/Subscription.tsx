'use client'

import { FC } from 'react'

import styles from './Subscription.module.scss'
import { Catalog } from '../../Home/Catalog/Catalog'
import { Avatar } from '@/components/UI/Avatar/Avatar'
import { SubscribeButton } from '@/components/UI/Subscribe-button/SubscribeButton'
import { userApi } from '@/store/user/user.api'

export const Subscription: FC<{ id: string }> = ({ id }) => {
  const { data: user } = userApi.useGetSubscriptionByIdQuery(Number(id))
  const { data: subscriptionsLength } = userApi.useGetSubscripionsLengthQuery(Number(user?.id))
  const channelVideos = user?.videos

  console.log(channelVideos)

  return (
    <div className={styles.channel}>
      <div className={styles.wrapper}>
        <div className={styles.aboutChannel}>
          <Avatar type='default' imagePath={user?.avatarPath} />
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
      <Catalog videos={channelVideos} />
    </div>
  )
}
