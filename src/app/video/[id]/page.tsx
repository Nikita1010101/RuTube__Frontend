import { Video } from '@/components/Layout/Screens/Video/Video'
import { VideoService } from '@/services/video.service'
import React from 'react'

type PageProps = {
  params: {
    id: string
  }
}

async function getData(id: number) {
  const { data: video } = await VideoService.getById(id)
  return video
}

export default async function VideoPage(context: PageProps) {
  const video = await getData(Number(context.params.id))
  return <Video video={video} />
}