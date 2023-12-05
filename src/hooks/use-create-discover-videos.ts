import { ICreateDiscoverVideoIndexes, ICreateDiscoverVideos } from "@/types/hook.interface"
import { IVideo } from "@/types/video.interface"

export function useCreateDiscoverVideos(videos: IVideo[] = []) {
  if (videos.length === 0) {
    return { popularVideo: undefined, randomVideo: undefined } as ICreateDiscoverVideos
  }

  const indexes: ICreateDiscoverVideoIndexes = {
    popularVideoIndex: 0,
    randomVideoIndex: 0,
  }

  for (let i = 0; i < videos.length; i++) {
    const popularVideoIndex = indexes.popularVideoIndex

    if (videos[i].views > videos[popularVideoIndex].views) {
      indexes.popularVideoIndex = i
    }
  }

  indexes.randomVideoIndex = indexes.popularVideoIndex === 0 ? 1 : 0

  return {
    popularVideo: videos[indexes.popularVideoIndex],
    randomVideo: videos[indexes.randomVideoIndex],
  } as ICreateDiscoverVideos
}