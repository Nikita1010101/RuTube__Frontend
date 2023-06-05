import { IUseLike } from '@/types/hook.interface'
import { videoApi } from '@/store/api/video.api'

import { useAuth } from './useAuth'

export const useLike = (userId: number = 0, videoId: number = 0): IUseLike => {
	const body = { userId, videoId }

	const { profile } = useAuth()
	const { data: isLike } = videoApi.useCheckLikeQuery({ userId, videoId })
	const [addLike, { isLoading: addLoading }] = videoApi.useAddLikeMutation()
	const [removeLike, { isLoading: removeLoading }] =
		videoApi.useRemoveLikeMutation()

	let isLoading: boolean = addLoading || removeLoading

	console.log(isLike)

	const updateLike = async (): Promise<void> => {
		if (profile) {
			if (isLike) {
				removeLike(body)
			} else {
				addLike(body)
			}
		} else {
			alert('Для того чтобы поставить лайк, вам необходимо авторизироваться!')
		}
	}

	return { updateLike, isLoading, isLike }
}
