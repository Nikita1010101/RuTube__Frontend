import React, { FC } from 'react'
import Link from 'next/link'
import styles from './Subscription.module.scss'

import Avatar from '@/components/UI/Avatar/Avatar'
import { IVideo } from '@/types/video.interface'

const Subscription: FC<IVideo> = ({ userId, user: { photo, name } }) => {
	return (
		<Link title={name} href={`/my-subscriptions/${userId}`}>
			<div className={styles.subscription}>
				<Avatar
					type='subscription'
					imageUrl={`http://drive.google.com/uc?export=view&id=1${photo}`}
				/>
				<h2>{name}</h2>
			</div>
		</Link>
	)
}

export default Subscription
