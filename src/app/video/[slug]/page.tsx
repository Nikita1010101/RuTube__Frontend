import React from 'react'
import { redirect } from 'next/navigation'

import { Video } from '@/components/Layout/Screens/Video/Video'
import { VideoService } from '@/services/video.service'
import { TPageParams } from '@/types/page.types'

async function getData(id: number) {
  try {
    const { data: video } = await VideoService.getOne(id)
    return video
  } catch (error) {
    throw new Error((error as { message: string }).message)
  }
}

export default async function VideoPage(context: TPageParams) {
  const video = await getData(+context.params.slug)

  if (!video) {
    redirect('/')
  }

  return <Video video={video} />
}
