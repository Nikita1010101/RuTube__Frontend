import React, { FC } from 'react'
import Link from 'next/link'
import styles from './Subscription.module.scss'

import { IVideo } from '@/types/video.interface'
import Avatar from '@/components/UI/Avatar/Avatar'

const Subscription: FC<IVideo> = ({ userId, user: { photo, name } }) => {
	return (
		<Link title={name} href={`/my-subscriptions/${userId}`}>
			<div className={styles.subscription}>
				<Avatar
					type='subscription'
					imageUrl={`https://yt3.ggpht.com/${photo}=s88-c-k-c0x00ffffff-no-rj`}
				/>
				<h2>{name}</h2>
			</div>
		</Link>
	)
}

export default Subscription
