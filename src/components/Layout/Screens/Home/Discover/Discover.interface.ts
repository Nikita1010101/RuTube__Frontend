import { IVideo } from "@/types/video.interface"

export interface IDiscover {
  videos?: IVideo[]
	popularVideo: IVideo
	randomVideo: IVideo
}