'use client'

import React, { FC, useEffect } from 'react'

import { Avatar } from '@/components/shared/Avatar/Avatar'
import { likeApi } from '@/store/like/like.api'
import { Catalog } from '@/components/shared/Catalog/Catalog'
import { useTypedSelector } from '@/hooks/use-typed-selector'
import { CATALOG_TITLES } from '@/constants/titles.constant'
import { videoApi } from '@/store/video/video.api'
import { subscriptionApi } from '@/store/subscription/subscription.api'

import styles from './Profile.module.scss'

export const Profile: FC = () => {
  const { profile } = useTypedSelector((state) => state.auth)

  const { data: likedVideos, isLoading: isLoadingLikedVideos } =
    likeApi.useLikeGetVideosQuery(null)

  const { data: myVideos, isLoading: isLoadingMyVideos } =
    videoApi.useVideoGetAllMyQuery(null)

  const { data: subscriptionsLengthData } =
    subscriptionApi.useSubscriptionGetLengthQuery(Number(profile?.id), {
      skip: !profile,
    })

  const subscriptionsLength = subscriptionsLengthData?.length

  return (
    <>
      <div className={styles.myChannel}>
        <div className={styles.wrapper}>
          <div className={styles.about}>
            <Avatar type="profile" imageUrl={profile?.avatarUrl} />
            <div className={styles.info}>
              <h2>{profile?.name}</h2>
              <h4>{subscriptionsLength} Subscribers</h4>
            </div>
          </div>
        </div>
        <div className={styles.description}>
          <p>
            {profile?.description ? profile?.description : 'Описание профиля.'}
          </p>
        </div>
        <Catalog
          videos={likedVideos}
          isLoading={isLoadingLikedVideos}
          title={CATALOG_TITLES.liked}
        />
        <Catalog
          videos={myVideos}
          isLoading={isLoadingMyVideos}
          title={CATALOG_TITLES.myVideos}
          showOptions
        />
      </div>
    </>
  )
}
