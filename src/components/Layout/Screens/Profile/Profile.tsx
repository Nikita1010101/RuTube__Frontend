'use client'

import React, { FC, useState } from 'react'
import { AiFillEdit } from 'react-icons/ai'
import cn from 'classnames'

import styles from './Profile.module.scss'
import { Catalog } from '../../Catalog/Catalog'
import { Avatar } from '@/components/UI/Avatar/Avatar'
import { EditForm } from './Edit-form/Edit-form'
import { likeApi } from '@/store/like/like.api'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { CATALOG_TITLES } from '@/constants/catalog-titles.constant'

export const Profile: FC = () => {
  const [isEditForm, setIsEditForm] = useState<boolean>(false)
  const { profile } = useTypedSelector((state) => state.auth)
  const { data: likedVideos, isLoading: isLoadingLikedVideos } =
    likeApi.useLikeGetVideosQuery(null)
  const { data: myVideos, isLoading: isLoadingMyVideos } =
    likeApi.useVideoGetAllMyQuery(null)

  return (
    <div className={styles.myChannel}>
      <div className={styles.wrapper}>
        <div className={styles.aboutChannel}>
          <div className={styles.avatar}>
            <Avatar type="profile" imagePath={profile?.avatarUrl} />
          </div>
          <div className={styles.profile}>
            <h2>{profile?.name}</h2>
            <AiFillEdit onClick={() => setIsEditForm(true)} />
            <div
              onClick={() => setIsEditForm(false)}
              className={cn({ [styles.active]: isEditForm })}
            >
              <EditForm />
            </div>
          </div>
        </div>
        <div className={styles.btnExit}>Выйти</div>
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
      />
    </div>
  )
}
