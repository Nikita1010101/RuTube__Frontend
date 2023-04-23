import { useApi } from "./useApi"
import { useAuth } from "./useAuth"

export const useLike = (id: string) => {
  const { profile } = useAuth()
	const { video } = useApi.getVideoById(id)
	const { updateVideo, isLoading } = useApi.updateVideo()

	const isLike = video?.likes.some(id => profile?.id === id)

	const updateLike = () => {
		if (profile) {
			let updatedVideo = Object.assign({}, video)

			if (isLike) {
				updatedVideo.likes = updatedVideo.likes.filter(
					likeId => profile?.id !== likeId
				)
			} else {
				updatedVideo.likes = [...updatedVideo.likes, String(profile?.id)]
			}

			updateVideo(updatedVideo)
		}
	}

  return { updateLike, isLoading, isLike }
}