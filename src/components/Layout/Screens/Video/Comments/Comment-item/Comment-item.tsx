'use client'

import { FC } from 'react'
import styles from './Comment-item.module.scss'

import { FaUserAlt } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'

import { Avatar } from '@/components/shared/Avatar/Avatar'
import { TComment } from '@/types/comment.types'

// import { useAuth } from '@/hooks/useAuth'

export const CommentItem: FC<TComment> = ({
	content,
	createdAt,
	videoId
}) => {
	// const { profile } = useAuth()
	// const { deleteComment } = useComment(avatarPath, userName, content, videoId)

	// const checkDeleteComment = (): void => {
	// 	if (confirm('Вы хотите удалить комментарий?')) deleteComment()
	// }

	const time = createdAt
		?.split('T')
		.map((item, ind) => {
			if (ind === 0) {
				return item.split('-').reverse().join('.')
			}

			if (ind === 1) {
				return item
					.slice(0, 5)
					.split(':')
					.map((item, ind) => (ind === 0 ? +item + 5 : item))
					.join(':')
			}
		})
		.reverse()
		.join(' - ')

	return (
		<div className={styles.commentItem}>
			{/* {avatarPath ? (
				<Avatar type='comment' imageUrl={avatarPath} />
			) : (
				<FaUserAlt className={styles.avatar} />
			)} */}
			<div className={styles.content}>
				{/* <h3>{userName}</h3> */}
				<p>{content}</p>
				<div>
					<h5>{time}</h5>
					{/* {profile && (
						<MdDelete
							onClick={checkDeleteComment}
							title='Удалить комментарий'
						/>
					)} */}
				</div>
			</div>
		</div>
	)
}
