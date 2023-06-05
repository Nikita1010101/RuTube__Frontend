import { FC } from 'react'
import styles from './Discover.module.scss'

import { DiscoverLoader } from '@/components/UI/Skeletons/DiscoverLoader/DiscoverLoader'
import { DiscoverItem } from './Discover-item/DiscoverItem'
import { IDiscover } from './Discover.interface'

export const Discover: FC<IDiscover> = ({
	videos,
	popularVideo,
	randomVideo
}) => {
	return (
		<div className={styles.discover}>
			{videos ? (
				<>
					<DiscoverItem type={'most popular'} video={popularVideo} />
					<DiscoverItem type={'random'} video={randomVideo} />
				</>
			) : (
				<>
					<DiscoverLoader type={'most popular'} />
					<DiscoverLoader type={'random'} />
				</>
			)}
		</div>
	)
}
