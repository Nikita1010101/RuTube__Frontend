import React, { FC } from 'react'

import { Catalog } from '../Home/Catalog/Catalog'
import { Layout } from '../../Layout'

import { useAuth } from '@/hooks/useAuth'
import { videoApi } from '@/store/api/video.api'

export const MySubscriptions: FC = () => {
  const { profile } = useAuth()
  const { data: videoSubscriptions } = videoApi.useGetSubsciptionVideosQuery(
    Number(profile?.id)
  )

  return (
    <Layout title="Мои подписки" description="Подписки">
      <Catalog videos={videoSubscriptions} />
    </Layout>
  )
}
