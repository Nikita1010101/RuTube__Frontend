'use client'

import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import cn from 'classnames'

import styles from './Menu-item.module.scss'
import { ISidebarRoutes } from '../Sidebar.interface'

export const MenuItem: FC<ISidebarRoutes> = ({ Icon, title, link }) => {
  const pathname = usePathname()

  return (
    <Link title={title} href={link}>
      <div
        className={cn(styles.sidebarItem, {
          [styles.active]: link === pathname,
        })}
      >
        <div>
          <Icon size={18} strokeWidth={3} />
        </div>
        <h2>{title}</h2>
      </div>
    </Link>
  )
}
