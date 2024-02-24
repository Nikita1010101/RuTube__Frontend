'use client'

import React, { FC, useState } from 'react'
import { DoorOpen, FilePenLine, MonitorUp } from 'lucide-react'
import cn from 'classnames'

import { useActions } from '@/hooks/use-actions'
import { videoApi } from '@/store/video/video.api'

import { EditForm } from './Edit-form/Edit-form'
import { UploadVideo } from './Upload-video/Upload-video'
import styles from './Profile-options.module.scss'

export const ProfileOptions: FC = () => {
  const [isEditForm, setIsEditForm] = useState<boolean>(false)
  const [isUploadVideo, setIsUploadVideo] = useState<boolean>(false)
  const [videoId, setVideoId] = useState<number>(-1)

  const [createVideo] = videoApi.useVideoCreateMutation()

  const { logout } = useActions()

  const openUploadVideo = () => {
    createVideo()
      .unwrap()
      .then(({ videoId }) => {
        setVideoId(videoId)
      })
    setIsUploadVideo(true)
  }

  const handleCloseModal = () => {
    setIsEditForm(false)
    setIsUploadVideo(false)
  }

  const exit = () => {
    logout()
    window.location.href = '/'
  }

  return (
    <>
      <div
        onClick={() => setIsEditForm(false)}
        className={cn(styles.form, { [styles.active]: isEditForm })}
      >
        <EditForm handleCloseModal={handleCloseModal} />
      </div>
      <div
        onClick={handleCloseModal}
        className={cn(styles.form, {
          [styles.active]: isUploadVideo,
        })}
      >
        <UploadVideo
          handleCloseModal={handleCloseModal}
          videoId={videoId}
          isOpen={isUploadVideo}
        />
      </div>
      <div
        onClick={(event) => event.stopPropagation()}
        className={styles.options}
      >
        <h2>Опции</h2>
        <button
          onClick={() => setIsEditForm(true)}
          className={styles.button}
          title="Редактировать"
        >
          <FilePenLine size={20} color="#ff0" />
          <div className={styles.title}>
            <h4>Редактировать</h4>
          </div>
        </button>

        <button
          onClick={openUploadVideo}
          className={styles.button}
          title="Новое видео"
        >
          <MonitorUp size={20} color="#0f0" />
          <div className={styles.title}>
            <h4>Новое видео</h4>
          </div>
        </button>
        <button className={styles.button} onClick={exit} title="Выйти">
          <DoorOpen size={20} color="#f00" />
          <div className={styles.title}>
            <h4>Выйти</h4>
          </div>
        </button>
      </div>
    </>
  )
}
