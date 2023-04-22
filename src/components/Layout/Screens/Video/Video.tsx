import React, { FC } from 'react'
import styles from './Video.module.scss'

import Layout from '@/components/Layout/Layout'
import VideoPlayer from './Video-player/VideoPlayer'
import VideoContent from './Video-content/VideoContent'
import Comments from './Comments/Comments'
import { IItemVideo } from './Video.interface'

import { useApi } from '@/hooks/useApi'
import { usePlayer } from '@/hooks/usePlayer'

const Video: FC<IItemVideo> = ({
	video: { id, userId, videoUrl, previewUrl }
}) => {
	const player = usePlayer()
	const { user } = useApi.GetUserById(userId)
	const { video } = useApi.GetVideoById(id)
	return (
		<Layout title='Видео' description='Страница для просмотра видео'>
			<div className={styles.wrapper}>
				<div className={styles.video}>
					<VideoPlayer
						videoUrl={videoUrl}
						previewUrl={previewUrl}
						{...player}
					/>
					<VideoContent user={user} id={id} />
				</div>
				<Comments
					id={id}
					inputRef={player.inputRef}
					comments={video?.comments}
				/>
			</div>
		</Layout>
	)
}

export default Video
