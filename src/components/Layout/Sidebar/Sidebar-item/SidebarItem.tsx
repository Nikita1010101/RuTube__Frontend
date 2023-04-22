import React, { FC } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import styles from './SidebarItem.module.scss'

import { ISidebarRoutes } from '../Sidebar.interface'

const SidebarItem: FC<ISidebarRoutes> = ({ title, route, picture, size }) => {
	const { asPath } = useRouter()
	return (
		<Link title={title} href={route}>
			<div
				className={`${styles.sidebarItem} ${
					route === asPath ? styles.active : ''
				}`}
			>
				<div>
					<Image src={picture} width={size} height={size} alt={title} />
				</div>
				<h2>{title}</h2>
			</div>
		</Link>
	)
}

export default SidebarItem
