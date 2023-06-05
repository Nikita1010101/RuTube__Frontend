import { IComment } from '@/types/comment.interface'
import { IUseComment } from '@/types/hook.interface'

import { commentApi } from '@/store/api/comment.api'

import { useAuth } from './useAuth'

export const useComment = (
	avatarPath: string = '',
	userName: string = '',
	content: string = '',
	videoId: number = 0
): IUseComment => {
	const body: IComment = { avatarPath, userName, content, videoId }

	const { profile } = useAuth()
	const [createComment, { isLoading: addLoading }] =
		commentApi.useCreateCommentMutation()
	const [removeComment, { isLoading: removeLoading }] =
		commentApi.useRemoveCommentMutation()

	let isLoading: boolean = addLoading || removeLoading

	const addComment = (): void => {
		if (profile) {
			createComment(body)
		} else {
			alert('Для написания комментария, вам необходимо авторизироваться!')
		}
	}

	const deleteComment = (): void => {
		removeComment(body)
	}

	return { addComment, deleteComment, isLoading }
}
