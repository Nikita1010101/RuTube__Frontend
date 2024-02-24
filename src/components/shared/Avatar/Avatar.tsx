'use client'

import { FC } from 'react'
import Image from 'next/image'
import { CircleUser } from 'lucide-react'
import cn from 'classnames'

import styles from './Avatar.module.scss'
import { IAvatar } from './Avatar.interface'

export const Avatar: FC<IAvatar> = ({ type, imageUrl }) => {
  return (
    <div className={cn(styles.avatar, styles[type])}>
      {imageUrl !== '' ? (
        <Image
          src={imageUrl || ''}
          width={100}
          height={100}
          alt="Аватар"
          quality={100}
        />
      ) : (
        <CircleUser />
      )}
    </div>
  )
}
