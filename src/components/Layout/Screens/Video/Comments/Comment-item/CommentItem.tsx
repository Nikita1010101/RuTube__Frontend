import { FC } from 'react'
import styles from './CommentItem.module.scss'

import { FaUserAlt } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'

import Avatar from '@/components/UI/Avatar/Avatar'
import { useDeleteComment } from '@/hooks/useDeleteComment'
import { ICommentItem } from './CommentItem.interface'

const CommentItem: FC<ICommentItem> = ({
	userId,
	id: commentId,
	user: { name, photo },
	date,
	content
}) => {
	const { deleteComment } = useDeleteComment(userId)

	const checkDeleteComment = () => {
		if (confirm('Вы хотите удалить комментарий?')) deleteComment(commentId)
	}

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
					<h5>{date}</h5>
				</div>
				<p>{content}</p>
				<MdDelete onClick={checkDeleteComment} title='Удалить комментарий' />
			</div>
		</div>
	)
}

export default CommentItem
