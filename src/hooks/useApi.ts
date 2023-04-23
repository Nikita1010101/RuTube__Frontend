import { commentApi } from '@/store/api/comment.api'
import { userApi } from '@/store/api/user.api'
import { videoApi } from '@/store/api/video.api'

export const useApi = {
	getAllUsers() {
		const { data: users, isLoading } = userApi.useGetAllUsersQuery(null)
		return { users, isLoading }
	},

	getUserById(id: string) {
		const { data: user, isLoading } = userApi.useGetUserByIdQuery(id)
		return { user, isLoading }
	},

	updateUser() {
		const [updateUser, { isLoading }] = userApi.useUpdateUserMutation()
		return { updateUser, isLoading }
	},

	addUser() {
		const [addUser, { isLoading }] = userApi.useAddUserMutation()
		return { addUser, isLoading }
	},

	getAllVideos() {
		const { data: videos, isLoading } = videoApi.useGetAllVideosQuery(null)
		return { videos, isLoading }
	},

	getVideoById(id: string) {
		const { data: video, isLoading } = videoApi.useGetVideoByIdQuery(id)
		return { video, isLoading }
	},

	updateVideo() {
		const [updateVideo, { isLoading }] = videoApi.useUpdateVideoMutation()
		return { updateVideo, isLoading }
	},

	getCommentById(id: string) {
		const { data: comments, isLoading } = commentApi.useGetCommentByIdQuery(id)
		return { comments, isLoading }
	},

	addComment() {
		const [addComment, { isLoading }] = commentApi.useAddCommentMutation()
		return { addComment, isLoading }
	},

	editComment() {
		const [editComment, { isLoading }] = commentApi.useEditCommentMutation()
		return { editComment, isLoading }
	}
}
