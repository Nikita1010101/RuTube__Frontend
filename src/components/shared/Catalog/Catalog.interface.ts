import { TVideo } from '@/types/video.types'

export interface ICatalog {
  videos?: TVideo[]
  isLoading: boolean
  title: string
  showOptions?: boolean
}
