import { TVideo } from '@/types/video.types'

export function useCreateDiscoverVideos(videos: TVideo[] = [], randomId: number) {
  if (videos.length === 0) {
    return { popularVideo: undefined, randomVideo: undefined }
  }

  function findPopularVideoIndex() {
    let popularVideoIndex = 0

    for (let currentIndex = 1; currentIndex < videos.length; currentIndex++) {
      const maxViewsCount = videos[popularVideoIndex].views
      const currentViewsCount = videos[currentIndex].views

      if (maxViewsCount <= currentViewsCount) {
        popularVideoIndex = currentIndex
      }
    }

    return popularVideoIndex
  }

  const popularVideoIndex = findPopularVideoIndex()

  function findRandomVideoIndex() {
    const countVideos = videos.length

    switch (countVideos) {
      case 1:
        return 0

      case 2:
        return 1 - popularVideoIndex

      default:
        if (randomId === popularVideoIndex) {
         const randomVideoIndex = randomId - 1 === -1 ? randomId + 1 : randomId - 1  
         return randomVideoIndex
        }

        return randomId
    }
  }

  const randomVideoIndex = findRandomVideoIndex()

  const popularVideo = videos[popularVideoIndex]
  const randomVideo = videos[randomVideoIndex]

  return { popularVideo, randomVideo }
}
