'use client'

import { FC } from 'react'
import styles from './Discover.module.scss'

import { DiscoverLoader } from '@/components/shared/Skeletons/DiscoverLoader/DiscoverLoader'
import { DiscoverItem } from './Discover-item/Discover-item'
import { IDiscover } from './Discover.interface'

export const Discover: FC<IDiscover> = ({ popularVideo, randomVideo }) => {
  return (
    <div className={styles.discover}>
      {popularVideo && randomVideo ? (
        <>
          <DiscoverItem type={'most popular'} video={popularVideo} />
          <DiscoverItem type={'random'} video={randomVideo} />
        </>
      ) : (
        <>
          <DiscoverLoader type={'most popular'} />
          <DiscoverLoader type={'random'} />
        </>
      )}
    </div>
  )
}
