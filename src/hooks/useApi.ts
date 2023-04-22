import { userApi } from '@/store/api/user.api'
import { videoApi } from '@/store/api/video.api'

export const useApi = {
	GetAllUsers() {
		const { data: users, isLoading } = userApi.useGetAllUsersQuery(null)
		return { users, isLoading }
	},

	GetUserById(id: string) {
		const { data: user, isLoading } = userApi.useGetUserByIdQuery(id)
		return { user, isLoading }
	},

	UpdateUser() {
		const [updateUser, { isLoading }] = userApi.useUpdateUserMutation()
		return { updateUser, isLoading }
	},

	AddUser() {
		const [addUser, { isLoading }] = userApi.useAddUserMutation()
		return { addUser, isLoading }
	},

	GetAllVideos() {
		const { data: videos, isLoading } = videoApi.useGetAllVideosQuery(null)
		return { videos, isLoading }
	},

	GetVideoById(id: string) {
		const { data: video, isLoading } = videoApi.useGetVideoByIdQuery(id)
		return { video, isLoading }
	},

	UpdateVideo() {
		const [updateVideo, { isLoading }] = videoApi.useUpdateVideoMutation()
		return { updateVideo, isLoading }
	}
}
