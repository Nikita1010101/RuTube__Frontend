import { FC } from 'react'
import styles from './CommentItem.module.scss'

import { FaUserAlt } from 'react-icons/fa'

import Avatar from '@/components/UI/Avatar/Avatar'
import { IUserComments } from '@/types/video.interface'
import { months } from '../Comments.data'

const CommentItem: FC<IUserComments> = ({ user: { name, photo }, content }) => {
	const date = new Date()
	return (
		<div className={styles.commentItem}>
			{photo !== '' ? (
				<Avatar type='comment' imageUrl={photo} />
			) : (
				<FaUserAlt className={styles.avatar} />
			)}
			<div className={styles.content}>
				<div>
					<h3>{name}</h3>
					<h5>
						{[
							date.getDate() < 10 ? '0' + date.getDate() : date.getDate(),
							months[date.getMonth()],
							date.getFullYear()
						].join(' ')}
					</h5>
				</div>
				<p>{content}</p>
			</div>
		</div>
	)
}

export default CommentItem
