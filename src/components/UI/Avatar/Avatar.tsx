import { FC } from 'react'
import styles from './Avatar.module.scss'

import { FaUserAlt } from 'react-icons/fa'

import { IAvatar } from './Avatar.interface'

export const Avatar: FC<IAvatar> = ({ type, imagePath }) => {
	return (
		<div className={`${styles.avatar} ${styles[type]}`}>
			{imagePath !== '' ? (
				<img src={imagePath} alt={'Аватар'} />
			) : (
				<FaUserAlt />
			)}
		</div>
	)
}
