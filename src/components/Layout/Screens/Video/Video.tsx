import { FC } from 'react'
import styles from './Video.module.scss'

import { Layout } from '@/components/Layout/Layout'
import { VideoPlayer } from './Video-player/VideoPlayer'
import { VideoContent } from './Video-content/VideoContent'
import { Comments } from './Comments/Comments'
import { IItemVideo } from './Video.interface'

import { useAuth } from '@/hooks/useAuth'
import { commentApi } from '@/store/api/comment.api'
import { usePlayer } from '@/hooks/usePlayer'

export const Video: FC<IItemVideo> = ({ video }) => {
	const { profile } = useAuth()
	const { data: comments } = commentApi.useGetCommentsByIdQuery(
		Number(video?.id)
	)
	const player = usePlayer()

	return (
		<Layout title='Видео' description='Страница для просмотра видео'>
			<div className={styles.wrapper}>
				<div className={styles.video}>
					<VideoPlayer
						videoId={video?.id}
						videoUrl={video?.videoPath}
						previewUrl={video?.previewPath}
						{...player}
					/>
					<VideoContent video={video} />
				</div>
				<Comments
					userName={profile?.name}
					avatarPath={profile?.avatarPath}
					videoId={video?.id}
					inputRef={player.inputRef}
					comments={comments}
				/>
			</div>
		</Layout>
	)
}
