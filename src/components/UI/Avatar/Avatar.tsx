import React, { FC } from 'react'
import { IAvatar } from './Avatar.interface'
import styles from './Avatar.module.scss'

const Avatar: FC<IAvatar> = ({ type, imageUrl }) => {
	return (
		<div className={`${styles.avatar} ${styles[type]}`}>
			<img src={imageUrl} alt={'Аватар'} />
		</div>
	)
}

export default Avatar
