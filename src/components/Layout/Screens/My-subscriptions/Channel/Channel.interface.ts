import { IVideo } from "@/types/video.interface";

export interface IChannel {
  userId: string
  videos: IVideo[]
}