'use client'

import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import cn from 'classnames'

import styles from './MenuItem.module.scss'
import { ISidebarRoutes } from '../Sidebar.interface'

export const MenuItem: FC<ISidebarRoutes> = ({ title, route, picture, size }) => {
  const pathname = usePathname()

  return (
    <Link title={title} href={route}>
      <div
        className={cn(styles.sidebarItem, {
          [styles.active]: route === pathname,
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
