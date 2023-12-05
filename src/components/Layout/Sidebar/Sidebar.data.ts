import mainIcon from '@/public/img/mainIcon.png'
import trandingIcon from '@/public/img/trandingIcon.png'
import starIcon from '@/public/img/starIcon.png'
import subscriptionsIcon from '@/public/img/subscriptionsIcon.png'
import { ISidebarRoutes } from "./Sidebar.interface";


export const privateRoutes: ISidebarRoutes[] = [
  {
    id: '1',
    route: '/',
    title: 'Главная',
    picture: mainIcon,
    size: 18
  },
  {
    id: '2',
    route: '/trending',
    title: 'Тренды',
    picture: trandingIcon,
    size: 24
  },
  {
    id: '3',
    route: '/profile',
    title: 'Мой канал',
    picture: starIcon,
    size: 14
  },
  {
    id: '4',
    route: '/subscription',
    title: 'Мои подписки',
    picture: subscriptionsIcon,
    size: 14
  },
  
]

export const publicRoutes: ISidebarRoutes[] = [
  {
    id: '1',
    route: '/',
    title: 'Главная',
    picture: mainIcon,
    size: 18
  },
  {
    id: '2',
    route: '/trending',
    title: 'Тренды',
    picture: trandingIcon,
    size: 24
  }
]