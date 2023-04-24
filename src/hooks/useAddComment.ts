import { useApi } from './useApi'
import { useAuth } from './useAuth'

export const useAddCommment = (id: string) => {
	const { profile } = useAuth()
	const { updateVideo, isLoading } = useApi.updateVideo()
	const { video } = useApi.getVideoById(id)

	const date = new Date()
	const currentDate = `${
		date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
	}.${
		+date.getMonth() + 1 < 10
			? '0' + (+date.getMonth() + 1)
			: +date.getMonth() + 1
	}.${date.getFullYear()} ${
		date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
	}:${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}`

	const addComment = (inputValue: string) => {
		if (profile) {
			const updatedVideo = Object.assign({}, video)
			updatedVideo.comments = [
				...updatedVideo.comments,
				{
					id: String(Date.now()),
					user: { name: profile.name, photo: profile.photo },
					date: currentDate,
					content: inputValue
				}
			]
			updateVideo(updatedVideo)
		}
	}

	return { addComment, isLoading }
}
