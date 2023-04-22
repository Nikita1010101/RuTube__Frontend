import { FC, useEffect, useState } from 'react'
import React from 'react'
import styles from './Discover.module.scss'
import DiscoverLoader from '@/components/UI/Skeletons/DiscoverLoader/DiscoverLoader'
import DiscoverVideo from './Discover-item/DiscoverItem'
import { IDiscover } from './Discover.interface'

const Discover: FC<IDiscover> = ({ videos, popularVideo, randomVideo }) => {
	return (
		<div className={styles.discover}>
			{videos ? (
				<>
					<DiscoverVideo type={'most popular'} video={popularVideo} />
					<DiscoverVideo type={'random'} video={randomVideo} />
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

export default Discover
