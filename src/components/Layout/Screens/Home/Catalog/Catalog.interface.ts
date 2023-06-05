import { IVideo } from "@/types/video.interface"

export interface ICatalog {
  videos?: IVideo[]
}

export interface ITitlesByPaths {
  path: string
  title: string
}