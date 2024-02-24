import { BarChart4, Home, ListVideo, Star } from 'lucide-react'

import { LINKS } from '@/constants/links.config'

import { ISidebarRoutes } from './Sidebar.interface'
import { SIDEBAR_TITLES } from '@/constants/titles.constant'

export const privateRoutes: ISidebarRoutes[] = [
  {
    id: 1,
    link: LINKS.home,
    title: SIDEBAR_TITLES.home,
    Icon: Home,
  },
  {
    id: 2,
    link: LINKS.trending,
    title: SIDEBAR_TITLES.trending,
    Icon: BarChart4,
  },
  {
    id: 3,
    link: LINKS.profile,
    title: SIDEBAR_TITLES.profile,
    Icon: Star,
  },
  {
    id: 4,
    link: LINKS.subscriptions(),
    title: SIDEBAR_TITLES.subscriptions,
    Icon: ListVideo,
  },
]

export const publicRoutes: ISidebarRoutes[] = [
  {
    id: 1,
    link: LINKS.home,
    title: SIDEBAR_TITLES.home,
    Icon: Home,
  },
  {
    id: 2,
    link: LINKS.trending,
    title: SIDEBAR_TITLES.trending,
    Icon: BarChart4,
  },
]
