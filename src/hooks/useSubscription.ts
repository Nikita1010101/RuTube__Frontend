import { IUser } from '@/types/user.interface'
import { useAuth } from './useAuth'
import { useApi } from './useApi'

export const useSubscription = (user?: IUser) => {
	const { profile } = useAuth()
	const { updateUser, isLoading } = useApi.updateUser()

	const isSubscribe = profile?.subscriptions.some(
		subscribeId => user?.id === subscribeId
	)
	const updateSubscription = () => {
		if (profile) {
			let updatedUser = Object.assign({}, user)
			let updateProfile = Object.assign({}, profile)

			if (isSubscribe) {
				updateProfile.subscriptions = updateProfile.subscriptions.filter(
					subscribeId => user?.id !== subscribeId
				)
				updatedUser.subscribers = updatedUser.subscribers.filter(
					subscribeId => profile?.id !== subscribeId
				)
			} else {
				updateProfile.subscriptions = [
					...updateProfile?.subscriptions,
					String(user?.id)
				]
				updatedUser.subscribers = [
					...updatedUser.subscribers,
					String(profile?.id)
				]
			}

			setTimeout(() => {
				updateUser(updateProfile)
			}, 100)
			updateUser(updatedUser)
		}
	}

	return { updateSubscription, isLoading, isSubscribe }
}
