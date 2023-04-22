import React, { FC, useState } from 'react'
import styles from './Comments.module.scss'
import CommentItem from './Comment-item/CommentItem'
import { IComments } from './Comments.interface'
import { IoMdSend } from 'react-icons/io'
import { useAuth } from '@/hooks/useAuth'
import { useApi } from '@/hooks/useApi'

const Comments: FC<IComments> = ({ id, inputRef, comments }) => {
	const [inputValue, setInputValue] = useState<string>('')
	const { profile } = useAuth()
	const { updateVideo } = useApi.UpdateVideo()
	const { video } = useApi.GetVideoById(id)

	const addComment = () => {
		if (profile) {
			const updatedVideo = Object.assign({}, video)
			updatedVideo.comments = [
				...updatedVideo.comments,
				{
					user: { name: profile.name, photo: profile.photo },
					content: inputValue
				}
			]
			updateVideo(updatedVideo)
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
					value={inputValue}
					onChange={event => setInputValue(event.target.value)}
					type='text'
					placeholder='Введите комментарий'
				/>
				<button onClick={addComment}>
					<IoMdSend />
				</button>
			</div>
		</div>
	)
}

export default Comments
