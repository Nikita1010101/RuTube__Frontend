'use client'

import { FC } from 'react'
import ContentLoader from 'react-content-loader'
import styles from './CatalogItemLoader.module.scss'

export const CatalogItemLoader: FC = () => {
	return (
		<div className={styles.content}>
			<ContentLoader
				speed={1}
				width={'100%'}
				height={275}
				viewBox='0 0 100% 100%'
				backgroundColor='#888'
				foregroundColor='#bbb'
			>
				<rect x='78%' y='3%' rx='4' ry='4' width='18.5%' height='20' />
				<circle cx='87.5%' cy='55.5%' r='20' />
				<rect x='12' y='169' rx='3' ry='3' width='42%' height='20' />
				<rect x='12' y='200' rx='3' ry='3' width='80%' height='15' />
				<rect x='12' y='222' rx='3' ry='3' width='68%' height='15' />
				<rect x='12' y='252' rx='3' ry='3' width='27%' height='13' />
				<rect x='102' y='252' rx='3' ry='3' width='27%' height='13' />
			</ContentLoader>
		</div>
	)
}
