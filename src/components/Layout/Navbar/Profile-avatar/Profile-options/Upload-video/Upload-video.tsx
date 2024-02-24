'use client'

import { ChangeEvent, FC, useEffect, useState } from 'react'
import Image from 'next/image'
import {
  ArrowUpCircle,
  CheckCircle,
  FileUp,
  FileVideo,
  Loader,
  Loader2,
  Upload,
} from 'lucide-react'
import cn from 'classnames'

import styles from './Upload-video.module.scss'
import { useUploadVideo } from './use-upload-video'
import { IUploadVideo } from './Upload-video.interface'

export const UploadVideo: FC<IUploadVideo> = ({
  handleCloseModal,
  isOpen,
  videoId,
}) => {
  const { form, media, status } = useUploadVideo({
    handleCloseModal,
    videoId,
  })

  useEffect(() => {
    if (!isOpen) status.setIsChosen(false)
  }, [])

  return (
    <div className={cn(styles.step, styles.active)}>
      {!status.isChosen ? (
        <div
          onClick={(event) => event.stopPropagation()}
          className={cn(styles.upload_video, {})}
        >
          <h2>
            <FileVideo size={28} />
            <span>Загрузи новое видео 👇</span>
          </h2>

          <input onChange={media.uploadFile} type="file" accept="video/*" />
        </div>
      ) : (
        <form
          onSubmit={form.handleSubmit(form.onSubmit)}
          onClick={(event) => event.stopPropagation()}
          className={styles.upload_content}
        >
          <div className={styles.left_content}>
            <input
              {...form.register('title')}
              className={styles.title_input}
              type="text"
              name="title"
              placeholder="Заголовок видео"
            />
            <textarea
              {...form.register('description')}
              className={styles.description_input}
              name="description"
              rows={8}
              placeholder="Описание видео"
            ></textarea>
            <input
              {...form.register('preview')}
              onChange={media.changePreview}
              className={styles.preview_input}
              type="file"
              name="preview"
              accept="image/png, image/jpg, image/jpeg"
            />
            <div className={styles.is_public}>
              <div
                onClick={() => status.setIsPublic((prev) => !prev)}
                className={cn(styles.button_wrapper, {
                  [styles.public]: status.isPublic,
                })}
                title="Публичное видео"
              >
                <div className={styles.button}></div>
              </div>
              <h4>Публичное видео</h4>
            </div>
            <div className={styles.loading_process}>
              {status.isUploaded ? (
                <CheckCircle color="#ff7551" />
              ) : (
                <Upload color="#ff7551" className="animate-bounce" />
              )}
              <span>
                {status.isUploaded
                  ? 'Видео загруженно'
                  : `Загрузка видео ${status.progressPercent}%`}
              </span>
            </div>
          </div>
          <div className={styles.right_content}>
            {media.previewPath ? (
              <Image
                className={styles.preview_image}
                src={media.previewPath}
                width={400}
                height={225}
                alt="Превью видео"
              />
            ) : (
              <div className={styles.preview_mock}>
                Ты должен загрузить превью
              </div>
            )}
            {media.videoFileName && (
              <div className={styles.file_info}>
                <span>Имя файла</span>
                <h5>{media.videoFileName}</h5>
              </div>
            )}
            <button className={styles.button_save} title="Сохранить">
              Сохранить
            </button>
          </div>
        </form>
      )}
    </div>
  )
}
