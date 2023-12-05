'use client'

import { FC } from 'react'
import Link from 'next/link'
import styles from './Subscription-item.module.scss'

import { Avatar } from '@/components/UI/Avatar/Avatar'
import { IUser } from '@/types/user.interface'

export const SubscriptionItem: FC<IUser> = ({ id, name, avatarPath }) => {
  return (
    <Link
      title={name}
      href={`/subscription/${id}`}
    >
      <div className={styles.subscription}>
        <Avatar type='subscription' imagePath={avatarPath} />
        <h2>{name}</h2>
      </div>
    </Link>
  )
}
