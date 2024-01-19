'use client'

import { FC } from 'react'
import Link from 'next/link'
import styles from './Subscription-item.module.scss'

import { Avatar } from '@/components/UI/Avatar/Avatar'
import { TUser } from '@/types/user.types'

export const SubscriptionItem: FC<TUser> = ({ id, name, avatarUrl }) => {
  return (
    <Link
      title={name}
      href={`/subscription/${id}`}
    >
      <div className={styles.subscription}>
        <Avatar type='subscription' imagePath={avatarUrl} />
        <h2>{name}</h2>
      </div>
    </Link>
  )
}
