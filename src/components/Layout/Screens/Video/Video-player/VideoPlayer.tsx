import { FC, MouseEvent } from 'react'
import styles from './VideoPlayer.module.scss'

import { AiFillBackward, AiFillForward } from 'react-icons/ai'
import { BiFullscreen } from 'react-icons/bi'
import { BsFillPauseFill, BsFillPlayFill } from 'react-icons/bs'

import { IVideoPlayer } from './VideoPlayer.interface'

import { formatVideoTime } from '@/utils/formatVideoTime'

const VideoPlayer: FC<IVideoPlayer> = ({
	previewUrl,
	videoUrl,
	videoRef,
	toggleVideo,
	fullScreen,
	rewindVideo,
	forward,
	revert,
	status
}) => {
	const rewind = (event: MouseEvent<HTMLDivElement>): void => {
		const parent = event.currentTarget.getBoundingClientRect()
		const elementWidth = event.currentTarget.clientWidth
		const currentCord = event.clientX - parent.left + 6
		const curTime = (100 / elementWidth) * currentCord
		rewindVideo(curTime)
	}

	return (
		<div className={styles.player}>
			<video
				ref={videoRef}
				poster={`//img.youtube.com/vi/${previewUrl}/maxresdefault.jpg`}
				onClick={toggleVideo}
				onDoubleClick={fullScreen}
			>
				<source
					src={`http://drive.google.com/uc?export=watch&id=1${videoUrl}`}
				/>
			</video>
			<div className={styles.controls}>
				<div className={styles.controlerBtns}>
					<AiFillBackward
						onClick={() => revert(15)}
						className='cursor-pointer'
					/>
					{status.isPlaying ? (
						<BsFillPauseFill onClick={toggleVideo} className='w-6 h-6' />
					) : (
						<BsFillPlayFill onClick={toggleVideo} className='w-6 h-6' />
					)}
					<AiFillForward
						onClick={() => forward(15)}
						className='cursor-pointer'
					/>
				</div>
				<div onClick={rewind} className={styles.progressBar}>
					<div
						style={{
							width: `${status.progress}%`
						}}
					>
						<div></div>
					</div>
				</div>
				<div className={styles.timeControls}>
					{formatVideoTime(status.currentTime)} /
					{formatVideoTime(status.videoTime)}
				</div>
				<div onClick={fullScreen} className={styles.fullScreenControls}>
					<BiFullscreen className={styles.fullScreenBtn} />
				</div>
			</div>
		</div>
	)
}

export default VideoPlayer
