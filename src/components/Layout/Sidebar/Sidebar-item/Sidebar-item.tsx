import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import cn from 'classnames'
import styles from './Sidebar-item.module.scss'

import { ISidebarRoutes } from '../Sidebar.interface'

import { useRouter } from 'next/router'

export const SidebarItem: FC<ISidebarRoutes> = ({
	title,
	route,
	picture,
	size
}) => {
	const { asPath } = useRouter()
	console.log(picture)
	return (
		<Link title={title} href={route}>
			<div
				className={cn(styles.sidebarItem, {
					[styles.active]: route === asPath
				})}
			>
				<div>
					<Image
						src={picture}
						width={size}
						height={size}
						alt={title}
						style={{ minHeight: `${size}`, minWidth: `${size}` }}
						quality={100}
					/>
				</div>
				<h2>{title}</h2>
			</div>
		</Link>
	)
}
