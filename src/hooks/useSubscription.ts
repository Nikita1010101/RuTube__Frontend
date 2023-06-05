import { IUseSubscription } from '@/types/hook.interface'

import { userApi } from '@/store/api/user.api'

import { useAuth } from './useAuth'

export const useSubscription = (
	userId: number,
	channelId: number
): IUseSubscription => {
	const body = { userId, channelId }

	const { profile } = useAuth()
	const { data: isSubscribe } = userApi.useCheckSubscriptionQuery({
		userId,
		channelId
	})
	const [addSubscription, { isLoading: addLoading }] =
		userApi.useAddSubscriptionMutation()
	const [removeSubscription, { isLoading: removeLoading }] =
		userApi.useRemoveSubscriptionMutation()

	let isLoading: boolean = addLoading || removeLoading

	const updateSubscription = (): void => {
		if (profile) {
			if (isSubscribe) {
				removeSubscription(body)
			} else {
				addSubscription(body)
			}
		} else {
			alert(
				'Для того чтобы подписаться на канал, вам необходимо авторизироваться!'
			)
		}
	}

	return { updateSubscription, isLoading, isSubscribe }
}
