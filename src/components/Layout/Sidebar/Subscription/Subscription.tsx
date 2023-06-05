import { FC } from 'react'
import Link from 'next/link'
import styles from './Subscription.module.scss'

import { Avatar } from '@/components/UI/Avatar/Avatar'
import { IUser } from '@/types/user.interface'

export const Subscription: FC<IUser> = ({ id, name, avatarPath }) => {
	return (
		<Link title={name} href={`/my-subscriptions/${id}`}>
			<div className={styles.subscription}>
				<Avatar type='subscription' imagePath={avatarPath} />
				<h2>{name}</h2>
			</div>
		</Link>
	)
}
