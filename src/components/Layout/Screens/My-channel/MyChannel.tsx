import React, { FC, useState } from 'react'
import styles from './MyChannel.module.scss'

import { FaUserAlt } from 'react-icons/fa'

import Layout from '../../Layout'
import Catalog from '../Home/Catalog/Catalog'

import { useAuth } from '@/hooks/useAuth'
import { useApi } from '@/hooks/useApi'

import Avatar from '@/components/UI/Avatar/Avatar'
import { AiFillEdit } from 'react-icons/ai'
import EditForm from './Edit-form/EditForm'

const MyChannel: FC = () => {
	const [isEditForm, setIsEditForm] = useState<Boolean>(false)
	const { profile, logout } = useAuth()
	const { videos } = useApi.getAllVideos()
	const likedVideos = videos?.filter(video =>
		video?.likes.includes(String(profile?.id))
	)

	return (
		<Layout title='Мой канал' description='Мой канал'>
			<div className={styles.myChannel}>
				<div className={styles.wrapper}>
					<div className={styles.aboutChannel}>
						<div className={styles.avatar}>
							{profile?.photo !== '' ? (
								<Avatar type='profile' imageUrl={profile?.photo} />
							) : (
								<FaUserAlt />
							)}
						</div>
						<div className={styles.profile}>
							<h2>{profile?.name}</h2>
							<AiFillEdit onClick={() => setIsEditForm(true)} />
							<div
								onClick={() => setIsEditForm(false)}
								className={`${isEditForm && styles.active}`}
							>
								<EditForm />
							</div>
						</div>
					</div>
					<div onClick={logout} className={styles.btnExit}>
						Выйти
					</div>
				</div>
				<div className={styles.description}>
					<p>
						{profile?.aboutChannel
							? profile?.aboutChannel
							: 'Описание профиля.'}
					</p>
				</div>
				<Catalog videos={likedVideos} />
			</div>
		</Layout>
	)
}

export default MyChannel
