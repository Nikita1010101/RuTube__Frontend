import { FC } from 'react'
import Link from 'next/link'
import styles from './Subscription.module.scss'

import { Avatar } from '@/components/UI/Avatar/Avatar'
import { TUser } from '@/types/user.types'

export const Subscription: FC<TUser> = ({ id, name }) => {
	return (
		<Link title={name} href={`/my-subscriptions/${id}`}>
			<div className={styles.subscription}>
				{/* <Avatar type='subscription' imagePath={avatarPath} /> */}
				<h2>{name}</h2>
			</div>
		</Link>
	)
}
