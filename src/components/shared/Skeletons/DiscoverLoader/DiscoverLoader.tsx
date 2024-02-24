'use client'

import { FC } from 'react'
import cn from 'classnames'
import ContentLoader from 'react-content-loader'
import styles from './DiscoverLoader.module.scss'

import { IDiscoverLoader } from './DiscoverLoader.interface'

export const DiscoverLoader: FC<IDiscoverLoader> = ({ type }) => {
	return (
		<>
			<div
				className={cn(styles.discoverLoader, {
					[styles.mostPopular]: type === 'most popular',
					[styles.random]: type === 'random'
				})}
			>
				{type === 'most popular' ? (
					<>
						<ContentLoader
							speed={1}
							width={757}
							height={384}
							viewBox='0 0 757 384'
							backgroundColor='#888'
							foregroundColor='#bbb'
						>
							<rect x='32' y='67' rx='3' ry='3' width='175' height='25' />
							<rect x='32' y='103' rx='3' ry='3' width='200' height='25' />
							<rect x='32' y='138' rx='3' ry='3' width='150' height='25' />
							<circle cx='52' cy='240' r='20' />
							<rect x='32' y='278' rx='3' ry='3' width='200' height='18' />
							<rect x='32' y='305' rx='3' ry='3' width='75' height='13' />
							<rect x='122' y='305' rx='3' ry='3' width='75' height='13' />
							<rect x='693' y='350' rx='4' ry='4' width='52' height='21' />
						</ContentLoader>
					</>
				) : (
					<>
						<ContentLoader
							speed={1}
							width={384}
							height={384}
							viewBox='0 0 384 384'
							backgroundColor='#888'
							foregroundColor='#bbb'
						>
							<rect x='32' y='69' rx='3' ry='3' width='175' height='22' />
							<rect x='32' y='101' rx='3' ry='3' width='200' height='22' />
							<rect x='32' y='133' rx='3' ry='3' width='150' height='22' />
							<circle cx='52' cy='240' r='20' />
							<rect x='32' y='278' rx='3' ry='3' width='200' height='18' />
							<rect x='32' y='305' rx='3' ry='3' width='75' height='13' />
							<rect x='122' y='305' rx='3' ry='3' width='75' height='13' />
							<rect x='320' y='350' rx='4' ry='4' width='52' height='21' />
						</ContentLoader>
					</>
				)}
			</div>
		</>
	)
}
