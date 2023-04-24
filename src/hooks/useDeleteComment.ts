import { useApi } from './useApi'
import { useAuth } from './useAuth'

export const useDeleteComment = (userId: string) => {
	const { profile } = useAuth()
	const { updateVideo, isLoading } = useApi.updateVideo()
	const { video } = useApi.getVideoById(userId)

	const deleteComment = (commentId: string) => {
		if (profile) {
			const updatedVideo = Object.assign({}, video)
			updatedVideo.comments = updatedVideo.comments.filter(
				comment => commentId !== comment.id
			)
			updateVideo(updatedVideo)
		}
	}

	return { deleteComment, isLoading }
}
