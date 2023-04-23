import { FC } from 'react'
import styles from './SubscribeButton.module.scss'

import { FaUserPlus } from 'react-icons/fa'

import { ISubscribeButton } from './SubscribeButton.interface'

import { useSubscription } from '@/hooks/useSubscription'

const SubscribeButton: FC<ISubscribeButton> = ({ user }) => {
	const { updateSubscription, isLoading, isSubscribe } = useSubscription(user)

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
