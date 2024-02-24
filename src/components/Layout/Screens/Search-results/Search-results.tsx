'use client'

import { FC } from 'react'

import styles from './Search-results.module.scss'
import { Catalog } from '@/components/shared/Catalog/Catalog'
import { useTypedSelector } from '@/hooks/use-typed-selector'
import { videoApi } from '@/store/video/video.api'

export const SearchResults: FC = () => {
  const { searchValue } = useTypedSelector((state) => state.search)
  // const { data: foundVideos } = videoApi.useGetAllVideosQuery(searchValue)

  return (
    <div>
      {/* {foundVideos?.length !== 0 ? (
        <Catalog videos={foundVideos} />
      ) : (
        <div className={styles.notFound}>
          {`По запросу: "${searchValue}" ничего не найденно!`}
        </div>
      )} */}
    </div>
  )
}
