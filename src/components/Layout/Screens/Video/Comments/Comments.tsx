import { FC, useState } from 'react'
import styles from './Comments.module.scss'

import { IoMdSend } from 'react-icons/io'

import CommentItem from './Comment-item/CommentItem'
import { IComments } from './Comments.interface'
import { useAddCommment } from '@/hooks/useAddComment'

const Comments: FC<IComments> = ({ id, inputRef, comments }) => {
	const [inputValue, setInputValue] = useState<string>('')
	const { addComment, isLoading } = useAddCommment(id)

	const additionComment = () => {
		if (inputValue) {
			addComment(inputValue)
			setInputValue('')
		}
	}

	return (
		<div className={styles.comments}>
			<h2>Комментарии</h2>
			<div className={styles.line}></div>
			<div className={styles.content}>
				{comments?.map((comment, ind) => (
					<CommentItem key={ind} userId={id} {...comment} />
				))}
			</div>
			<div className={styles.input}>
				<input
					ref={inputRef}
					onChange={event => setInputValue(event.target.value)}
					onKeyUp={event => event.key === 'Enter' && additionComment()}
					value={inputValue}
					type='text'
					placeholder='Введите комментарий'
				/>
				<button onClick={additionComment} disabled={isLoading}>
					<IoMdSend />
				</button>
			</div>
		</div>
	)
}

export default Comments
