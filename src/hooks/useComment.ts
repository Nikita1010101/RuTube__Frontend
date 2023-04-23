import { useApi } from "./useApi"
import { useAuth } from "./useAuth"

export const useCommment = (id: string, inputValue: string) => {
  const { profile } = useAuth()
	const { updateVideo, isLoading } = useApi.updateVideo()
	const { video } = useApi.getVideoById(id)

	const addComment = () => {
		if (profile) {
			const updatedVideo = Object.assign({}, video)
			updatedVideo.comments = [
				...updatedVideo.comments,
				{
					user: { name: profile.name, photo: profile.photo },
					content: inputValue
				}
			]
			updateVideo(updatedVideo)
		}
	}

  return { addComment, isLoading }
}