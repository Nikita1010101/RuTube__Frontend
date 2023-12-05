import { Home } from '@/components/Layout/Screens/Home/Home'
import { VideoService } from '@/services/video.service'

async function getData() {
  try {
    const { data } = await VideoService.getAll()
    return data
  } catch (error) {
    throw error
  }
}

export const revalidate = 3000

export default async function HomePage() {
  const videos = await getData()
  return <Home videos={videos} />
}
