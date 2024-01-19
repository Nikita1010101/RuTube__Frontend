import React from 'react'

import { Video } from '@/components/Layout/Screens/Video/Video'
import { VideoService } from '@/services/video.service'
import { TPageParams } from '@/types/page.types'

async function getData(id: number) {
  const { data: video } = await VideoService.getOne(id)
  return video
}

export default async function VideoPage(context: TPageParams) {
  const video = await getData(+context.params.id)
  return <Video video={video} />
}
