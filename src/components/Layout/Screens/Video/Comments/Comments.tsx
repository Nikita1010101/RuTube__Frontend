'use client'

import { FC, useState } from 'react'
import { Send } from 'lucide-react'

import styles from './Comments.module.scss'
import { CommentItem } from './Comment-item/Comment-item'
import { IComments } from './Comments.interface'

// import { useComment } from '@/hooks/useComment'

export const Comments: FC<IComments> = ({
	avatarPath,
	userName,
	videoId,
	inputRef,
	comments
}) => {
	const [inputValue, setInputValue] = useState<string>('')

	const additionComment = (): void => {
		if (inputValue) {
			// addComment()
			setInputValue('')
		}
	}

	return (
		<div className={styles.comments}>
			<h2>Комментарии</h2>
			<div className={styles.line}></div>
			<div className={styles.content}>
				{comments?.map((comment, ind) => (
					<CommentItem key={ind} {...comment} />
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
				<button onClick={additionComment} 
				// disabled={isLoading}
				>
					<Send />
				</button>
			</div>
		</div>
	)
}
