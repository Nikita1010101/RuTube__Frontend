import { StaticImageData } from "next/image"

export interface ISidebarRoutes {
  id: string
  route: string
  title: string
  picture: StaticImageData
  size: number
}