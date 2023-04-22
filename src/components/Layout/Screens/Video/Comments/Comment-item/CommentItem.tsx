import React, { FC } from 'react'
import styles from './CommentItem.module.scss'
import { IUserComments } from '@/types/video.interface'
import Avatar from '@/components/UI/Avatar/Avatar'
import { FaUserAlt } from 'react-icons/fa'

const CommentItem: FC<IUserComments> = ({ user: { name, photo }, content }) => {
	return (
		<div className={styles.commentItem}>
			{photo !== '' ? (
				<Avatar type='comment' imageUrl={photo} />
			) : (
				<FaUserAlt className={styles.avatar} />
			)}
			<div className={styles.content}>
				<h3>{name}</h3>
				<p>{content}</p>
			</div>
		</div>
	)
}

export default CommentItem
