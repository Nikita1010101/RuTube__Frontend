'use client'

import React, { FC, useState } from 'react'
import styles from './Profile.module.scss'

import { Catalog } from '../Home/Catalog/Catalog'
import { Avatar } from '@/components/UI/Avatar/Avatar'
import { AiFillEdit } from 'react-icons/ai'
import { EditForm } from './Edit-form/EditForm'
import { videoApi } from '@/store/video/video.api'

export const Profile: FC = () => {
  const [isEditForm, setIsEditForm] = useState<boolean>(false)

  // const { data: likedVideos } = videoApi.useGetLikedVideosQuery(
  //   Number(profile?.id)
  // )

  return (
    <div className={styles.myChannel}>
      <div className={styles.wrapper}>
        <div className={styles.aboutChannel}>
          <div className={styles.avatar}>
            {/* <Avatar type="profile" imagePath={profile?.avatarPath} /> */}
          </div>
          <div className={styles.profile}>
            {/* <h2>{profile?.name}</h2> */}
            <AiFillEdit onClick={() => setIsEditForm(true)} />
            <div onClick={() => setIsEditForm(false)} className={`${isEditForm && styles.active}`}>
              {/* <EditForm /> */}
            </div>
          </div>
        </div>
        {/* <div onClick={logout} className={styles.btnExit}>
            Выйти
          </div> */}
      </div>
      <div className={styles.description}>
        <p>{/* {profile?.description ? profile?.description : 'Описание профиля.'} */}</p>
      </div>
      {/* <Catalog videos={likedVideos} /> */}
    </div>
  )
}
