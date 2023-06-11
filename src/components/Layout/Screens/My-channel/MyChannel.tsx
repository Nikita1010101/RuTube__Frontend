import React, { FC, useState } from 'react'
import styles from './MyChannel.module.scss'

import { Layout } from '../../Layout'
import { Catalog } from '../Home/Catalog/Catalog'

import { useAuth } from '@/hooks/useAuth'

import { Avatar } from '@/components/UI/Avatar/Avatar'
import { AiFillEdit } from 'react-icons/ai'
import { EditForm } from './Edit-form/EditForm'
import { videoApi } from '@/store/api/video.api'

export const MyChannel: FC = () => {
  const [isEditForm, setIsEditForm] = useState<boolean>(false)
  const { profile, logout } = useAuth()

  const { data: likedVideos } = videoApi.useGetLikedVideosQuery(
    Number(profile?.id)
  )

  return (
    <Layout title="Мой канал" description="Мой канал">
      <div className={styles.myChannel}>
        <div className={styles.wrapper}>
          <div className={styles.aboutChannel}>
            <div className={styles.avatar}>
              <Avatar type="profile" imagePath={profile?.avatarPath} />
            </div>
            <div className={styles.profile}>
              <h2>{profile?.name}</h2>
              <AiFillEdit onClick={() => setIsEditForm(true)} />
              <div
                onClick={() => setIsEditForm(false)}
                className={`${isEditForm && styles.active}`}
              >
                <EditForm />
              </div>
            </div>
          </div>
          <div onClick={logout} className={styles.btnExit}>
            Выйти
          </div>
        </div>
        <div className={styles.description}>
          <p>
            {profile?.description ? profile?.description : 'Описание профиля.'}
          </p>
        </div>
        <Catalog videos={likedVideos} />
      </div>
    </Layout>
  )
}
