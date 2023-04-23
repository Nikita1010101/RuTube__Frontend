import { FC } from 'react'
import styles from './Avatar.module.scss'

import { IAvatar } from './Avatar.interface'

const Avatar: FC<IAvatar> = ({ type, imageUrl }) => {
	return (
		<div className={`${styles.avatar} ${styles[type]}`}>
			<img src={imageUrl} alt={'Аватар'} />
		</div>
	)
}

export default Avatar
