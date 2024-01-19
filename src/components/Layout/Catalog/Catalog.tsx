'use client'

import { FC } from 'react'

import styles from './Catalog.module.scss'
import { CatalogItemLoader } from '@/components/UI/Skeletons/CatalogItemLoader/CatalogItemLoader'
import { CatalogItem } from '@/components/Layout/Catalog/Catalog-item/CatalogItem'
import { ICatalog } from '@/components/Layout/Catalog/Catalog.interface'

export const Catalog: FC<ICatalog> = ({ videos, isLoading, title }) => {
  const fakeVideosList = [...new Array(8)]

  return (
    <div className={styles.catalog}>
      <h1>{videos?.length !== 0 ? title : 'Список пуст'}</h1>
      <div className={styles.content}>
        {!isLoading
          ? videos?.map((item) => <CatalogItem key={item.id} {...item} />)
          : fakeVideosList.map((_, ind) => <CatalogItemLoader key={ind} />)}
      </div>
    </div>
  )
}
