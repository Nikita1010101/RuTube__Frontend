'use client'

import { FC } from 'react'

import styles from './Catalog.module.scss'
import { CatalogItemLoader } from '@/components/shared/Skeletons/CatalogItemLoader/CatalogItemLoader'
import { CatalogItem } from './Catalog-item/Catalog-item'
import { ICatalog } from '../Catalog/Catalog.interface'

export const Catalog: FC<ICatalog> = ({
  videos,
  isLoading,
  title,
  showOptions,
}) => {
  const fakeVideosList = [...new Array(8)]

  return (
    <div className={styles.catalog}>
      <h1>{videos?.length !== 0 ? title : 'Список пуст'}</h1>
      <div className={styles.content}>
        {!isLoading
          ? videos?.map((item) => (
              <CatalogItem key={item.id} {...item} showOptions={showOptions} />
            ))
          : fakeVideosList.map((_, ind) => <CatalogItemLoader key={ind} />)}
      </div>
    </div>
  )
}
