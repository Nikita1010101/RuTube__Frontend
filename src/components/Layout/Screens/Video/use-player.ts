import { useEffect, useState, useRef, useCallback } from 'react'

import { IVideoElement } from '@/components/Layout/Screens/Video/Video.interface'
import { TUsePlayer } from '@/types/hook.types'

export const usePlayer = (): TUsePlayer => {
	const videoRef = useRef<IVideoElement>(null)
	const inputRef = useRef<HTMLInputElement>(null)

	const [isPlaying, setIsPlaying] = useState<boolean>(false)
	const [currentTime, setCurrentTime] = useState<number>(0)
	const [videoTime, setVideoTime] = useState<number>(0)
	const [progress, setProgress] = useState<number>(0)

	useEffect(() => {
		const originalDuration = videoRef.current?.duration
		if (originalDuration) setVideoTime(originalDuration)
	}, [videoRef.current?.duration])

	const toggleVideo = useCallback(() => {
		if (!isPlaying) {
			videoRef.current?.play()
			setIsPlaying(true)
		} else {
			videoRef.current?.pause()
			setIsPlaying(false)
		}
	}, [isPlaying])

	const rewindVideo = (time: number) => {
		if (videoRef.current)
			videoRef.current.currentTime = (videoTime / 100) * time
	}

	const forward = (time: number) => {
		if (videoRef.current) videoRef.current.currentTime += time
	}

	const revert = (time: number) => {
		if (videoRef.current) videoRef.current.currentTime -= time
	}

	const fullScreen = () => {
		const video = videoRef.current
		if (!video) return

		if (video.requestFullscreen) {
			video.requestFullscreen()
		} else if (video.msRequestFullScreen) {
			video.msRequestFullScreen()
		} else if (video.mozRequestFullScreen) {
			video.mozRequestFullScreen()
		} else if (video.webkitRequestFullScreen) {
			video.webkitRequestFullScreen()
		}
	}

	useEffect(() => {
		const video = videoRef.current
		if (!video) return

		const updateProgress = () => {
			setCurrentTime(video.currentTime)
			setProgress((video.currentTime / videoTime) * 100)
		}

		video.addEventListener('timeupdate', updateProgress)

		return () => {
			video.removeEventListener('timeupdate', updateProgress)
		}
	}, [videoTime])

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			switch (event.key) {
				case 'ArrowRight':
					forward(5)
					break
				case 'ArrowLeft':
					revert(5)
					break
				case 'l':
					forward(10)
					break
				case 'j':
					revert(10)
					break
				case ' ':
					event.preventDefault()
					toggleVideo()
					break
				case 'f':
					fullScreen()
					break
				case 'k':
					toggleVideo()
					break
				default:
					return
			}
		}

		const input = inputRef.current

		input?.addEventListener('keydown', event => {
			event.stopPropagation()
		})

		document.addEventListener('keydown', handleKeyDown)

		return () => {
			document.removeEventListener('keydown', handleKeyDown),
				input?.addEventListener('keydown', event => {
					event.stopPropagation()
				})
		}
	}, [toggleVideo])

	return {
		videoRef,
		inputRef,
		toggleVideo,
		rewindVideo,
		fullScreen,
		forward,
		revert,
		status: {
			isPlaying,
			progress,
			currentTime,
			videoTime
		}
	}
}
