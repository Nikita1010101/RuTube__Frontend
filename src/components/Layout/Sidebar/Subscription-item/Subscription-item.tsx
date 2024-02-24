'use client'

import { FC } from 'react'
import Link from 'next/link'
import styles from './Subscription-item.module.scss'

import { Avatar } from '@/components/shared/Avatar/Avatar'
import { TUser } from '@/types/user.types'
import { LINKS } from '@/constants/links.config'

export const SubscriptionItem: FC<TUser> = ({ id, name, avatarUrl }) => {
  return (
    <Link
      title={name}
      href={LINKS.subscriptions(String(id))}
    >
      <div className={styles.subscription}>
        <Avatar type='subscription' imageUrl={avatarUrl} />
        <h2>{name}</h2>
      </div>
    </Link>
  )
}
