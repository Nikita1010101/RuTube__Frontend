import React, { FC } from 'react'
import styles from './SubscribeButton.module.scss'

import { ISubscribeButton } from './SubscribeButton.interface'

import { useAuth } from '@/hooks/useAuth'
import { useApi } from '@/hooks/useApi'

import { FaUserPlus } from 'react-icons/fa'

const SubscribeButton: FC<ISubscribeButton> = ({ user }) => {
	const { profile } = useAuth()
	const { updateUser, isLoading } = useApi.UpdateUser()

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

	return (
		<div
			onClick={() => updateSubscription()}
			className={`${styles.btnSubscribe} ${
				isSubscribe ? styles.subscribed : ''
			} ${isLoading ? styles.loading : ''} `}
			title={isSubscribe ? 'Отписаться' : 'Подписаться'}
		>
			<FaUserPlus />
			<span>
				{isLoading ? 'Загрузка' : isSubscribe ? 'Вы подписаны' : 'Подписаться'}
			</span>
		</div>
	)
}

export default SubscribeButton
