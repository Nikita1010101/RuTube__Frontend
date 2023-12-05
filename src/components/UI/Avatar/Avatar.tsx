'use client'

import { FC } from 'react'
import Image from 'next/image'
import cn from 'classnames'

import styles from './Avatar.module.scss'
import { FaUserAlt } from 'react-icons/fa'
import { IAvatar } from './Avatar.interface'

export const Avatar: FC<IAvatar> = ({ type, imagePath }) => {
	// console.log(imagePath)
	return (
		<div className={cn(styles.avatar, styles[type])}>
			{imagePath !== '' ? (
				<Image
					src={imagePath || ''}
					width={100}
					height={100}
					alt={'Аватар'}
					quality={100}
				/>
			) : (
				<FaUserAlt />
			)}
		</div>
	)
}
